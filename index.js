const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
};

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateName() {
    var name1 = ["abandoned", "able", "absolute", "adorable", "adventurous", "academic", "acceptable", "acclaimed", "accomplished", "accurate", "aching", "acidic", "acrobatic", "active", "actual", "adept", "admirable", "admired", "adolescent", "adorable", "adored", "advanced", "afraid", "affectionate", "aged", "aggravating", "aggressive", "agile", "agitated", "agonizing", "agreeable", "ajar", "alarmed", "alarming", "alert", "alienated", "alive", "all", "altruistic", "amazing", "ambitious", "ample", "amused", "amusing", "anchored", "ancient", "angelic", "angry", "anguished", "animated", "annual", "another", "antique", "anxious", "any", "apprehensive", "appropriate", "apt", "arctic", "arid", "aromatic", "artistic", "ashamed", "assured", "astonishing", "athletic", "attached", "attentive", "attractive", "austere", "authentic", "authorized", "automatic", "avaricious", "average", "aware", "awesome", "awful", "awkward", "babyish", "bad", "back", "baggy", "bare", "barren", "basic", "beautiful", "belated", "beloved", "beneficial", "better", "best", "bewitched", "big", "big-hearted", "biodegradable", "bite-sized", "bitter", "black", "black-and-white", "bland", "blank", "blaring", "bleak", "blind", "blissful", "blond", "blue", "blushing", "bogus", "boiling", "bold", "bony", "boring", "bossy", "both", "bouncy", "bountiful", "bowed", "brave", "breakable", "brief", "bright", "brilliant", "brisk", "broken", "bronze", "brown", "bruised", "bubbly", "bulky", "bumpy", "buoyant", "burdensome", "burly", "bustling", "busy", "buttery", "buzzing", "calculating", "calm", "candid", "canine", "capital", "carefree", "careful", "careless", "caring", "cautious", "cavernous", "celebrated", "charming", "cheap", "cheerful", "cheery", "chief", "chilly", "chubby", "circular", "classic", "clean", "clear", "clear-cut", "clever", "close", "closed", "cloudy", "clueless", "clumsy", "cluttered", "coarse", "cold", "colorful", "colorless", "colossal", "comfortable", "common", "compassionate", "competent", "complete", "complex", "complicated", "composed", "concerned", "concrete", "confused", "conscious", "considerate", "constant", "content", "conventional", "cooked", "cool", "cooperative", "coordinated", "corny", "corrupt", "costly", "courageous", "courteous", "crafty", "crazy", "creamy", "creative", "creepy", "criminal", "crisp", "critical", "crooked", "crowded", "cruel", "crushing", "cuddly", "cultivated", "cultured", "cumbersome", "curly", "curvy", "cute", "cylindrical", "damaged", "damp", "dangerous", "dapper", "daring", "darling", "dark", "dazzling", "dead", "deadly", "deafening", "dear", "dearest", "decent", "decimal", "decisive", "deep", "defenseless", "defensive", "defiant", "deficient", "definite", "definitive", "delayed", "delectable", "delicious", "delightful", "delirious", "demanding", "dense", "dental", "dependable", "dependent", "descriptive", "deserted", "detailed", "determined", "devoted", "different", "difficult", "digital", "diligent", "dim", "dimpled", "dimwitted", "direct", "disastrous", "discrete", "disfigured", "disgusting", "disloyal", "dismal", "distant", "downright", "dreary", "dirty", "disguised", "dishonest", "dismal", "distant", "distinct", "distorted", "dizzy", "dopey", "doting", "double", "downright", "drab", "drafty", "dramatic", "dreary", "droopy", "dry", "dual", "dull", "dutiful", "each", "eager", "earnest", "early", "easy", "easy-going", "ecstatic", "edible", "educated", "elaborate", "elastic", "elated", "elderly", "electric", "elegant", "elementary", "elliptical", "embarrassed", "embellished", "eminent", "emotional", "empty", "enchanted", "enchanting", "energetic", "enlightened", "enormous", "enraged", "entire", "envious", "equal", "equatorial", "essential", "esteemed", "ethical", "euphoric", "even", "evergreen", "everlasting", "every", "evil", "exalted", "excellent", "exemplary", "exhausted", "excitable", "excited", "exciting", "exotic", "expensive", "experienced", "expert", "extraneous", "extroverted", "extra-large", "extra-small", "fabulous", "failing", "faint", "fair", "faithful", "fake", "false", "familiar", "famous", "fancy", "fantastic", "far", "faraway", "far-flung", "far-off", "fast", "fat", "fatal", "fatherly", "favorable", "favorite", "fearful", "fearless", "feisty", "feline", "female", "feminine", "few", "fickle", "filthy", "fine", "finished", "firm", "first", "firsthand", "fitting", "fixed", "flaky", "flamboyant", "flashy", "flat", "flawed", "flawless", "flickering", "flimsy", "flippant", "flowery", "fluffy", "fluid", "flustered", "focused", "fond", "foolhardy", "foolish", "forceful", "forked", "formal", "forsaken", "forthright", "fortunate", "fragrant", "frail", "frank", "frayed", "free", "French", "fresh", "frequent", "friendly", "frightened", "frightening", "frigid", "frilly", "frizzy", "frivolous", "front", "frosty", "frozen", "frugal", "fruitful", "full", "fumbling", "functional", "funny", "fussy", "fuzzy", "gargantuan", "gaseous", "general", "generous", "gentle", "genuine", "giant", "giddy", "gigantic", "gifted", "giving", "glamorous", "glaring", "glass", "gleaming", "gleeful", "glistening", "glittering", "gloomy", "glorious", "glossy", "glum", "golden", "good", "good-natured", "gorgeous", "graceful", "gracious", "grand", "grandiose", "granular", "grateful", "grave", "gray", "great", "greedy", "green", "gregarious", "grim", "grimy", "gripping", "grizzled", "gross", "grotesque", "grouchy", "grounded", "growing", "growling", "grown", "grubby", "gruesome", "grumpy", "guilty", "gullible", "gummy", "hairy", "half", "handmade", "handsome", "handy", "happy", "happy-go-lucky", "hard", "hard-to-find", "harmful", "harmless", "harmonious", "harsh", "hasty", "hateful", "haunting", "healthy", "heartfelt", "hearty", "heavenly", "heavy", "hefty", "helpful", "helpless", "hidden", "hideous", "high", "high-level", "hilarious", "hoarse", "hollow", "homely", "honest", "honorable", "honored", "hopeful", "horrible", "hospitable", "hot", "huge", "humble", "humiliating", "humming", "humongous", "hungry", "hurtful", "husky", "icky", "icy", "ideal", "idealistic", "identical", "idle", "idiotic", "idolized", "ignorant", "ill", "illegal", "ill-fated", "ill-informed", "illiterate", "illustrious", "imaginary", "imaginative", "immaculate", "immaterial", "immediate", "immense", "impassioned", "impeccable", "impartial", "imperfect", "imperturbable", "impish", "impolite", "important", "impossible", "impractical", "impressionable", "impressive", "improbable", "impure", "inborn", "incomparable", "incompatible", "incomplete", "inconsequential", "incredible", "indelible", "inexperienced", "indolent", "infamous", "infantile", "infatuated", "inferior", "infinite", "informal", "innocent", "insecure", "insidious", "insignificant", "insistent", "instructive", "insubstantial", "intelligent", "intent", "intentional", "interesting", "internal", "international", "intrepid", "ironclad", "irresponsible", "irritating", "itchy", "jaded", "jagged", "jam-packed", "jaunty", "jealous", "jittery", "joint", "jolly", "jovial", "joyful", "joyous", "jubilant", "judicious", "juicy", "jumbo", "junior", "jumpy", "juvenile", "kaleidoscopic", "keen", "key", "kind", "kindhearted", "kindly", "klutzy", "knobby", "knotty", "knowledgeable", "knowing", "known", "kooky", "kosher", "lame", "lanky", "large", "last", "lasting", "late", "lavish", "lawful", "lazy", "leading", "lean", "leafy", "left", "legal", "legitimate", "light", "lighthearted", "likable", "likely", "limited", "limp", "limping", "linear", "lined", "liquid", "little", "live", "lively", "livid", "loathsome", "lone", "lonely", "long", "long-term", "loose", "lopsided", "lost", "loud", "lovable", "lovely", "loving", "low", "loyal", "lucky", "lumbering", "luminous", "lumpy", "lustrous", "luxurious", "mad", "made-up", "magnificent", "majestic", "major", "male", "mammoth", "married", "marvelous", "masculine", "massive", "mature", "meager", "mealy", "mean", "measly", "meaty", "medical", "mediocre", "medium", "meek", "mellow", "melodic", "memorable", "menacing", "merry", "messy", "metallic", "mild", "milky", "mindless", "miniature", "minor", "minty", "miserable", "miserly", "misguided", "misty", "mixed", "modern", "modest", "moist", "monstrous", "monthly", "monumental", "moral", "mortified", "motherly", "motionless", "mountainous", "muddy", "muffled", "multicolored", "mundane", "murky", "mushy", "musty", "muted", "mysterious", "naive", "narrow", "nasty", "natural", "naughty", "nautical", "near", "neat", "necessary", "needy", "negative", "neglected", "negligible", "neighboring", "nervous", "new", "next", "nice", "nifty", "nimble", "nippy", "nocturnal", "noisy", "nonstop", "normal", "notable", "noted", "noteworthy", "novel", "noxious", "numb", "nutritious", "nutty", "obedient", "obese", "oblong", "oily", "oblong", "obvious", "occasional", "odd", "oddball", "offbeat", "offensive", "official", "old", "old-fashioned", "only", "open", "optimal", "optimistic", "opulent", "orange", "orderly", "organic", "ornate", "ornery", "ordinary", "original", "other", "our", "outlying", "outgoing", "outlandish", "outrageous", "outstanding", "oval", "overcooked", "overdue", "overjoyed", "overlooked", "palatable", "pale", "paltry", "parallel", "parched", "partial", "passionate", "past", "pastel", "peaceful", "peppery", "perfect", "perfumed", "periodic", "perky", "personal", "pertinent", "pesky", "pessimistic", "petty", "phony", "physical", "piercing", "pink", "pitiful", "plain", "plaintive", "plastic", "playful", "pleasant", "pleased", "pleasing", "plump", "plush", "polished", "polite", "political", "pointed", "pointless", "poised", "poor", "popular", "portly", "posh", "positive", "possible", "potable", "powerful", "powerless", "practical", "precious", "present", "prestigious", "pretty", "precious", "previous", "pricey", "prickly", "primary", "prime", "pristine", "private", "prize", "probable", "productive", "profitable", "profuse", "proper", "proud", "prudent", "punctual", "pungent", "puny", "pure", "purple", "pushy", "putrid", "puzzled", "puzzling", "quaint", "qualified", "quarrelsome", "quarterly", "queasy", "querulous", "questionable", "quick", "quick-witted", "quiet", "quintessential", "quirky", "quixotic", "quizzical", "radiant", "ragged", "rapid", "rare", "rash", "raw", "recent", "reckless", "rectangular", "ready", "real", "realistic", "reasonable", "red", "reflecting", "regal", "regular", "reliable", "relieved", "remarkable", "remorseful", "remote", "repentant", "required", "respectful", "responsible", "repulsive", "revolving", "rewarding", "rich", "rigid", "right", "ringed", "ripe", "roasted", "robust", "rosy", "rotating", "rotten", "rough", "round", "rowdy", "royal", "rubbery", "rundown", "ruddy", "rude", "runny", "rural", "rusty", "sad", "safe", "salty", "same", "sandy", "sane", "sarcastic", "sardonic", "satisfied", "scaly", "scarce", "scared", "scary", "scented", "scholarly", "scientific", "scornful", "scratchy", "scrawny", "second", "secondary", "second-hand", "secret", "self-assured", "self-reliant", "selfish", "sentimental", "separate", "serene", "serious", "serpentine", "several", "severe", "shabby", "shadowy", "shady", "shallow", "shameful", "shameless", "sharp", "shimmering", "shiny", "shocked", "shocking", "shoddy", "short", "short-term", "showy", "shrill", "shy", "sick", "silent", "silky", "silly", "silver", "similar", "simple", "simplistic", "sinful", "single", "sizzling", "skeletal", "skinny", "sleepy", "slight", "slim", "slimy", "slippery", "slow", "slushy", "small", "smart", "smoggy", "smooth", "smug", "snappy", "snarling", "sneaky", "sniveling", "snoopy", "sociable", "soft", "soggy", "solid", "somber", "some", "spherical", "sophisticated", "sore", "sorrowful", "soulful", "soupy", "sour", "Spanish", "sparkling", "sparse", "specific", "spectacular", "speedy", "spicy", "spiffy", "spirited", "spiteful", "splendid", "spotless", "spotted", "spry", "square", "squeaky", "squiggly", "stable", "staid", "stained", "stale", "standard", "starchy", "stark", "starry", "steep", "sticky", "stiff", "stimulating", "stingy", "stormy", "straight", "strange", "steel", "strict", "strident", "striking", "striped", "strong", "studious", "stunning", "stupendous", "stupid", "sturdy", "stylish", "subdued", "submissive", "substantial", "subtle", "suburban", "sudden", "sugary", "sunny", "super", "superb", "superficial", "superior", "supportive", "sure-footed", "surprised", "suspicious", "svelte", "sweaty", "sweet", "sweltering", "swift", "sympathetic", "tall", "talkative", "tame", "tan", "tangible", "tart", "tasty", "tattered", "taut", "tedious", "teeming", "tempting", "tender", "tense", "tepid", "terrible", "terrific", "testy", "thankful", "that", "these", "thick", "thin", "third", "thirsty", "this", "thorough", "thorny", "those", "thoughtful", "threadbare", "thrifty", "thunderous", "tidy", "tight", "timely", "tinted", "tiny", "tired", "torn", "total", "tough", "traumatic", "treasured", "tremendous", "tragic", "trained", "tremendous", "triangular", "tricky", "trifling", "trim", "trivial", "troubled", "true", "trusting", "trustworthy", "trusty", "truthful", "tubby", "turbulent", "twin", "ugly", "ultimate", "unacceptable", "unaware", "uncomfortable", "uncommon", "unconscious", "understated", "unequaled", "uneven", "unfinished", "unfit", "unfolded", "unfortunate", "unhappy", "unhealthy", "uniform", "unimportant", "unique", "united", "unkempt", "unknown", "unlawful", "unlined", "unlucky", "unnatural", "unpleasant", "unrealistic", "unripe", "unruly", "unselfish", "unsightly", "unsteady", "unsung", "untidy", "untimely", "untried", "untrue", "unused", "unusual", "unwelcome", "unwieldy", "unwilling", "unwitting", "unwritten", "upbeat", "upright", "upset", "urban", "usable", "used", "useful", "useless", "utilized", "utter", "vacant", "vague", "vain", "valid", "valuable", "vapid", "variable", "vast", "velvety", "venerated", "vengeful", "verifiable", "vibrant", "vicious", "victorious", "vigilant", "vigorous", "villainous", "violet", "violent", "virtual", "virtuous", "visible", "vital", "vivacious", "vivid", "voluminous", "wan", "warlike", "warm", "warmhearted", "warped", "wary", "wasteful", "watchful", "waterlogged", "watery", "wavy", "wealthy", "weak", "weary", "webbed", "wee", "weekly", "weepy", "weighty", "weird", "welcome", "well-documented", "well-groomed", "well-informed", "well-lit", "well-made", "well-off", "well-to-do", "well-worn", "wet", "which", "whimsical", "whirlwind", "whispered", "white", "whole", "whopping", "wicked", "wide", "wide-eyed", "wiggly", "wild", "willing", "wilted", "winding", "windy", "winged", "wiry", "wise", "witty", "wobbly", "woeful", "wonderful", "wooden", "woozy", "wordy", "worldly", "worn", "worried", "worrisome", "worse", "worst", "worthless", "worthwhile", "worthy", "wrathful", "wretched", "writhing", "wrong", "wry", "yawning", "yearly", "yellow", "yellowish", "young", "youthful", "yummy", "zany", "zealous", "zesty", "zigzag", "rocky"];

    var name2 = ["people", "history", "way", "art", "world", "information", "map", "family", "government", "health", "system", "computer", "meat", "year", "thanks", "music", "person", "reading", "method", "data", "food", "understanding", "theory", "law", "bird", "literature", "problem", "software", "control", "knowledge", "power", "ability", "economics", "love", "internet", "television", "science", "library", "nature", "fact", "product", "idea", "temperature", "investment", "area", "society", "activity", "story", "industry", "media", "thing", "oven", "community", "definition", "safety", "quality", "development", "language", "management", "player", "variety", "video", "week", "security", "country", "exam", "movie", "organization", "equipment", "physics", "analysis", "policy", "series", "thought", "basis", "boyfriend", "direction", "strategy", "technology", "army", "camera", "freedom", "paper", "environment", "child", "instance", "month", "truth", "marketing", "university", "writing", "article", "department", "difference", "goal", "news", "audience", "fishing", "growth", "income", "marriage", "user", "combination", "failure", "meaning", "medicine", "philosophy", "teacher", "communication", "night", "chemistry", "disease", "disk", "energy", "nation", "road", "role", "soup", "advertising", "location", "success", "addition", "apartment", "education", "math", "moment", "painting", "politics", "attention", "decision", "event", "property", "shopping", "student", "wood", "competition", "distribution", "entertainment", "office", "population", "president", "unit", "category", "cigarette", "context", "introduction", "opportunity", "performance", "driver", "flight", "length", "magazine", "newspaper", "relationship", "teaching", "cell", "dealer", "debate", "finding", "lake", "member", "message", "phone", "scene", "appearance", "association", "concept", "customer", "death", "discussion", "housing", "inflation", "insurance", "mood", "woman", "advice", "blood", "effort", "expression", "importance", "opinion", "payment", "reality", "responsibility", "situation", "skill", "statement", "wealth", "application", "city", "county", "depth", "estate", "foundation", "grandmother", "heart", "perspective", "photo", "recipe", "studio", "topic", "collection", "depression", "imagination", "passion", "percentage", "resource", "setting", "ad", "agency", "college", "connection", "criticism", "debt", "description", "memory", "patience", "secretary", "solution", "administration", "aspect", "attitude", "director", "personality", "psychology", "recommendation", "response", "selection", "storage", "version", "alcohol", "argument", "complaint", "contract", "emphasis", "highway", "loss", "membership", "possession", "preparation", "steak", "union", "agreement", "cancer", "currency", "employment", "engineering", "entry", "interaction", "limit", "mixture", "preference", "region", "republic", "seat", "tradition", "virus", "actor", "classroom", "delivery", "device", "difficulty", "drama", "election", "engine", "football", "guidance", "hotel", "match", "owner", "priority", "protection", "suggestion", "tension", "variation", "anxiety", "atmosphere", "awareness", "bread", "climate", "comparison", "confusion", "construction", "elevator", "emotion", "employee", "employer", "guest", "height", "leadership", "mall", "manager", "operation", "recording", "respect", "sample", "transportation", "boring", "charity", "cousin", "disaster", "editor", "efficiency", "excitement", "extent", "feedback", "guitar", "homework", "leader", "mom", "outcome", "permission", "presentation", "promotion", "reflection", "refrigerator", "resolution", "revenue", "session", "singer", "tennis", "basket", "bonus", "cabinet", "childhood", "church", "clothes", "coffee", "dinner", "drawing", "hair", "hearing", "initiative", "judgment", "lab", "measurement", "mode", "mud", "orange", "poetry", "police", "possibility", "procedure", "queen", "ratio", "relation", "restaurant", "satisfaction", "sector", "signature", "significance", "song", "tooth", "town", "vehicle", "volume", "wife", "accident", "airport", "appointment", "arrival", "assumption", "baseball", "chapter", "committee", "conversation", "database", "enthusiasm", "error", "explanation", "farmer", "gate", "girl", "hall", "historian", "hospital", "injury", "instruction", "maintenance", "manufacturer", "meal", "perception", "pie", "poem", "presence", "proposal", "reception", "replacement", "revolution", "river", "son", "speech", "tea", "village", "warning", "winner", "worker", "writer", "assistance", "breath", "buyer", "chest", "chocolate", "conclusion", "contribution", "cookie", "courage", "desk", "drawer", "establishment", "examination", "garbage", "grocery", "honey", "impression", "improvement", "independence", "insect", "inspection", "inspector", "king", "ladder", "menu", "penalty", "piano", "potato", "profession", "professor", "quantity", "reaction", "requirement", "salad", "sister", "supermarket", "tongue", "weakness", "wedding", "affair", "ambition", "analyst", "apple", "assignment", "assistant", "bathroom", "bedroom", "beer", "birthday", "celebration", "championship", "cheek", "client", "consequence", "departure", "diamond", "dirt", "ear", "fortune", "friendship", "funeral", "gene", "girlfriend", "hat", "indication", "intention", "lady", "midnight", "negotiation", "obligation", "passenger", "pizza", "platform", "poet", "pollution", "recognition", "reputation", "shirt", "speaker", "stranger", "surgery", "sympathy", "tale", "throat", "trainer", "uncle", "youth", "time", "work", "film", "water", "money", "example", "while", "business", "study", "game", "life", "form", "air", "day", "place", "number", "part", "field", "fish", "back", "process", "heat", "hand", "experience", "job", "book", "end", "point", "type", "home", "economy", "value", "body", "market", "guide", "interest", "state", "radio", "course", "company", "price", "size", "card", "list", "mind", "trade", "line", "care", "group", "risk", "word", "fat", "force", "key", "light", "training", "name", "school", "top", "amount", "level", "order", "practice", "research", "sense", "service", "piece", "web", "boss", "sport", "fun", "house", "page", "term", "test", "answer", "sound", "focus", "matter", "kind", "soil", "board", "oil", "picture", "access", "garden", "range", "rate", "reason", "future", "site", "demand", "exercise", "image", "case", "cause", "coast", "action", "age", "bad", "boat", "record", "result", "section", "building", "mouse", "cash", "class", "period", "plan", "store", "tax", "side", "subject", "space", "rule", "stock", "weather", "chance", "figure", "man", "model", "source", "beginning", "earth", "program", "chicken", "design", "feature", "head", "material", "purpose", "question", "rock", "salt", "act", "birth", "car", "dog", "object", "scale", "sun", "note", "profit", "rent", "speed", "style", "war", "bank", "craft", "half", "inside", "outside", "standard", "bus", "exchange", "eye", "fire", "position", "pressure", "stress", "advantage", "benefit", "box", "frame", "issue", "step", "cycle", "face", "item", "metal", "paint", "review", "room", "screen", "structure", "view", "account", "ball", "discipline", "medium", "share", "balance", "bit", "black", "bottom", "choice", "gift", "impact", "machine", "shape", "tool", "wind", "address", "average", "career", "culture", "morning", "pot", "sign", "table", "task", "condition", "contact", "credit", "egg", "hope", "ice", "network", "north", "square", "attempt", "date", "effect", "link", "post", "star", "voice", "capital", "challenge", "friend", "self", "shot", "brush", "couple", "exit", "front", "function", "lack", "living", "plant", "plastic", "spot", "summer", "taste", "theme", "track", "wing", "brain", "button", "click", "desire", "foot", "gas", "influence", "notice", "rain", "wall", "base", "damage", "distance", "feeling", "pair", "savings", "staff", "sugar", "target", "text", "animal", "author", "budget", "discount", "file", "ground", "lesson", "minute", "officer", "phase", "reference", "register", "sky", "stage", "stick", "title", "trouble", "bowl", "bridge", "campaign", "character", "club", "edge", "evidence", "fan", "letter", "lock", "maximum", "novel", "option", "pack", "park", "quarter", "skin", "sort", "weight", "baby", "background", "carry", "dish", "factor", "fruit", "glass", "joint", "master", "muscle", "red", "strength", "traffic", "trip", "vegetable", "appeal", "chart", "gear", "ideal", "kitchen", "land", "log", "mother", "net", "party", "principle", "relative", "sale", "season", "signal", "spirit", "street", "tree", "wave", "belt", "bench", "commission", "copy", "drop", "minimum", "path", "progress", "project", "sea", "south", "status", "stuff", "ticket", "tour", "angle", "blue", "breakfast", "confidence", "daughter", "degree", "doctor", "dot", "dream", "duty", "essay", "father", "fee", "finance", "hour", "juice", "luck", "milk", "mouth", "peace", "pipe", "stable", "storm", "substance", "team", "trick", "afternoon", "bat", "beach", "blank", "catch", "chain", "consideration", "cream", "crew", "detail", "gold", "interview", "kid", "mark", "mission", "pain", "pleasure", "score", "screw", "sex", "shop", "shower", "suit", "tone", "window", "agent", "band", "bath", "block", "bone", "calendar", "candidate", "cap", "coat", "contest", "corner", "court", "cup", "district", "door", "east", "finger", "garage", "guarantee", "hole", "hook", "implement", "layer", "lecture", "lie", "manner", "meeting", "nose", "parking", "partner", "profile", "rice", "routine", "schedule", "swimming", "telephone", "tip", "winter", "airline", "bag", "battle", "bed", "bill", "bother", "cake", "code", "curve", "designer", "dimension", "dress", "ease", "emergency", "evening", "extension", "farm", "fight", "gap", "grade", "holiday", "horror", "horse", "host", "husband", "loan", "mistake", "mountain", "nail", "noise", "occasion", "package", "patient", "pause", "phrase", "proof", "race", "relief", "sand", "sentence", "shoulder", "smoke", "stomach", "string", "tourist", "towel", "vacation", "west", "wheel", "wine", "arm", "aside", "associate", "bet", "blow", "border", "branch", "breast", "brother", "buddy", "bunch", "chip", "coach", "cross", "document", "draft", "dust", "expert", "floor", "god", "golf", "habit", "iron", "judge", "knife", "landscape", "league", "mail", "mess", "native", "opening", "parent", "pattern", "pin", "pool", "pound", "request", "salary", "shame", "shelter", "shoe", "silver", "tackle", "tank", "trust", "assist", "bake", "bar", "bell", "bike", "blame", "boy", "brick", "chair", "closet", "clue", "collar", "comment", "conference", "devil", "diet", "fear", "fuel", "glove", "jacket", "lunch", "monitor", "mortgage", "nurse", "pace", "panic", "peak", "plane", "reward", "row", "sandwich", "shock", "spite", "spray", "surprise", "till", "transition", "weekend", "welcome", "yard", "alarm", "bend", "bicycle", "bite", "blind", "bottle", "cable", "candle", "clerk", "cloud", "concert", "counter", "flower", "grandfather", "harm", "knee", "lawyer", "leather", "load", "mirror", "neck", "pension", "plate", "purple", "ruin", "ship", "skirt", "slice", "snow", "specialist", "stroke", "switch", "trash", "tune", "zone", "anger", "award", "bid", "bitter", "boot", "bug", "camp", "candy", "carpet", "cat", "champion", "channel", "clock", "comfort", "cow", "crack", "engineer", "entrance", "fault", "grass", "guy", "hell", "highlight", "incident", "island", "joke", "jury", "leg", "lip", "mate", "motor", "nerve", "passage", "pen", "pride", "priest", "prize", "promise", "resident", "resort", "ring", "roof", "rope", "sail", "scheme", "script", "sock", "station", "toe", "tower", "truck", "witness", "can", "will", "other", "use", "make", "good", "look", "help", "go", "great", "being", "still", "public", "read", "keep", "start", "give", "human", "local", "general", "specific", "long", "play", "feel", "high", "put", "common", "set", "change", "simple", "past", "big", "possible", "particular", "major", "personal", "current", "national", "cut", "natural", "physical", "show", "try", "check", "second", "call", "move", "pay", "let", "increase", "single", "individual", "turn", "ask", "buy", "guard", "hold", "main", "offer", "potential", "professional", "international", "travel", "cook", "alternative", "special", "working", "whole", "dance", "excuse", "cold", "commercial", "low", "purchase", "deal", "primary", "worth", "fall", "necessary", "positive", "produce", "search", "present", "spend", "talk", "creative", "tell", "cost", "drive", "green", "support", "glad", "remove", "return", "run", "complex", "due", "effective", "middle", "regular", "reserve", "independent", "leave", "original", "reach", "rest", "serve", "watch", "beautiful", "charge", "active", "break", "negative", "safe", "stay", "visit", "visual", "affect", "cover", "report", "rise", "walk", "white", "junior", "pick", "unique", "classic", "final", "lift", "mix", "private", "stop", "teach", "western", "concern", "familiar", "fly", "official", "broad", "comfortable", "gain", "rich", "save", "stand", "young", "heavy", "lead", "listen", "valuable", "worry", "handle", "leading", "meet", "release", "sell", "finish", "normal", "press", "ride", "secret", "spread", "spring", "tough", "wait", "brown", "deep", "display", "flow", "hit", "objective", "shoot", "touch", "cancel", "chemical", "cry", "dump", "extreme", "push", "conflict", "eat", "fill", "formal", "jump", "kick", "opposite", "pass", "pitch", "remote", "total", "treat", "vast", "abuse", "beat", "burn", "deposit", "print", "raise", "sleep", "somewhere", "advance", "consist", "dark", "double", "draw", "equal", "fix", "hire", "internal", "join", "kill", "sensitive", "tap", "win", "attack", "claim", "constant", "drag", "drink", "guess", "minor", "pull", "raw", "soft", "solid", "wear", "weird", "wonder", "annual", "count", "dead", "doubt", "feed", "forever", "impress", "repeat", "round", "sing", "slide", "strip", "wish", "combine", "command", "dig", "divide", "equivalent", "hang", "hunt", "initial", "march", "mention", "spiritual", "survey", "tie", "adult", "brief", "crazy", "escape", "gather", "hate", "prior", "repair", "rough", "sad", "scratch", "sick", "strike", "employ", "external", "hurt", "illegal", "laugh", "lay", "mobile", "nasty", "ordinary", "respond", "royal", "senior", "split", "strain", "struggle", "swim", "train", "upper", "wash", "yellow", "convert", "crash", "dependent", "fold", "funny", "grab", "hide", "miss", "permit", "quote", "recover", "resolve", "roll", "sink", "slip", "spare", "suspect", "sweet", "swing", "twist", "upstairs", "usual", "abroad", "brave", "calm", "concentrate", "estimate", "grand", "male", "mine", "prompt", "quiet", "refuse", "regret", "reveal", "rush", "shake", "shift", "shine", "steal", "suck", "surround", "bear", "brilliant", "dare", "dear", "delay", "drunk", "female", "hurry", "inevitable", "invite", "kiss", "neat", "pop", "punch", "quit", "reply", "representative", "resist", "rip", "rub", "silly", "smile", "spell", "stretch", "stupid", "tear", "temporary", "tomorrow", "wake", "wrap", "yesterday", "Thomas", "Tom", "Lieuwe"];

    var name = capFirst(name1[getRandomInt(0, name1.length + 1)]) + ' ' + capFirst(name2[getRandomInt(0, name2.length + 1)]);
    return name;

}
function permutate(form) {

    var firstlastname = form.toLowerCase().trim();
    var namesplit = firstlastname.split(" ");
    var firstname = namesplit[0];
    var lastname = namesplit[1];
    var arr = [];
    var domain = ['gmail.com', 'yahoo.com', 'hotmail.com', 'msn.com', 'outlook.com', 'live.com', 'me.com', 'aol.com', 'mac.com'];

    if (firstname == null || firstname == "") {
        throw "At least enter a first name to get started!";
        return false;
    } else if (lastname == null || lastname == "") {
        throw "Come on!, enter a last name!";
    } else {
        for (var i = 0; i < domain.length; i = i + 1) {
            var p1 = firstname + "@" + domain[i] + ",";
            var p2 = firstname + lastname + "@" + domain[i] + ",";
            var p3 = firstname + "." + lastname + "@" + domain[i] + ",";
            var p4 = firstname.charAt(0) + lastname + "@" + domain[i] + ",";
            var p5 = firstname.charAt(0) + "." + lastname + "@" + domain[i] + ",";
            var p6 = firstname + lastname.charAt(0) + "@" + domain[i] + ",";
            var p7 = firstname + "." + lastname.charAt(0) + "@" + domain[i] + ",";
            var p8 = firstname.charAt(0) + lastname.charAt(0) + "@" + domain[i] + ",";
            var p9 = firstname + "_" + lastname + "@" + domain[i] + ",";
            var p10 = firstname.charAt(0) + "_" + lastname + "@" + domain[i] + ",";
            var p11 = lastname + firstname + "@" + domain[i] + ",";
            var p12 = lastname + "." + firstname + "@" + domain[i] + ",";
            var p13 = lastname + firstname.charAt(0) + "@" + domain[i] + ",";
            var p14 = lastname + "." + firstname.charAt(0) + "@" + domain[i];

            var addresses = p1 + " " + p2 + " " + p3 + " " + p4 + " " + p5 + " " + p6 + " " + p7 + " " + p8 + " " + p9 + " " + p10 + " " + p11 + " " + p12 + " " + p13 + " " + p14;
            arr.push(addresses)
        }
    }
    var innertext = arr;
    return innertext
}
Array.prototype.random = function (_this) {
    return this[generateRandomNumber(0, this.length)]
}
function getPassword(passwordLength = 12) {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password = "";
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    return password
}
class Account {
    constructor() {
        if (new.target) {
            Object.prototype._assign = function (source) {
                Object.assign(this, source);
            };
            const generate = function () {
                this._assign(
                    (function () {
                        var n = generateName().split(" ");
                        var g = generateRandomNumber;
                        var d = Date().match(/\d+/gi).map(eval)[1];
                        return {
                            firstName: n[0],
                            lastName: n[1],
                            email: permutate(n.join(" "))
                                .join(", ").split(", ")
                                .random(),
                            password: getPassword(g(8, 15)),
                            birthday: {
                                day: g(1, 29),
                                month: g(1, 12),
                                year: g(d - 100, d - 8)
                            }
                        };
                    })()
                );
            };
            const clear = function () {
                for (let i in this) { delete (this[i]); }
                this.clear = clear;
                this.generate = generate;
            };
            this.clear = clear;
            this.generate = generate;
        } else
            throw "Must use \"new\" keyword to generate accounts";
    }
}
if(typeof Timer=="undefined"){
    class Timer{
        constructor(interval,repeats=false,f){
            this.int=repeats?setInterval(f, interval):setTimeout(f, interval);
        }
        invalidate(){clearInterval(this.int);clearTimeout(this.int)}
    }
    Timer.schedule=function(interval,repeats,f){return new Timer(...arguments)}
    this.Timer=Timer
}
function sleep(ms) { return (async function () { await new Promise((a) => { Timer.schedule(ms, false, a) }) })() }



class coinBase {
    constructor(adress, network, name) {
        if (a && b && c) {
            this.AddCoinBAse(a, b, c)
        }
    }
    AddCoinBAse(adress, network, name) {
        this[address + network] = {}
        this[address + network].Balance = function () {
            return this[address + network].balance
        }
        this[address + network].update = function () {
            httpR(adress, network)
            // up date code
            this[address + network].oldBalance = this[address + network].balance
            this[address + network].balance = balance
            this[address + network].difference == this[address + network].balance - this[address + network].oldBalance
        }
    }
    async Update(adress, network) {
        this[adress + network].update()
    }
}
//npm i dns & npm i http & npm i got & npm i fs & npm i url-exists & npm i path & npm i perf_hooks & npm i https

const tester = async e => {
    var no
    const Http = new XMLHttpRequest();
    const url = e;
    await new Promise((a) => {
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange = (ec) => {
            !Http.responseText.length && ec.target.readyState == 4 && (no = true)
            ec.target.readyState == 4 && (a())
        }
    })
    if (no) { return !!0 }
    else { return !!1 }
}

var borken_mod = `ActiveBackground
AdvancedInvites
AskToPortal
AvatarLimbsGrabber
BetterDirections
BetterPortalPlacement
BetterSteadycam
CalibrateConfirm
CalibrationLinesVisualizer
CursorLockFix
DesktopCamera
DiscordMute
Double-Tap Runner
Friend Notes
FriendLocations
GestureIndicator
HeadTurn
HipTrackerRotator
ITR's Collider Mod
ITR's Gravity Controller
InstanceHistory
MLConsoleViewer
NameplateStats
OG Sitting And Standing Icon
Panic Button Rework
Player Rotater
PlayerList
PortalSelect
PreviewScroller
PrivateInstanceIcon
ProPlates
QMFreeze
QuickMenuVolume
Rank Volume Control
RememberMe
ScreenshotManager
SelectYourself
SmallUserVolume
StandaloneThirdPerson
TeleporterVR
TextChat
UnmuteSound
VRCPlusPet
VRCWSLibary
WorldPredownload`.split('\n').filter(e => `DesktopCamera
LeapMotionExtension
CalibrationLinesVisualizer
ScreenshotManager
NetworkSanity
KinectTrackingExtension
IKTweaks
MltnWorldTweaks
BetterLocomotion
VRCXCompanion
UserHistory
AskToPortal
BetterSteadycam
UserInfoExtensions
VRChatUtilityKit
AskToPortal
VRCQR`.split('\n').indexOf(e) < 0);
var _ = [
    "https://api.vrcmg.com/v0/mods/155/IKTweaks.dll",
    "https://api.vrcmg.com/v0/mods/292/DragFix.dll",
    "https://api.vrcmg.com/v0/mods/256/CameraAnimation.dll",
    "https://api.vrcmg.com/v0/mods/236/UserHistory.dll",
    "https://api.vrcmg.com/v0/mods/293/VRCX-Companion.dll",
    "https://api.vrcmg.com/v0/mods/296/MltnWorldTweaks.dll",
    "https://api.vrcmg.com/v0/mods/295/BetterLocomotion.dll",
    "https://api.vrcmg.com/v0/mods/291/Mic_Hider.dll",
    "https://api.vrcmg.com/v0/mods/294/CrawlSpeedToggle.dll",
    "https://api.vrcmg.com/v0/mods/255/NetworkSanity.dll",
    "https://api.vrcmg.com/v0/mods/173/BetterSteadycam.dll",
    "https://github.com/benaclejames/VRCFaceTracking/releases/download/v2.5.1/VRCFaceTracking.dll",
    "https://api.vrcmg.com/v0/mods/256/CameraAnimation.dll",
    "https://api.vrcmg.com/v0/mods/247/ml_alg.dll",
    "https://dl.emmvrc.com/downloads/emmVRCLoader.dll",
    "https://api.vrcmg.com/v0/mods/152/AskToPortal.dll",
    "https://api.vrcmg.com/v0/mods/145/UserInfoExtensions.dll",
    "https://cdn.discordapp.com/attachments/898965007247765604/899010243646865439/ReModCE.Loader.dll",
    "https://api.vrcmg.com/v0/mods/264/MuteTTS.dll",
    "https://api.vrcmg.com/v0/mods/231/VRChatUtilityKit.dll",
    "https://api.vrcmg.com/v0/mods/89/AdvancedSafety.dll",
    "https://api.vrcmg.com/v0/mods/255/RPCSanity.dll",
    "https://api.vrcmg.com/v0/mods/214/ml_clv.dll",
    "https://api.vrcmg.com/v0/mods/157/ViewPointTweaker.dll",
    "https://api.vrcmg.com/v0/mods/82/CameraMinus.dll",
    "https://api.vrcmg.com/v0/mods/52/JoinNotifier.dll",
    //"https://api.vrcmg.com/v0/mods/252/RealFly.dll",
    "https://api.vrcmg.com/v0/mods/183/ImmersiveTouch.dll",
    "https://api.vrcmg.com/v0/mods/249/UpdateChecker.dll",
    "https://api.vrcmg.com/v0/mods/121/PlayerRotater.dll",
    "https://api.vrcmg.com/v0/mods/55/UIExpansionKit.dll",
    "https://api.vrcmg.com/v0/mods/171/TrueShaderAntiCrash.dll",
    "https://api.vrcmg.com/v0/mods/245/PrivateInstanceIcon.dll",
    "https://api.vrcmg.com/v0/mods/239/ScreenshotManager.dll",
    "https://github.com/9E4ECDDE/MultiplayerDynamicBonesMod/releases/download/1043.2/MultiplayerDynamicBonesMod.dll",
    "https://api.vrcmg.com/v0/mods/112/DoubleTapRunner.dll",
    "https://api.vrcmg.com/v0/mods/102/BTKSAGestureMod.dll",
    "https://api.vrcmg.com/v0/mods/221/NoOutlines.dll",
    "https://api.vrcmg.com/v0/mods/218/PanicButtonRework.dll",
    "https://api.vrcmg.com/v0/mods/173/BetterSteadycam.dll",
    "https://api.vrcmg.com/v0/mods/106/OGTrustRanks.dll",
    "https://api.vrcmg.com/v0/mods/42/DesktopCamera.dll",
    "https://api.vrcmg.com/v0/mods/148/CloningBeGone.dll",
    "https://api.vrcmg.com/v0/mods/65/RuntimeGraphicsSettings.dll",
    "https://api.vrcmg.com/v0/mods/62/HWIDPatch.dll",
    "https://api.vrcmg.com/v0/mods/119/BTKSASelfPortrait.dll",
    "https://api.vrcmg.com/v0/mods/133/FinalIKSanity.dll",
    "https://api.vrcmg.com/v0/mods/56/MirrorResolutionUnlimiter.dll",
    "https://api.vrcmg.com/v0/mods/83/RememberMe.dll",
    "https://api.vrcmg.com/v0/mods/216/BetterDirections.dll",
    //"https://api.vrcmg.com/v0/mods/139/VRCBhapticsIntegration.dll",
    "https://api.vrcmg.com/v0/mods/210/SettingsRestart.dll",
    "https://api.vrcmg.com/v0/mods/192/ActiveBackground.dll",
    "https://api.vrcmg.com/v0/mods/114/PostProcessing.dll",
    "https://api.vrcmg.com/v0/mods/115/ToggleMicIcon.dll",
    "https://api.vrcmg.com/v0/mods/77/UniversalGamePriorityMod.dll",
    "https://api.vrcmg.com/v0/mods/211/TeleportCameraToYou.dll",
    ...(`https://api.vrcmg.com/v0/mods/272/VRCQR.dll
https://api.vrcmg.com/v0/mods/278/LocalHeadLightMod.dll
https://api.vrcmg.com/v0/mods/281/CameraFlashMod.dll
https://api.vrcmg.com/v0/mods/231/VRChatUtilityKit.dll`).split('\n')
].filter(e => borken_mod.indexOf(e.split('/').pop().split('.')[0]) < 0);
(typeof window != "undefined" ? window : typeof global != 'undefined' ? global : typeof globalThis != 'undefined' ? globalThis : this).urls = [];
function writetext(text, color = "black", ele) {
    var span = document.createElement(ele || 'span')
    var r = document.createElement('br')
    span.innerText = text;
    span.style.color = color
    document.body.appendChild(span)
    document.body.appendChild(r)
}
try {
    writetext('Checking mods please wait', "black", "h1")
} catch (error) {

}
/*_.forEach(async e=>{
    var pass=await tester(e);if(pass){writetext(e.split('/').pop()+' is working.','green')}
    else {writetext(e.split('/').pop()+' is not working.','red')}
})*/
const J = [
    /* RegEx */[],
    /* strings1 */[""],
    /* string2 */['/', '.', ' is working', '', 'green', '/', '.', ' is not working', '', 'red'],
    /*idk*/[''],
    /* GlobalObjs */[],
    /*idk*/{}
]
//_.forEach(async e=>{var R=await tester(e);if(R){writetext(e["split"](J[2][0])["pop"]()+J[2][2]+'.'+'',J[2][4])}else {writetext(e["split"](J[2][0])["pop"]()+J[2][7]+'.'+'',J[2][9])}})
function __________(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
function _d(link) {
    var file = link.split('/').pop();
    var path = 'mods/' + file;
    return `if exist "mods/${file}" (
        echo ${file} alreasy exist
    ) else (
        ${'powershell -c "Invoke-WebRequest -Uri \'' + link + '\' -OutFile \'' + path + '\'" & echo downloaded ' + file}
    )`
}
var code2 = _.map(link => {
    var file = link.split('/').pop();
    var path = 'mods/' + file;
    return `if exist "mods/${file}" (
        echo ${file} alreasy exist
    ) else (
        ${'powershell -c "Invoke-WebRequest -Uri \'' + link + '\' -OutFile \'' + path + '\'" & echo downloaded ' + file}
    )\n`
})
var CODE = `
@echo off
title Searching for game files
:startp
set gamePath=c:\\
set gameFound=0

FOR %%G IN (c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z) DO (
    echo checking %%G: drive
    if EXIST %%G: if not gameFound==1 (
        cd /d "%%G:\\"
        FOR /F "tokens=* USEBACKQ" %%F IN (\`dir VRChat /s /b /A:D /A:-H /A:-A /A:-S\`) DO (
            cls
            echo Drive:%%G
            echo ...
            echo File:%%F
            echo ...
            SET str=%%F
            echo %%F|find "steamapps" >nul
            echo %%F|find "VRChat" >nul
            echo %%F|find "common" >nul
            if not errorlevel 1 (
                echo is game :true
                @echo on
                set gameFound=1
                set gamePath="%%F"
                echo found game
                @echo off
                goto foundG
            ) ELSE (
                echo is game :false
            )
        )
        if not gameFound==0 ECHO game not found on drive:$$G
    ) ELSE (
        if not gameFound==1 (echo drive %%G not found) 
    )
)
if not gameFound==1 (
    set /p id="Cant find game path please enter the gamepath to vrchat remove quotes"
    goto conT
)
:foundG
if not gameFound==0 (
    echo Game found at %gamePath%
    goto conT
)
:conT
cls
echo "Welcome,"
set id=%gamePath%
cd /d %id%
mkdir mods
${code2.join('\n') + '\n'}
:A
cls
echo.
echo Question?...
echo.
set /p menu="Do you want to restart your game? (Y/N): "
if %menu%==Y goto Yes
if %menu%==y goto Yes
if %menu%==N goto No
if %menu%==n goto No
cls
echo.
echo Mmm try again...
echo.
set /p pause="Press any key to continue!... "
goto A

:Yes
cls
taskkill /F /IM "vrchat.exe" /T
title stopping vrchat.exe
killall VRChat.exe
echo.
echo Okay, Starting game...
echo.
set /p menu="Do want to start your game in vr mode? (Y/N): "
if %menu%==Y goto Yess
if %menu%==y goto Yess
if %menu%==N goto Nos
if %menu%==n goto Nos
:No
cls
echo.
echo Okay, let's exit...
echo.
start /b "" cmd /c del "%~f0"&exit /b
:Yess
taskkill /F /IM "vrchat.exe" /T
title stopping vrchat.exe
killall VRChat.exe
echo.
echo Okay, Starting game...
echo.
start vrchat://launch
start /b "" cmd /c del "%~f0"&exit /b
:Nos
taskkill /F /IM "vrchat.exe" /T
title stopping vrchat.exe
killall VRChat.exe
echo.
echo Okay, Starting game...
echo.

start vrchat://launch --no-vr
start /b "" cmd /c del "%~f0"&exit /b
`;
console.log(code2)
if (typeof document != "undefined") {
    console.log('Created cmd download for web users');
    __________('Run_me.cmd', CODE)
    writetext("There should be a downlaoded file", "green", "h1")
    window.stop()
    //return
} else {
    const fs = require("fs")
    fs.writeFile('_installer.cmd', CODE, e => {
        process.exit()
    })
}
