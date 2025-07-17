// Node CLI to select and download mods
const fs = require('fs');
const path = require('path');
const https = require('https');
const readline = require('readline');

const indexFile = path.join(__dirname, 'index.js');
const content = fs.readFileSync(indexFile, 'utf8');
const urlRegex = /https?:\/\/[^\s"'`]+/g;
const urls = Array.from(new Set(content.match(urlRegex) || []));

const mods = urls.map(u => {
  const name = u.split('/').pop().split('?')[0];
  return { name, url: u };
});

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

console.log('Available mods:');
mods.forEach((m, i) => {
  console.log(`${i + 1}) ${m.name}`);
});
console.log('Enter numbers separated by spaces to select mods or press ENTER for all');

rl.question('Selection: ', answer => {
  let selected;
  if (!answer.trim()) {
    selected = mods;
  } else {
    const numbers = answer.split(/\s+/).map(n => parseInt(n, 10) - 1).filter(n => !isNaN(n) && n >= 0 && n < mods.length);
    selected = numbers.map(n => mods[n]);
  }
  rl.close();
  if (selected.length === 0) {
    console.log('No mods selected.');
    return;
  }
  const modDir = path.join(__dirname, 'mods');
  if (!fs.existsSync(modDir)) fs.mkdirSync(modDir);
  downloadMods(selected, modDir);
});

function downloadMods(list, dir) {
  let completed = 0;
  list.forEach(mod => {
    const filePath = path.join(dir, mod.name);
    const file = fs.createWriteStream(filePath);
    https.get(mod.url, res => {
      if (res.statusCode !== 200) {
        console.error(`Failed to download ${mod.name}: ${res.statusCode}`);
        checkDone();
        return;
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(checkDone);
        console.log(`Downloaded ${mod.name}`);
      });
    }).on('error', err => {
      fs.unlink(filePath, () => {});
      console.error(`Error downloading ${mod.name}:`, err.message);
      checkDone();
    });
  });

  function checkDone() {
    completed++;
    if (completed === list.length) {
      console.log('All downloads finished.');
    }
  }
}
