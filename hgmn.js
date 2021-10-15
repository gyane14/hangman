/*IIFE Satements
(function(){
'use strict';
*/


const words = ["RUMOR", "HAPPEN", "MATCH", "SAIL", "SICK", "FLOOR", "SUMMIT", "SHADOW", "CENSUS", "CHORUS", "LAUNCH", "ABBEY", "EJECT", "RESIST", "GUILT", "REPEAT", "DRAMA", "EASY", "MORSEL", "SWIPE", "EQUIP", "READER", "PRAY", "GRAVE", "CORD", "CHEEK", "FIGURE", "REBEL", "NATIVE", "RACK", "FADE", "BASKET", "REFORM", "HALL", "AREA", "ROOT", "BREEZE", "SHIFT", "CANE", "CASH", "HOUR", "GALAXY", "BREED", "STRAW", "OFFSET", "SPEECH", "APPEAR", "PORTER", "MOSQUE", "FLUSH", "SHEET", "WHIP", "FINGER", "SUITE", "GLARE", "BASE", "CATCH", "CHEQUE", "CRITIC", "CIRCLE", "BLOCK", "TALK", "SALAD", "BRONZE", "OCCUPY", "MORALE", "POLICY", "WEAK", "NARROW", "ESSAY", "KORAN", "DIRECT", "AWARE", "WORTH", "CHOOSE", "OUTER", "STAMP", "AGILE", "WEAVE", "CASE", "LIFT", "SHELL", "LIVER", "SAFARI", "LINEAR", "STAR", "MAKEUP", "SNACK", "SNOW", "COPE", "FAULT", "ALIVE", "IDEAL", "FOOT", "REDUCE", "SOLID", "INCH", "ARISE", "MASTER", "SIGH", "SHELF", "BRAKE", "ADMIRE", "LEADER", "TOOTH", "BITCH", "COACH", "DARE", "BEAM", "SELL", "CHANGE", "BROKEN", "EDGE", "ABSORB", "SIDE", "BASIN", "MESS", "CROWN", "EFFORT", "BURST", "SERIES", "UPSET", "BEARD", "LANE", "PALM", "WING", "TORCH", "HEAVEN", "YOUNG", "STAND", "POLISH", "PARDON", "MOUTH", "SPHERE", "CHARGE", "GRACE", "BACK", "WRITER", "BRIDGE", "EVEN", "RENT", "ENDURE", "STORY", "REMAIN", "GLOOM", "EXILE", "NEED", "REVISE", "PUNCH", "FUTURE", "DATE", "FOREST", "CRASH", "BALD", "COUP", "COMA", "SOAK", "JOINT", "BEGIN", "SCREEN", "APPLE", "WEIGHT", "YARD", "ORDER", "SERMON", "BIRD", "PITY", "EFFLUX", "MIRROR", "STROLL", "MENU", "TUBE", "GUEST", "TERMS", "REVEAL", "LONG", "SCRAP", "ROUGH", "LAKE", "SCORE", "SUMMER", "ORBIT", "SEEM", "WONDER", "BOLD", "THUMB", "ATTACK", "COFFIN", "SKETCH", "FORM", "TUMBLE", "HALF", "MEMBER", "BACON", "RUSH", "CASTLE", "POISON", "MAIL", "STEAM", "CORE", "SNAIL", "SELLER", "INVITE", "DISK", "READY", "REFER", "INDOOR", "KILL", "WEAPON", "HAUNT", "TRUE", "SLICE", "FAME", "EXTENT", "KNIFE", "PARTY", "MARGIN", "TRAY", "NUMBER", "MEDAL", "BOTTLE", "THROW", "CAFE", "DRIVER", "SOURCE", "COOK", "FRANK", "ABSENT", "UNIQUE", "BLAND", "JURY", "SOFA", "BUNDLE", "BRAG", "CLOCK", "DEBUT", "NUANCE", "AISLE", "STROKE", "WRAP", "REAL", "WOUND", "SLUMP", "FRIEND", "KICK", "POWDER", "CROUCH", "CHORD", "SHINE", "SMILE", "GARAGE", "NERVE", "MAYOR", "DEPART", "LOCK", "ORAL", "CLOSE", "CHOKE", "VIRTUE", "TIGER", "HONOR", "SOFT", "STABLE", "FINAL", "POUR", "SNAKE", "PRIZE", "DAMAGE", "DONOR", "LAND", "BOAT", "PATROL", "LIGHT", "PARK", "RING", "REVOKE", "FIELD", "METHOD", "WIDEN", "CHANCE", "REVIVE", "TILE", "WATCH", "PILLOW", "WAIST", "SPIT", "SPIRIT", "HOST", "DINNER", "DINE", "GOWN", "SLIP", "GIVE", "STILL", "ITEM", "HURL", "CANCER", "GUITAR", "SILK", "MOVING", "FENCE", "YEARN", "OPPOSE", "RANK", "GOAL", "LAWYER", "TURN", "REAR", "HOLE", "ASYLUM", "PLANT", "OUTPUT", "DETAIL", "SOAR", "ENTRY", "FULL", "SWIM", "FLEX", "DRAW", "HORN", "CURL", "HERD", "ROCK", "PLAN", "ZONE", "GROAN", "MONEY", "ADOPT", "EAUX", "SPACE", "DANGER", "TRACT", "RACISM", "MONTH", "STREAM", "SAMPLE", "KNOT", "OUTFIT", "DECIDE", "FAIR", "RUNNER", "PAIN", "BROWN", "SKATE", "DOME", "MINOR", "TEXT", "WANDER", "HEEL", "LEMON", "FIND", "BRAID", "GOLD", "DESIGN", "SEAL", "TITLE", "ABUSE", "BAKE", "KING", "MILE", "WINE", "VOICE", "STEEP", "TAKE", "CLUB", "JOCKEY", "SEIZE", "HOLD", "CENTER", "FILTER", "SHOWER", "BLUE", "BREAD", "ENEMY", "LEAN", "DRESS", "GRAVEL", "KNOW", "JACKET", "NAVY", "TONE", "EXACT", "ARCH", "STAKE", "LAST", "SLAP", "SPELL", "STITCH", "JEST", "TIPTOE", "GRAIN", "DECK", "FIRE", "TIRED", "FIGHT", "COMMON", "SOIL", "WILD", "SHIVER", "BILL", "BISHOP", "DAWN", "RICE", "BULB", "FREE", "DREAM", "EXCUSE", "CREDIT", "MISS", "MUSCLE", "OFFEND", "FINE", "CHEW", "COUSIN", "DULL", "ACID", "RIFLE", "CREW", "VENUS", "TRUCK", "REMIND", "TRACE", "EFFECT", "STUN", "DEBATE", "GLORY", "CROWD", "SLAM", "BARREL", "GRIEF", "STORE", "CHIN", "MERCY", "WALL", "PAWN", "DEBT", "LAYOUT", "VIDEO", "STEM", "COPY", "BELIEF", "SWEEP", "APPEAL", "ARMY", "HIKE", "ASSET", "BRAVE", "LIST", "THREAD", "DECADE", "NOBLE", "POLITE", "PILE", "FRAME", "FATE", "GRIP", "VIRUS", "PURE", "TIDY", "SODIUM", "HARBOR", "THIGH", "PUBLIC", "VIEW", "TAXI", "BAIT", "RIOT", "RIDGE", "TONGUE", "UTTER", "BUILD", "FUNNY", "SCENE", "TRIP", "MOVIE", "SCAN", "RITUAL", "PLANET", "SALE", "FARE", "OPTION", "JUST", "STUDY", "NOTE", "TYCOON", "PLEASE", "SURVEY", "ANKLE", "DOUBLE", "POEM", "ENJOY", "USEFUL", "DRUG", "THEFT", "HORSE", "PACK", "INSTAL", "FEAR", "QUOTA", "BOWEL", "COVER", "RAPE", "ARENA", "SPLIT", "ELITE", "ALLOW", "WAKE", "GRIND", "DOLL", "CRIME", "CRUEL", "REMARK", "DITCH", "INSURE", "CLUE", "FAVOR", "TOPPLE", "MOVE", "MEMORY", "SEED", "CHAOS", "X-RAY", "FOLLOW", "SWEAR", "GREET", "TACTIC", "COLUMN", "STYLE", "SMASH", "LEND", "TAIL", "COFFEE", "PRESS", "WIRE", "LEAD", "BENCH", "BELT", "PENNY", "OBESE", "TASTE", "POLL", "QUOTE", "EXPAND", "MASK", "GOLF", "IGNITE", "WORM", "DRAGON", "TASTY", "STICKY", "IVORY", "SPOIL", "STRIKE", "PEPPER", "PILOT", "IRON", "GENE", "REACH", "SIGHT", "BOTHER", "TWIN", "HEAT", "FILE", "JELLY", "ANGLE", "DESIRE", "AMBER", "NECK", "VAIN", "FLOAT", "BOOM", "STING", "WINTER", "FACADE", "EQUAL", "DOZEN", "VALLEY", "TELL", "WANT", "FAIRY", "CARRY", "BITE", "STRING", "SIZE", "JUMP", "RIDE", "REWARD", "SITE", "TEACH", "HELP", "IGNORE", "GAFFE", "DIET", "RATE", "ANIMAL", "CAMERA", "MARBLE", "JAIL", "NOVEL", "HORROR", "HERB", "BANNER", "REMEDY", "MOLD", "DESK", "ASPECT", "LUNG", "HERO", "COURSE", "FLEET", "ANGEL", "BRING", "BANANA", "SCRIPT", "ROOM", "ANSWER", "AWARD", "TREAD", "IMPACT", "FORMAL", "SOLVE", "PUMP", "SCREAM", "NATURE", "THEME", "TUMOUR", "SWEAT", "FERRY", "IDEA", "TRUST", "VISUAL", "FEAST", "MISERY", "LOOSE", "KIDNAP", "LOBBY", "RELATE", "PEACE", "ONION", "EXEMPT", "COUNT", "BRANCH", "TEST", "HARASS", "BOLT", "FLAG", "BRAND", "PANEL", "DROWN", "BLESS", "MARK", "LAYER", "VOLUME", "PLAYER", "DASH", "PRINCE", "LOCATE", "COTTON", "ZERO", "LUNCH", "MATURE", "BIND", "CARE", "LATE", "DEPUTY", "RIDER", "DROP", "BASIC", "TICKET", "WAIT", "DEEP", "STORM", "SHORT", "WEAR", "BANISH", "ROBOT", "MAKE", "EARWAX", "REVIEW", "SLEEVE", "THESIS", "BLACK", "BELL", "CLEAR", "FLOCK", "MIND", "COLONY", "MARKET", "LOSS", "HEROIN", "PATENT", "LOVE", "SNUB", "PRISON", "REFUND", "PETTY", "PART", "CARD", "ISSUE", "DRAIN", "DEADLY", "TEMPT", "FROWN", "GOAT", "TERM", "DRAG", "VOTE", "EAST", "TURKEY", "FLOW", "LAMB", "CYCLE", "BUFFET", "PROVE", "MOMENT", "SHOW", "WAGE", "COWER", "HAMMER", "HEAVY", "SPIN", "DRAWER", "PANIC", "SALT", "INSIDE", "PULL", "SHRINK", "SHORTS", "SENIOR", "SQUARE", "LILY", "MEET", "DAIRY", "HAND", "CANVAS", "HELL", "POOR", "EMBRYO", "MEAL", "YEAR", "BUDGET", "VIABLE", "NOTICE", "MARSH", "PUNISH", "SHAME", "RUNG", "WRIST", "NOSE", "ESCAPE", "ELECT", "SHAVE", "SMOKE", "FILL", "TRAIN", "LOST", "CHEAP", "SHOP", "MUTTER", "FIBRE", "FAINT", "VAGUE", "ARREST", "STOOL", "THAW", "COLON", "HIGH", "FAMILY", "INJURY", "WORK", "ENFIX", "BIBLE", "FRUIT", "PERSON", "CRISIS", "PICK", "STOCK", "BOND", "URGE", "FRESH", "PRIDE", "FAIL", "JEWEL", "BLOODY", "VIRGIN", "CHALK", "AXIS", "BALLET", "LASER", "EXTEND", "DESERT", "CHEAT", "MARINE", "SLAB", "PREACH", "FRONT", "LADDER", "TOAST", "SAFETY", "FEEL", "WOMAN", "MUGGY", "RISE", "SKIP", "ECHO", "STAGE", "CHEST", "FLIGHT", "TEASE", "KIDNEY", "FORBID", "BRICK", "ORIGIN", "PREY", "COLOR", "DRAFT", "TEAM", "CHEESE", "AGREE", "JUNIOR", "CARPET", "MAZE", "CITY", "SHOT", "SUFFER", "LACE", "CINEMA", "BASIS", "PASTEL", "LARGE", "ACQUIT", "AFFORD", "ORGAN", "HAIR", "POWER", "CHASE", "MERIT", "ELBOW", "ENERGY", "PLACE", "VELVET", "EXOTIC", "GROWTH", "PROUD", "THIN", "PAIR", "FISH", "LODGE", "THANK", "LABOUR", "SLIME", "GAIN", "BELLY", "GARLIC", "CLIMB", "LATEST", "TIME", "EAGLE", "WIFE", "PAUSE", "CHOP", "KETTLE", "GREEN", "ALBUM", "SWELL", "MATRIX", "RICH", "WOOD", "SINK", "SPRING", "WORRY", "TICK", "VOTER", "FIST", "PLEAD", "RELIEF", "SLANT", "BIKE", "BRUSH", "FEVER", "DOOR", "CABLE", "PROFIT", "GLASS", "PATH", "DEAD", "CORPSE", "CREED", "BANG", "SCRAPE", "MINUTE", "THICK", "JUNGLE", "MORAL", "BRIDE", "HANDY", "GIANT", "DEATH", "START", "SUNDAY", "SQUASH", "TUNE", "CLEAN", "GOSSIP", "CHAIN", "SACRED", "FATHER", "SALMON", "TENSE", "HALT", "GUTTER", "MIDDLE", "WATERMELON", "HANGMAN", "TELEVISION"];
let wordindex = Math.floor((Math.random() * words.length));
var word = words[wordindex];
var wordcons = word;
var wordvow = word;

wordcons = wordcons.replace(/[AEIOU]/g, '')

wordvow = wordvow.replace(/[B-DF-HJ-NP-TV-Z]/g, '_')

function startNew() {
    document.getElementById("reveal").innerHTML = wordvow;
}

var letters = findUnique(wordcons);
var lives = letters.length;

function findUnique(str) {
    // The variable that contains the unique values
    let uniq = "";

    for (let i = 0; i < str.length; i++) {
        // Checking if the uniq contains the character
        if (uniq.includes(str[i]) === false) {
            // If the character not present in uniq
            // Concatenate the character with uniq
            uniq += str[i];
        }
    }
    return uniq;
}

function textClear() {
    let text = document.getElementById("fname").value;
    document.getElementById("fname").value = "";
    checkText(text);
}

function checkText(s) {
    if (s == word) {
        finalPrompt(true);
    }

    else {
        finalPrompt(false);
        lives -= 1;
        let randindex = Math.floor((Math.random() * letters.length));
        l = letters[randindex];

        letters = letters.replace(l, '');
        
        reveal(l);
    }
    printHangman();
}

function reveal(l) {
    let str = document.getElementById("reveal").innerHTML;
    let temp = word;
    while (temp.indexOf(l) != -1) {
        str = replaceAt(str, word.indexOf(temp) + temp.indexOf(l), l);
        temp = temp.substr(temp.indexOf(l) + 1, temp.length + 2);
    }

    document.getElementById("reveal").innerHTML = str;
    
}

function replaceAt(str, index, replacement) {
    return str.substr(0, index) + replacement + str.substr(index + replacement.length);
}


function finalPrompt(bool) {

    if (bool) {
        document.getElementById("prompt").innerHTML = "RIGHT!";
        document.getElementById("prompt").style.color = "green";
        document.getElementById("para").style.display = "inline";
        document.getElementById("prompt").style.display = "inline";
        document.getElementById("check").disabled = "true";
    }
    else {
        document.getElementById("prompt").innerHTML = "WRONG!";
        document.getElementById("prompt").style.color = "red";
        document.getElementById("para").style.display = "inline";
        document.getElementById("prompt").style.display = "inline";
    }
}

function printHangman() {
    if (lives > 0) {

    }
    else {
        document.getElementById("check").disabled = "true";
        document.getElementById("para").innerHTML = "You have lost ";
        document.getElementById("prompt").innerHTML = "ALL LIVES!";
        document.getElementById("prompt").style.color = "red";
        document.getElementById("para").style.display = "inline";
        document.getElementById("prompt").style.display = "inline";
    }
}

/*
})();
*/