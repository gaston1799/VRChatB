# Installer TODO List

The project contains multiple scripts and helper files. The following issues were observed and should be addressed to make the installer usable and maintainable.

## General cleanup
- Remove leftover shell prompts like `root@...` from script files. These appear at the end of several `.bat` and `.cmd` files and break execution.
- Fix numerous typos across the repository (e.g. "Intaller", "alreasy", "fixzed") as seen in `README.md` lines 17 and 45.
- Delete duplicate or obsolete scripts. There are multiple installers (`_installer.cmd`, `Run_me.cmd`, `mycmd.cmd`, etc.) with overlapping functionality.
- Ensure consistent naming of files and variables. Some functions in `index.js` use placeholders like `__________`.

## Script functionality
- Consolidate repeated download logic in `_installer.cmd`; for example, `CameraAnimation.dll` is downloaded twice (lines 66 and 132).
- Replace non‑Windows commands such as `killall VRChat.exe` (lines 415, 433, and 442) with standard Windows equivalents or remove them.
- Quote all paths to handle spaces correctly. `mycmd.cmd` writes to `C:///Program Files...` which may fail.
- Provide proper detection of the VRChat installation path and avoid scanning all drives whenever possible.

## Project structure
- Use package.json scripts or a small Node script instead of embedding huge command strings inside `index.js`.
- Avoid installing npm packages globally; use local dependencies instead (`start.bat` lines 28‑37).
- Add usage instructions and a license file so users know how to use and redistribute the installer.

## Testing
- Add automated checks to verify that mods download successfully and the game launches.
- Consider adding unit tests for the Node parts of the installer.
