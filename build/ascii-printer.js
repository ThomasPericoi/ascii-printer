(function (global) {
var ASCII_PRINTER_VERSION = "1.2.0";

/*____________________________________ UTILITY FUNCTIONS ____________________________________*/

function getRandomIdFromArray(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomValueFromArray(array) {
  return array[getRandomIdFromArray(array)];
}

/*____________________________________ ASCII FUNCTIONS ____________________________________*/

function getAsciiById(asciiId) {
  return asciis[asciiId] || null;
}

function getAsciiByName(asciiName) {
  return asciis.find((ascii) => ascii.name === asciiName) || null;
}

function getAsciiStyle(ascii, options = {}) {
  const styles = [
    "font-family: monospace;",
    "white-space: pre;",
  ];

  if (options.color !== false) {
    styles.unshift(`color: ${options.color || ascii.color};`);
  }

  return styles.join(" ");
}

function getAsciiTags(ascii) {
  return ascii.tags || [];
}

function hasAsciiTag(ascii, tag) {
  return tag === "all" || getAsciiTags(ascii).includes(tag);
}

function listAsciiTags() {
  const tags = [...new Set(asciis.flatMap(getAsciiTags))];

  return tags.sort((firstTag, secondTag) => firstTag.localeCompare(secondTag));
}

function listAsciiNames(tag = "all") {
  const selectedAsciis =
    tag === "all"
      ? asciis
      : asciis.filter((ascii) => hasAsciiTag(ascii, tag));

  return selectedAsciis.map((ascii) => ascii.name);
}

function listAsciis(tag = "all") {
  return asciis
    .map((ascii, id) => ({
      id,
      name: ascii.name,
      tags: getAsciiTags(ascii),
    }))
    .filter((ascii) => tag === "all" || ascii.tags.includes(tag));
}

function printAsciiCredit(ascii, options = {}) {
  if (options.credits) {
    console.log(`ASCII by ${ascii.author || "Unknown"}`);
  }
}

function printAsciiById(asciiId, options = {}) {
  const ascii = getAsciiById(asciiId);

  if (!ascii) {
    console.warn(`ASCII not found for id: ${asciiId}`);
    return;
  }

  console.log(
    `%c${ascii.art}`,
    getAsciiStyle(ascii, options)
  );
  printAsciiCredit(ascii, options);
}

function printAsciiByName(asciiName, options = {}) {
  const ascii = getAsciiByName(asciiName);

  if (!ascii) {
    console.warn(`ASCII not found for name: ${asciiName}`);
    return;
  }

  console.log(
    `%c${ascii.art}`,
    getAsciiStyle(ascii, options)
  );
  printAsciiCredit(ascii, options);
}

function printAsciiSearch(query, options = {}) {
  const normalizedQuery = query.toLowerCase();
  const selectedAscii = asciis.find((ascii) =>
    ascii.name.toLowerCase().includes(normalizedQuery)
  );

  if (!selectedAscii) {
    console.warn(`ASCII not found for search: ${query}`);
    return;
  }

  printAsciiByName(selectedAscii.name, options);
}

function printRandomAscii(tag = "all", options = {}) {
  var selectedAsciis = asciis.filter((ascii) => hasAsciiTag(ascii, tag));
  selectedAsciis.length < 1 && (selectedAsciis = Object.values(asciis));
  const randomAscii = getRandomValueFromArray(selectedAsciis);
  printAsciiByName(randomAscii.name, options);
}

function printRandomAsciiFrom(asciiNames, options = {}) {
  if (!Array.isArray(asciiNames) || asciiNames.length < 1) {
    console.warn("ASCII names must be a non-empty array.");
    return;
  }

  const selectedAsciis = asciiNames
    .map((asciiName) => getAsciiByName(asciiName))
    .filter(Boolean);

  if (selectedAsciis.length < 1) {
    console.warn("No ASCII found for the provided names.");
    return;
  }

  const randomAscii = getRandomValueFromArray(selectedAsciis);
  printAsciiByName(randomAscii.name, options);
}

/*____________________________________ ASCII API ____________________________________*/

global.AsciiPrinter = {
  version: ASCII_PRINTER_VERSION,
  get catalog() {
    return asciis;
  },
  getById: getAsciiById,
  getByName: getAsciiByName,
  listTags: listAsciiTags,
  listNames: listAsciiNames,
  list: listAsciis,
  printById: printAsciiById,
  printByName: printAsciiByName,
  printBySearch: printAsciiSearch,
  printRandom: printRandomAscii,
  printRandomFrom: printRandomAsciiFrom,
};
})(globalThis);

/*____________________________________ ASCII LIBRARY ____________________________________*/

var asciis = [
  {
    name: "alarm",
    tags: ["item"],
    art: String.raw`
     .-.-.
((  (__I__)  ))
  .'_....._'.
 / / .12 . \ \
| | '  |  ' | |
| | 9  /  3 | |
 \ \ '.6.' / /
  '.'-...-'.'
   /'-- --'\
  '"""""""""'
`,
    color: "Chocolate",
    height: 10,
    author: "Joan G. Stark",
  },
  {
    name: "alien",
    tags: ["character", "space"],
    art: String.raw`
 o            o
  \          /
   \        /
    :-'""'-:
 .-'  ____  '-.
( (  (_()_)  ) )
 '-.   ^^   .-'
    '._==_.'
     __)(___
`,
    color: "Green",
    height: 9,
    author: "Joan G. Stark",
  },
  {
    name: "anchor",
    tags: ["item", "sea"],
    art: String.raw`
     _
    (_)
  <--|-->
 _   |   _
'\__/ \__/'
  '-. .-'
     '
`,
    color: "SlateGray",
    height: 10,
    author: "Joan G. Stark",
  },
  {
    name: "anteater",
    tags: ["animal"],
    art: String.raw`
       _.---._    /\\
    ./'       "--'\//
  ./              o \
 /./\  )______   \__ \
./  / /\ \   | \ \  \ \
   / /  \ \  | |\ \  \7
    "     "    "  "
`,
    color: "LightSlateGray",
    height: 7,
    author: "Veronica Karlsson",
  },
  {
    name: "armadillo",
    tags: ["animal"],
    art: String.raw`
             _.-----__
          ,:::://///,:::-.
         /:''/////// \\:::;/|/
        /'   ||||||     :://''\
      .' ,   ||||||     ./(  e \
-===~__-'\__X_'''''\_____/~'-.__'0
           ~~        ~~
`,
    color: "RosyBrown",
    height: 7,
    author: "Seal do Mar",
  },
  {
    name: "axe",
    tags: ["item", "medieval", "tool", "weapon"],
    art: String.raw`
  ,  /\  .
 //'-||-'\\
(| -=||=- |)
 \\,-||-.//
  '  ||  '
     ||
     ||
     ||
     ||
     ()
`,
    color: "SlateGray",
    height: 10,
    author: "Harry Mason",
  },
  {
    name: "bart",
    tags: ["cartoon", "character", "simpsons"],
    art: String.raw`
 |\/\/\/|
 |      |
 |      |
 | (o)(o)
 C      _)
  | ,___|
  |   /
 /____\
/      \
`,
    color: "Yellow",
    height: 9,
    author: "",
  },
  {
    name: "bat",
    tags: ["animal", "flying"],
    art: String.raw`
  /\                 /\
 / \'._   (\_/)   _.'/ \
/_.''._'--('.')--'_.''._\
| \_ / ';=/ " \=;' \ _/ |
 \/ '\__|'\___/'|__/'  \/
         \(/|\)/
          " ' "
`,
    color: "DimGray",
    height: 7,
    author: "Joan G. Stark",
  },
  {
    name: "bear",
    tags: ["animal"],
    art: String.raw`
 .--.              .--.
: (\ ". _......_ ." /) :
 '.    '        '    .'
  /'   _        _   '\
 /     0}      {0     \
|       /      \       |
|     /'        '\     |
 \   | .  .==.  . |   /
  '._ \.' \__/ './ _.'
  /  '''._-''-_.'''  \
`,
    color: "Brown",
    height: 10,
    author: "Joan G. Stark",
  },
  {
    name: "beaver",
    tags: ["animal"],
    art: String.raw`
            ___
         .="   "=._.---.
       ."         c ' Y' p
      /   ,       '.  w_/
      |   '-.   /     /
 ,..._|      )_-\ \_=.\
'-....-''------)))'=-'"''"
`,
    color: "DarkGoldenrod",
    height: 7,
    author: "Joan G. Stark",
  },
  {
    name: "bees",
    tags: ["animal", "insect"],
    art: String.raw`
  ^^      .-=-=-=-.  ^^      ^^
       ('-=-=-=-=-=-')  ^^
^^   ('-=-=-=-=-=-=-=-')
    ( '-=-=-=-(@)-=-=-' )      ^^
    ('-=-=-=-=-=-=-=-=-')  ^^
    ('-=-=-=-=-=-=-=-=-')  ^^
     ('-=-=-=-=-=-=-=-')
       ('-=-=-=-=-=-')  ^^
         '-=-=-=-=-'
`,
    color: "Goldenrod",
    height: 9,
    author: "Joan G. Stark",
  },
  {
    name: "bender",
    tags: ["cartoon", "character", "futurama", "space"],
    art: String.raw`
     ( )
      H
     _H_
  .-'-.-'-.
 /         \
|           |
|   .-------'._
|  / /  '.' '. \
|  \ \ @   @ / /
|   '---------'
|    _______|
|  .'-+-+-+|
|  '.-+-+-+|
|    """""" |
'-.__   __.-'
     """
`,
    color: "Silver",
    height: 16,
    author: "Silver Saks",
  },
  {
    name: "bigBird",
    tags: ["bird", "cartoon", "character", "sesameStreet"],
    art: String.raw`
   . -- .
  (      )
 ( (/oo\) )
  ( \""/ )
   ( \/ )
  (      )
 (        )
(          )
 (        )
   ' -- '
    =  =
    =  =
`,
    color: "Yellow",
    height: 16,
    author: "",
  },
  {
    name: "bike",
    tags: ["vehicle"],
    art: String.raw`
             __
  ,--.      <__)
  '- |________7
     |'.      |\
  .--|. \     |.\--.
 /   j \ '.7__j__\  \
|   o   | (o)____O)  |
 \     /   J  \     /
  '---'        '---'
`,
    color: "Yellow",
    height: 16,
    author: "Hayley Jane Wakenshaw",
  },
  {
    name: "boat",
    tags: ["sea", "vehicle"],
    art: String.raw`
       _    _
    __|_|__|_|__
  _|____________|__
 |o o o o o o o o /
~'~'~'~'~'~'~'~'~'~'~
`,
    color: "Aqua",
    height: 5,
    author: "Hayley Jane Wakenshaw",
  },
  {
    name: "bomb",
    tags: ["item", "weapon"],
    art: String.raw`
             .
            \'/
          -=>*<=-
         .-"/.\
        /    '
       |
    _.|_|._
  .'       '.
 /           \
|         #   |
|             |
 \           /
  '.       .'
    ''---''
`,
    color: "DimGray",
    height: 14,
    author: "Joan G. Stark",
  },
  {
    name: "book",
    tags: ["item"],
    art: String.raw`
,         ,
|\\\\ ////|
| \\\V/// |
|  |~~~|  |
|  |===|  |
|  |   |  |
|  |   |  |
 \ |   | /
  \|===|/
   '---'
`,
    color: "SaddleBrown",
    height: 10,
    author: "Joan G. Stark",
  },
  {
    name: "bravo",
    tags: ["message"],
    art: String.raw`
 ____  ____    __  _  _  _____
(  _ \(  _ \  /__\( \/ )(  _  )
 ) _ < )   / /(__)\\  /  )(_)(
(____/(_)\_)(__)(__)\/  (_____)
`,
    color: "MediumPurple",
    height: 4,
    author: "",
  },
  {
    name: "bug",
    tags: ["animal", "insect"],
    art: String.raw`
  .   .
   \ /
 '/ ! \'
 | o:o |
~| o:o |~
/ \_:_/ \
`,
    color: "OliveDrab",
    height: 6,
    author: "",
  },
  {
    name: "bye",
    tags: ["message"],
    art: String.raw`
 ____  _  _  ____
(  _ \( \/ )( ___)
 ) _ < \  /  )__)
(____/ (__) (____)
`,
    color: "MediumPurple",
    height: 4,
    author: "",
  },
  {
    name: "cactus",
    tags: ["nature", "plant"],
    art: String.raw`
       w
      /'\
      |'|
   _  |'|  _
  /.\ |'| /,\
  |'(_|.|_).|
  \.''.''.''/
   '--.'.--'
      |.|
      |'|
      |.|
 ''''''''''''''
`,
    color: "Green",
    height: 12,
    author: "Joan G. Stark",
  },
  {
    name: "cake",
    tags: ["food"],
    art: String.raw`
       , , , , , ,
       |_|_|_|_|_|
      |~=,=,=,=,=~|
      |~~~~~~~~~~~|
    |~=,=,=,=,=,=,=~|
    |~~~~~~~~~~~~~~~|
  |~=,=,=,=,=,=,=,=,=~|
  |~~~~~~~~~~~~~~~~~~~|
(^^^^^^^^^^^^^^^^^^^^^^^)
 ''-------------------''
`,
    color: "Pink",
    height: 10,
    author: "Laura Brown",
  },
  {
    name: "camera",
    tags: ["item", "retro"],
    art: String.raw`
      ____
 _[]_/____\__n_
|_____.--.__()_|
|LI  //# \\    |
|    \\__//    |
|     '--'     |
'--------------'
`,
    color: "Gray",
    height: 7,
    author: "Joan G. Stark",
  },
  {
    name: "candle",
    tags: ["christmas", "item"],
    art: String.raw`
    ..
 . .  . .
. . /\ . .
. . \/. .
    ||
 ___||__(~\
 \______/
`,
    color: "Gold",
    height: 7,
    author: "",
  },
  {
    name: "cat",
    tags: ["animal", "pet"],
    art: String.raw`
 )\   _,
 | "^" (
 (e  a )
=-\Y  -=
   T"^)   _
  /   (  ((
 /     )  ';,
(      ) )  \\
 \ Y  '  /  ))
  || ;  /   //
  )| ( (__,</
c{{i.}}=oo-^
`,
    color: "DarkSlateGrey",
    height: 12,
    author: "",
  },
  {
    name: "caterpillar",
    tags: ["animal", "insect"],
    art: String.raw`
\_/-.--.--.--.--.--.
(")__)__)__)__)__)__)
 ^ "" "" "" "" "" ""
`,
    color: "Green",
    height: 3,
    author: "Joan G. Stark",
  },
  {
    name: "cheese",
    tags: ["food"],
    art: String.raw`
     ___
   .'o O'-._
  / O o_.-'|
 /O_.-'  O |
| o   o .-'"
|o O_.-'
'--'
`,
    color: "Yellow",
    height: 6,
    author: "Randy Ransom",
  },
  {
    name: "cheshireCat",
    tags: ["cartoon", "character", "disney"],
    art: String.raw`
           .'\   /'.
         .'.-.'-'.-.'.
    ..._:   .-. .-.   :_...
  .'    '-.(o ) (o ).-'    '.
 :  _    _ _'~(_)~'_ _    _  :
:  /:   ' .-=_   _=-. '   ;\  :
:   :|-.._  '     '  _..-|:   :
 :   ':| |':-:-.-:-:'| |:'   :
  '.   ''.| | | | | | |.'   .'
    '.    '-:_| | |_:-'   .'
      '-._    ''''    _.-'
          ''-------''
`,
    color: "Violet",
    height: 6,
    author: "Randy Ransom",
  },
  {
    name: "chess",
    tags: ["game", "item"],
    art: String.raw`
   |\_
  /  .\_
 |   ___)
 |    \
 |  =  |
 /_____\
[_______]
`,
    color: "Black",
    height: 7,
    author: "",
  },
  {
    name: "coffee",
    tags: ["drink", "item"],
    art: String.raw`
      )  (
     (   ) )
      ) ( (
    _______)_
 .-'---------|
( C|/\/\/\/\/|
 '-./\/\/\/\/|
   '_________'
    '-------'
`,
    color: "Brown",
    height: 9,
    author: "H.P. Barmario",
  },
  {
    name: "cookieMonster",
    tags: ["cartoon", "character", "sesameStreet"],
    art: String.raw`
    (o)(o)
  w"      "w
 W  -====-  W
  "w      w"
 w"""""""""w
W            W
`,
    color: "Blue",
    height: 6,
    author: "Randy Ransom",
  },
  {
    name: "crab",
    tags: ["animal", "sea"],
    art: String.raw`
   __       __
  / <'     '> \
 (  / @   @ \  )
  \(_ _\_/_ _)/
(\ '-/     \-' /)
 "===\     /==="
  .==')___('==.
 ' .='     '=. '
`,
    color: "Red",
    height: 8,
    author: "",
  },
  {
    name: "crocodile",
    tags: ["animal"],
    art: String.raw`
            .-._   _ _ _ _ _ _ _ _
 .-''-.__.-'00  '-' ' ' ' ' ' ' ' '-.
'.___ '    .   .--_'-' '-' '-' _'-' '._
 V: V 'vv-'   '_   '.       .'  _..' '.'.
   '=.____.=_.--'   :_.__.__:_   '.   : :
           (((____.-'        '-.  /   : :
                             (((-'\ .' /
                           _____..'  .'
                          '-._____.-'
`,
    color: "OliveDrab",
    height: 9,
    author: "Shanaka Dias",
  },
  {
    name: "crown",
    tags: ["item", "medieval", "symbol"],
    art: String.raw`
       o
    o^/|\^o
 o_^|\/*\/|^_o
o\*''.\|/.''*/o
 \\\\\\|//////
  {><><@><><}
  '"""""""""'
`,
    color: "Gold",
    height: 10,
    author: "Joan G. Stark",
  },
  {
    name: "dart",
    tags: ["game", "item", "sport"],
    art: String.raw`
____
\___\_.:::::::.___
/___/ ':::::::'
`,
    color: "Silver",
    height: 3,
    author: "Joan G. Stark",
  },
  {
    name: "deer",
    tags: ["animal"],
    art: String.raw`
    (      )
    ))    ((
   //      \\
  | \\____// |
 \~/ ~    ~\/~~/
  (|    _/o  ~~
   /  /     ,|
  (~~~)__.-\ |
   ''~~    | |
    |      | |
    |        |
   /          \
  '\          /'
    '\_    _/'
       ~~~~
`,
    color: "Tan",
    height: 15,
    author: "",
  },
  {
    name: "dev",
    tags: ["message"],
    art: String.raw`
 ____  ____  _  _
(  _ \( ___)( \/ )
 )(_) ))__)  \  /
(____/(____)  \/
`,
    color: "MediumPurple",
    height: 4,
    author: "",
  },
  {
    name: "devil",
    tags: ["character", "halloween"],
    art: String.raw`
  ,  ,  , , ,
 <(__)> | | |
 | \/ | \_|_/
 \^  ^/   |
 /\--/\  /|
/  \/  \/ |
`,
    color: "Red",
    height: 6,
    author: "Joan G. Stark",
  },
  {
    name: "die",
    tags: ["game", "item"],
    art: String.raw`
    _______
  /\       \
 /()\   ()  \
/    \_______\
\    /()     /
 \()/   ()  /
  \/_____()/
`,
    color: "White",
    height: 7,
    author: "",
  },
  {
    name: "dog",
    tags: ["animal", "pet"],
    art: String.raw`
            /)-_-(\
             (o o)
     .-----__/\o/
    /  __      /
\__/\ /  \_\ |/
     \\     ||
     //     ||
     |\     |\
`,
    color: "Tan",
    height: 8,
    author: "",
  },
  {
    name: "dragon",
    tags: ["halloween"],
    art: String.raw`
                \||/
                |  @___oo
      /\  /\   / (__,,,,|
     ) /^\) ^\/ _)
     )   /^\/   _)
     )   _ /  / _)
 /\  )/\/ ||  | )_)
<  >      |(,,) )__)
 ||      /    \)___)\
 | \____(      )___) )___
  \______(_______;;; __;;;
`,
    color: "Red",
    height: 11,
    author: "",
  },
  {
    name: "duck",
    tags: ["animal", "bird", "pet"],
    art: String.raw`
      ,~~.
     (  9 )-_,
(\___ )=='-'
 \ .   ) )
  \ '-' /
   '~j-'
     "=:
`,
    color: "DarkGray",
    height: 7,
    author: "",
  },
  {
    name: "einstein",
    tags: ["character", "history"],
    art: String.raw`
      -''--.
      _'>   '\.-'/
  _.'     _     '._
.'   _.='   '=._   '.
>_   / /_\ /_\ \   _<
  / (  \o/\\o/  ) \
  >._\ .-,_)-. /_.<
      /__/ \__\
        '---'
`,
    color: "Silver",
    height: 9,
    author: "Joan G. Stark",
  },
  {
    name: "electricGuitar",
    tags: ["item", "music"],
    art: String.raw`
     _
    / 7
   /_(
   |_|
   |_|
   |_|
   |_| /\
 /\|=|/ /
 \ |_| /
  ) _  \
 / |_|  \
/  -=-o /
\  /~\_/
 \/
`,
    color: "Red",
    height: 14,
    author: "Rowan Crawford",
  },
  {
    name: "elephant",
    tags: ["animal"],
    art: String.raw`
   ___      ___
  /   \____/   \
 /    / __ \    \
/    |  ..  |    \
\___/|      |\___/\
   | |_|  |_|      \
   | |/|__|\|       )\
   |   |__|         | \
   | @ |  | @ || @ |/  m
   |   |~~|   ||   |
   'ooo'  'ooo''ooo'
`,
    color: "Silver",
    height: 11,
    author: "Hamilton Furtado",
  },
  {
    name: "error",
    tags: ["message"],
    art: String.raw`
 ____  ____  ____  _____  ____
( ___)(  _ \(  _ \(  _  )(  _ \
 )__)  )   / )   / )(_)(  )   /
(____)(_)\_)(_)\_)(_____)(_)\_)
`,
    color: "Red",
    height: 4,
    author: "",
  },
  {
    name: "flamingo",
    tags: ["animal", "bird"],
    art: String.raw`
         __
        /('o
  ,-,  //  \\
 (,,,) ||   V
(,,,,)\//
(,,,/w)-'
\,,/w)
 V/uu
/ |
| |
o o
\ |
 \|
`,
    color: "Pink",
    height: 13,
    author: "",
  },
  {
    name: "flintstones",
    tags: ["cartoon", "character"],
    art: String.raw`
  \/________________
 /     _____________)
/     /     /   \ |
\/\/\/     (O) (O)|
  |           ------,
  |  _       ______/
  | (_      /   \  \
  |        /  ___\_ \
  |        \      / /
__|_________\______/
\______________\./__\
`,
    color: "DarkOrange",
    height: 11,
    author: "",
  },
  {
    name: "floppyDisk",
    tags: ["item", "retro"],
    art: String.raw`
 _________________
| | ___________ |o|
| | ___________ | |
| | ___________ | |
| | ___________ | |
| |_____________| |
|     _______     |
|    |       |   ||
|    |       |   V|
|____|_______|____|
`,
    color: "DarkSlateGray",
    height: 10,
    author: "Robert Craggs",
  },
  {
    name: "flower",
    tags: ["nature", "plant"],
    art: String.raw`
  _  _
 (_\/_)
(_>()<_)
 (_/\_)
   ||
 |\||/|
__\||/__
`,
    color: "Pink",
    height: 7,
    author: "Joan G. Stark",
  },
  {
    name: "folder",
    tags: ["item", "retro"],
    art: String.raw`
 _____
/     \_____
|            |
|   _________|__
|  /           /
| /           /
|/___________/
`,
    color: "Orange",
    height: 7,
    author: "Joan G. Stark",
  },
  {
    name: "fox",
    tags: ["animal"],
    art: String.raw`
 /\   /\
//\\_//\\     __/\
\_     _/    /   /
 / . . \    /^^^]
 \_\ /_/    [   ]
  / ° \_    [   /
  \     \_  /  /
   [ [ /  \/ _/
  _[ [ \  /_/
`,
    color: "DarkOrange",
    height: 9,
    author: "",
  },
  {
    name: "frog",
    tags: ["animal"],
    art: String.raw`
       _   _
      (o)-(o)
   .-(   "   )-.
  /  /;'-=-';\  \
__\ _\ \___/ /_ /__
  /|  /|\ /|\  |\
`,
    color: "SpringGreen",
    height: 6,
    author: "",
  },
  {
    name: "frontDoor",
    tags: ["city"],
    art: String.raw`
   ________
  / ______ \
  || _  _ ||
  ||| || |||
  |||_||_|||
  || _  _o||
  ||| || |||
  |||_||_|||
  ||______||
 /__________\
 |__________|
/____________\
`,
    color: "Brown",
    height: 12,
    author: "Hayley Jane Wakenshaw",
  },
  {
    name: "garfield",
    tags: ["cartoon", "character", "pet"],
    art: String.raw`
     .-.,     ,.-.
    /:::\\   //:::\
   |':':' '"' ':':'|
  /'. .-=-. .-=-. .'\
 /=- /     |     \ -=\
;   |      |      |   ;
|=-.|______|______|.-=|
|==  \  0 /_\ 0  /  ==|
|=   /'---( )---'\   =|
 \   \:   .'.   :/   /
  '\= '--'   '--' =/'
    '-=._     _.=-'
         '"""'
`,
    color: "Orange",
    height: 12,
    author: "Joan G. Stark",
  },
  {
    name: "gift",
    tags: ["christmas", "item"],
    art: String.raw`
    _  _
 __(_\/_)__
|____||____|
|    ||    |
|____||____|
`,
    color: "Red",
    height: 5,
    author: "Laura Brown",
  },
  {
    name: "goldfish",
    tags: ["animal", "sea"],
    art: String.raw`
      /'·..
     /,....':·
 ..·'  .   '·.,.·°)
: © ):';      .  {
 °·.,,'·  ,.·´\'·¸)
      \\''\,.·´
`,
    color: "Gold",
    height: 6,
    author: "",
  },
  {
    name: "gun",
    tags: ["item", "weapon"],
    art: String.raw`
    _  ___________=__
    \\@([____]______()
   _/\|-[____]
 /     /(( )
/____|'----'
\____/
`,
    color: "Silver",
    height: 6,
    author: "",
  },
  {
    name: "heart",
    tags: ["symbol"],
    art: String.raw`
,d88b.d88b,
88888888888
'Y8888888Y'
  'Y888Y'
    'Y'
`,
    color: "Red",
    height: 5,
    author: "Bungle",
  },
  {
    name: "hedgehog",
    tags: ["animal"],
    art: String.raw`
  .|||||||||.
 |||||||||||||
|||||||||||' .\
'||||||||||_,__o
    ''  ''
`,
    color: "Tan",
    height: 5,
    author: "",
  },
  {
    name: "hello",
    tags: ["message"],
    art: String.raw`
 _   _  ____  __    __    _____
( )_( )( ___)(  )  (  )  (  _  )
 ) _ (  )__)  )(__  )(__  )(_)(
(_) (_)(____)(____)(____)(_____)
`,
    color: "DeepSkyBlue",
    height: 4,
    author: "",
  },
  {
    name: "helloWorld",
    tags: ["message"],
    art: String.raw`
 _   _  ____  __    __    _____    _    _  _____  ____  __    ____
( )_( )( ___)(  )  (  )  (  _  )  ( \/\/ )(  _  )(  _ \(  )  (  _ \
 ) _ (  )__)  )(__  )(__  )(_)(    )    (  )(_)(  )   / )(__  )(_) )
(_) (_)(____)(____)(____)(_____)  (__/\__)(_____)(_)\_)(____)(____/
`,
    color: "DeepSkyBlue",
    height: 4,
    author: "",
  },
  {
    name: "hippo",
    tags: ["animal"],
    art: String.raw`
     c~~p ,---------.
,---'oo  )           \
( O O                  )/
'=^='                 /
      \    ,     .   /
      \\  |-----'|  /
      ||__|    |_|__|
`,
    color: "DarkGray",
    height: 7,
    author: "",
  },
  {
    name: "homer",
    tags: ["cartoon", "character", "simpsons"],
    art: String.raw`
    ___
   //_\\_
 ."\\    ".
/          \
|           \_
|       ,--.-.)
 \     /  o \o\
 /\/\  \    /_/
  (_.   '--'__)
   |     .-'  \
   |  .-'.     )
   | (  _/--.-'
   |  '.___.'
         (
`,
    color: "Gold",
    height: 14,
    author: "",
  },
  {
    name: "hotAirBalloon",
    tags: ["flying", "vehicle"],
    art: String.raw`
    _..==--.._
  .'_|:::|' _|:.
 /_|:::|  _|:::|\
;|:::|  _|:::|  _;
|::|  _|:::|  _|:|
||  _|:::|  _|:::|
 \_|:::|  _|:::|/
  '::|  _|:::|.'
    \ _|:::| /
     \|::|__/
      ;____;
       \YT/
        ||
       |""|
       '=='
`,
    color: "Red",
    height: 15,
    author: "Joan G. Stark",
  },
  {
    name: "house",
    tags: ["city"],
    art: String.raw`
      ''::::.
        _____A_
       /      /\
    __/__/\__/  \___
---/__|" '' "| /___/\----
   |''|"'||'"| |' '||
   '""'""))""'"'""""'
`,
    color: "Brown",
    height: 7,
    author: "",
  },
  {
    name: "impossibleTriangle",
    tags: ["symbol"],
    art: String.raw`
                    .   .xXXXX+.   .
               .   ..   xXXXX+.-   ..   .
         .   ..  ... ..xXXXX+. --.. ...  ..   .
     .   ..  ... .....xXXXX+.  -.-..... ...  ..   .
   .   ..  ... ......xXXXX+.  . .--...... ...  ..   .
  .   ..  ... ......xXXXX+.    -.- -...... ...  ..   .
 .   ..  ... ......xXXXX+.   .-+-.-.-...... ...  ..   .
 .   ..  ... .....xXXXX+. . --xx+.-.--..... ...  ..   .
.   ..  ... .....xXXXX+. - .-xxxx+- .-- .... ...  ..   .
 .   ..  ... ...xXXXX+.  -.-xxxxxx+ .---... ...  ..   .
 .   ..  ... ..xXXXX+. .---..xxxxxx+-..--.. ...  ..   .
  .   ..  ... xXXXX+. . --....xxxxxx+  -.- ...  ..   .
   .   ..  ..xXXXX+. . .-......xxxxxx+-. --..  ..   .
     .   .. xXXXXXXXXXXXXXXXXXXXxxxxxx+. .-- ..   .
         . xXXXXXXXXXXXXXXXXXXXXXxxxxxx+.  -- .
           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx+.--
`,
    color: "Gold",
    height: 16,
    author: "Ojosh!ro",
  },
  {
    name: "impossibleTrident",
    tags: ["symbol"],
    art: String.raw`
   _______
 /|       |
| |       |
| |  __   |
| | |_ /| |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
|_| |_| |_|
(_) (_) (_)
`,
    color: "Gold",
    height: 15,
    author: "P.J. LaBrocca",
  },
  {
    name: "info",
    tags: ["message"],
    art: String.raw`
 ____  _  _  ____  _____
(_  _)( \( )( ___)(  _  )
 _)(_  )  (  )__)  )(_)(
(____)(_)\_)(__)  (_____)
`,
    color: "DeepSkyBlue",
    height: 4,
    author: "",
  },
  {
    name: "kermit",
    tags: ["cartoon", "character", "sesameStreet"],
    art: String.raw`
       .---.     .---.
      ( -o- )---( -o- )
      ;-...-'   '-...-;
     /                 \
    /                   \
   | /_               _\ |
   \ '.''"--.....--"''.' /
    \  '.   '._.'   .'  /
 _.-''.  '-.,___,.-'  .''-._
'--._  ''-._______.-''  _.--'
     /                 \
    /.-''\   .'.   /''-.\
          '.'   '.'
`,
    color: "SpringGreen",
    height: 13,
    author: "Joan G. Stark",
  },
  {
    name: "key",
    tags: ["item"],
    art: String.raw`
  .---.
 /    |\________________
|  () | ________   _   _)
 \    |/        | | | |
   ---'         "-" |_|
`,
    color: "Gold",
    height: 5,
    author: "Hayley Jane Wakenshaw",
  },
  {
    name: "knight",
    tags: ["character", "medieval"],
    art: String.raw`
    !
   .-.
 __|=|__
(_/'-'\_)
//\___/\\
<>/   \<>
 \|_._|/
  <_I_>
   |||
  /_|_\
`,
    color: "Silver",
    height: 10,
    author: "Joan G. Stark",
  },
  {
    name: "lightBulb",
    tags: ["item"],
    art: String.raw`
 .-""-.
/  __  \
|  \/  |
 \ || /
  ||||
  {==}
  {==}
`,
    color: "Goldenrod",
    height: 7,
    author: "Joan G. Stark",
  },
  {
    name: "lion",
    tags: ["animal"],
    art: String.raw`
            o00000000o
           o0/\0000/\0o
          o00\c "" J/00o
o.       0000/ b  d \000
'00.     0000    _  |000
 '00     '0000(=_Y_=)00'
 //       ;0000'\7/000'
((       /  '0000000'
 \\    .'          |
  \\  /       \  | |
   \\/         ) | |
    \         /_ | |__
    (___________)))))))
`,
    color: "Peru",
    height: 13,
    author: "Joan G. Stark",
  },
  {
    name: "loading",
    tags: ["message"],
    art: String.raw`
 __    _____    __    ____  ____  _  _  ___
(  )  (  _  )  /__\  (  _ \(_  _)( \( )/ __)
 )(__  )(_)(  /(__)\  )(_) )_)(_  )  (( (_-.
(____)(_____)(__)(__)(____/(____)(_)\_)\___/
`,
    color: "DeepSkyBlue",
    height: 4,
    author: "",
  },
  {
    name: "mailbox",
    tags: ["item"],
    art: String.raw`
        __
       [_ |
    _____||_____
 .''     ||   .:;\
/        ||  // '|
|        \/  ||  |
|            ||  |
|            ||_.'\
'-----...----'\    \
      | |      \    |
      | |       '.__/
      | |
`,
    color: "Red",
    height: 12,
    author: "Joan G. Stark",
  },
  {
    name: "marbles",
    tags: ["animal", "pet"],
    art: String.raw`
         __
        /  \
       / ..|\
      (_\  |_)
      /  \@'
     /     \
_   /  '   |
\\/  \  | _\
 \   /_ || \\_
  \____)|_) \_)
`,
    color: "Brown",
    height: 10,
    author: "",
  },
  {
    name: "marmot",
    tags: ["animal"],
    art: String.raw`
       (>\---/<)
       ,'     '.
      /  q   p  \
     (  >(_Y_)<  )
      >-' '-' '-<-.
     /  _.== ,=.,- \
    /,    )'  '(    )
   / '._.'      '--<
c /    \         |  |
  \      )       ;_/
   '._ _/_  ___.'-\\\
      '--\\\
`,
    color: "DarkGoldenrod",
    height: 12,
    author: "Hayley Jane Wakenshaw",
  },
  {
    name: "maryPoppins",
    tags: ["cartoon", "character", "cinema", "disney"],
    art: String.raw`
         _
      .-' '-.
     /       \
    |,-,-,-,-,|
   ___   |
  _)_(_  |
  (/ \)  |
  _\_/_  /)
 / \_/ \//
 |(   )\/
 ||)_(
 |/   \
 n|   |
/ \   |
|_|___|
   \|/
  _/L\_
`,
    color: "Black",
    height: 17,
    author: "",
  },
  {
    name: "monaLisa",
    tags: ["art", "character"],
    art: String.raw`
          ____
        o8%8888,
      o88%8888888.
     8'-    -:8888b
    8'         8888
   d8.-=. ,==-.:888b
   >8 '~' :'~' d8888
   88         ,88888
   88b. '-~  ':88888
   888b ~==~ .:88888
   88888o--:':::8888
   '88888| :::' 8888b
   8888^^'       8888b
  d888           ,%888b.
 d88%            %%%8--'-.
/88:.__ ,       _%-' ---  -
    '''::===..-'   =  --.
`,
    color: "Sienna",
    height: 17,
    author: "",
  },
  {
    name: "monkey",
    tags: ["animal"],
    art: String.raw`
      .="=.
    _/.-.-.\_     _
   ( ( o o ) )    ))
    |/  "  \|    //
     \'---'/    //
     /'"""'\\  ((
    / /_,_\ \\  \\
    \_\\_'__/ \  ))
     /'  /'~\  |//
    /   /    \  /
,--',--'\/\    /
 '-- "--'  '--'
`,
    color: "Brown",
    height: 12,
    author: "Joan G. Stark",
  },
  {
    name: "mountain",
    tags: ["christmas", "nature"],
    art: String.raw`
          /\
         /**\
        /****\   /\
       /      \ /**\
      /  /\    /    \
     /  /  \  /      \
    /  /    \/ /\     \
   /  /      \/  \/\   \
__/__/_______/___/__\___\__
`,
    color: "SlateGray",
    height: 9,
    author: "",
  },
  {
    name: "mouse",
    tags: ["animal", "pet"],
    art: String.raw`
(q\_/p)
 /. .\.-""""-.      __
=\_t_/=    /  '\   (
  )\ ))__ _\    |___)
 nn-nn'  'nn---'
`,
    color: "Gray",
    height: 5,
    author: "",
  },
  {
    name: "mushroom",
    tags: ["nature", "plant"],
    art: String.raw`
  .-"""-.
 /* * * *\
:_.-:':-._;
    (_)
 \|/(_)\|/
`,
    color: "Red",
    height: 5,
    author: "Donovan Baker",
  },
  {
    name: "parrot",
    tags: ["animal", "bird", "flying", "pet"],
    art: String.raw`
                          .
                          | \/|
  (\   _                  ) )|/|
      (/            _----. /.'.'
.-._________..      .' @ _\  .'
'.._______.   '.   /    (_| .')
  '._____.  /   '-/      | _.'
   '.______ (         ) ) \
     '..____ '._       )  )
        .' __.--\  , ,  // ((
        '.'     |  \/   (_.'(
                |   \ .'
                 \   (
                  \   '.
                   \ \ '.)
                    '-'-'
`,
    color: "DodgerBlue",
    height: 16,
    author: "",
  },
  {
    name: "pig",
    tags: ["animal"],
    art: String.raw`
       9
  ,--.-'-,--.
  \  /-~-\  /
 / )' a a '( \
( (  ,---.  ) )
 \ '(_o_o_)' /
  \   '-'   /
   | |---| |
   [_]   [_]
`,
    color: "Pink",
    height: 9,
    author: "",
  },
  {
    name: "pinguin",
    tags: ["animal", "bird"],
    art: String.raw`
   __
-=(o '.
   '.-.\
   /|  \\
   '|  ||
    _\_):,_
`,
    color: "Black",
    height: 6,
    author: "",
  },
  {
    name: "pinkPanther",
    tags: ["cartoon", "character"],
    art: String.raw`
 .--.             .--.
( ('\\.---------.//') )
 '-.    __   __    .-'
  /    /__\ /__\    \
 |     \ 0/ \ 0/     |
  \     _/   \_     /
   '-.  /-"""-\  .-'
     /  '.___.'  \
     \     I     /
      ';--'''--;'
        '.___.'
          | |
`,
    color: "Pink",
    height: 12,
    author: "",
  },
  {
    name: "plane",
    tags: ["flying", "vehicle"],
    art: String.raw`
            __/\__
           '==/\=='
 ____________/__\____________
/____________________________\
  __||__||__/.--.\__||__||__
 /__|___|___( >< )___|___|__\
           _/.--.\_
          (/------\)
`,
    color: "Red",
    height: 8,
    author: "Joan G. Stark",
  },
  {
    name: "production",
    tags: ["message"],
    art: String.raw`
 ____  ____  _____  ____
(  _ \(  _ \(  _  )(  _ \
 )___/ )   / )(_)(  )(_) )
(__)  (_)\_)(_____)(____/
`,
    color: "LimeGreen",
    height: 4,
    author: "",
  },
  {
    name: "r2d2",
    tags: ["character", "cinema", "space", "starWars"],
    art: String.raw`
    .---.
  .'_:___".
  |__ --==|
  [  ]  :[|
  |__| I=[|
  / / ____|
 |-/.____.'
/___\ /___\
`,
    color: "Blue",
    height: 8,
    author: "snd",
  },
  {
    name: "rain",
    tags: ["nature", "weather"],
    art: String.raw`
      __   _
    _(  )_( )_
   (_   _    _)
  / /(_) (__)
 / / / / / /
/ / / / / /
`,
    color: "DodgerBlue",
    height: 6,
    author: "",
  },
  {
    name: "rainbow",
    tags: ["nature", "weather"],
    art: String.raw`
     _.-""""'-._
   ,' _-""""'-_ '.
  / ,'.-'"""'-.'. \
 | / / ,'"""'. \ \ |
| | | | ,'"'. | | | |
| | | | |   | | | | |
`,
    color: "MediumPurple",
    height: 6,
    author: "Brian T. Odom",
  },
  {
    name: "robot",
    tags: ["character", "space"],
    art: String.raw`
       .-T-.
      /     \
    }=) o o (={
      \_===_/
(_)  _.-"""-._
 |\/'/+' _ '+\'\
  \__\ +[_]+ /=|
      )====={\=\
      |  .  | ( )
      |_/ \_|
     <__| |__>
      |=| |=|
      |_| |_|
     (___Y___)
`,
    color: "Blue",
    height: 14,
    author: "Joan G. Stark",
  },
  {
    name: "rocket",
    tags: ["space", "vehicle"],
    art: String.raw`
   A
  / \
  |=|
  | |
  | |
 _|=|_
/ | | \
| \,/ |
|/" "\|
`,
    color: "OrangeRed",
    height: 9,
    author: "Joan G. Stark",
  },
  {
    name: "rowlf",
    tags: ["cartoon", "character", "sesameStreet"],
    art: String.raw`
    ..----..
  .': o  o :'.
 .':   ()   :'.
.' :-======-: '.
'-' '.    .' '-'
   .'      '.
`,
    color: "Brown",
    height: 6,
    author: "",
  },
  {
    name: "santaClaus",
    tags: ["character", "christmas"],
    art: String.raw`
   ,--.
  ()   \
   /    \
 _/______\_
(__________)
(/  @  @  \)
('._,()._,')
(  '-''-'  )
 \        /
  \,,,,,,/
`,
    color: "Red",
    height: 10,
    author: "B.D.S. \"Don\" McConnell",
  },
  {
    name: "sherlockHolmes",
    tags: ["character"],
    art: String.raw`
   ,_
 ,'  '\,_
 |_,-'_)
 /##c '\  (
' |'  -{.  )
  /\__-' \[]
 /'-_'\
 '     \
`,
    color: "MediumSeaGreen",
    height: 8,
    author: "Harry Mason",
  },
  {
    name: "shield",
    tags: ["item", "medieval", "weapon"],
    art: String.raw`
|'-._/\_.-'|
|    ||    |
|___o()o___|
|__((<>))__|
\   o\/o   /
 \   ||   /
  \  ||  /
   '.||.'
`,
    color: "Gold",
    height: 8,
    author: "Joan G. Stark",
  },
  {
    name: "skeleton",
    tags: ["character", "halloween"],
    art: String.raw`
    .-.
   (o.o)
    |=|
   __|__
 //.=|=.\\
// .=|=. \\
\\ .=|=. //
 \\(_=_)//
  (:| |:)
   || ||
   () ()
   || ||
   || ||
  ==' '==
`,
    color: "White",
    height: 14,
    author: "Ultramarine Rain, Lunatic 42",
  },
  {
    name: "snail",
    tags: ["animal"],
    art: String.raw`
    .----.   @   @
   / .-"-.'.  \v/
   | | '\ \ \_/ )
 ,-\ '-.' /.'  /
'---'----'----'
`,
    color: "SeaGreen",
    height: 5,
    author: "Hayley Jane Wakenshaw",
  },
  {
    name: "snoopy",
    tags: ["cartoon", "character", "pet"],
    art: String.raw`
          ,-~~-.___.
         / ()=(()   \
        (  |         0
          \_,\, ,----'
    ##XXXxxxxxxx
            /  ---'~;
          /    /~|-
        =(   ~~  |
   /~~~~~~~~~~~~~~~~~~~~~\
  /_______________________\
 /_________________________\
/___________________________\
   |____________________|
   |____________________|
   |____________________|
`,
    color: "Black",
    height: 15,
    author: "Win Kang",
  },
  {
    name: "snowman",
    tags: ["character", "christmas"],
    art: String.raw`
     __
   _|==|_
    ('')___/
>--('^^')
  ('^'^'')
  '======'
`,
    color: "White",
    height: 6,
    author: "Laura Brown",
  },
  {
    name: "sonic",
    tags: ["character", "videoGame"],
    art: String.raw`
          .,
.      _,'f----.._
|\ ,-'"/  |     ,'
|,_  ,--.      /
/,-. ,''.     (_
f  o|  o|__     "'-.
,-._.,--'_ '.   _.,-'
'"' ___.,'' j,-'
  '-.__.,--'
`,
    color: "Blue",
    height: 9,
    author: "",
  },
  {
    name: "spaceInvader",
    tags: ["character", "space", "videoGame"],
    art: String.raw`
         __
       _|  |_
     _|      |_
    |  _    _  |
    | |_|  |_| |
 _  |  _    _  |  _
|_|_|_| |__| |_|_|_|
  |_|_        _|_|
    |_|      |_|
`,
    color: "Chartreuse",
    height: 8,
    author: "",
  },
  {
    name: "squidward",
    tags: ["cartoon", "character", "spongeBob"],
    art: String.raw`
     .--'''''''''--.
   '      .---.      '.
 /    .-----------.    \
/        .-----.        \
|       .-.   .-.       |
|      /___\ /___\      |
 \    | .-. | .-. |    /
  '-._| | | | | | |_.-'
      | '-' | '-' |
       \___/ \___/
    _.-'  /   \  '-._
  .' _.--|     |--._ '.
  ' _...-|     |-..._ '
         |     |
         '.___.'
`,
    color: "Gray",
    height: 15,
    author: "LGB",
  },
  {
    name: "stage",
    tags: ["message"],
    art: String.raw`
 ___  ____   __    ___  ____
/ __)(_  _) /__\  / __)( ___)
\__ \  )(  /(__)\( (_-. )__)
(___/ (__)(__)(__)\___/(____)
`,
    color: "DarkOrange",
    height: 4,
    author: "",
  },
  {
    name: "stopSign",
    tags: ["item"],
    art: String.raw`
    .-------,
  .'         '.
.'  _ ___ _ __ '.
|  (_' | / \|_) |
|  ,_) | \_/|   |
'.             .'
  '.         .'
    '-------'
`,
    color: "Red",
    height: 8,
    author: "Joan G. Stark",
  },
  {
    name: "sword",
    tags: ["item", "medieval", "weapon"],
    art: String.raw`
( \
 \ \/)
  >.<
 (/\\\
    \\\
     \\\
      \_|
`,
    color: "Gold",
    height: 7,
    author: "Veronica Karlsson",
  },
  {
    name: "teapot",
    tags: ["drink", "item"],
    art: String.raw`
                       (
            _           ) )
         _,(_)._        ((
    ___,(_______).        )
  ,'__.   /       \    /\_
 /,' /  |""|       \  /  /
| | |   |__|       |,'  /
 \'.|                  /
  '. :           :    /
    ''.            :.,'
      '-.________,-'

`,
    color: "Sienna",
    height: 11,
    author: "Stephane Abello",
  },
  {
    name: "teckel",
    tags: ["animal", "pet"],
    art: String.raw`
                        __
 ,                    ," e'--o
((                   (  | __,'
\\~----------------' \_;/
(                      /
 /) ._______________. )
(( (              (( (
'' '               ''-'
`,
    color: "Chocolate",
    height: 8,
    author: "Hayley Jane Wakenshaw",
  },
  {
    name: "telescope",
    tags: ["item", "space"],
    art: String.raw`
    _______________
==c(___(o(______(_()
        \=\
         )=\
        //|\\
       //|| \\
      // ||  \\
     //  ||   \\
    //         \\
`,
    color: "SlateGray",
    height: 14,
    author: "David Riley",
  },
  {
    name: "television",
    tags: ["item", "retro"],
    art: String.raw`
            o
        o   |
         \  |
          \.|-.
          (\|  )
.==================.
| .--------------. |
| |--.__.--.__.--| |
| |--.__.--.__.--| |
| |--.__.--.__.--| |
| |--.__.--.__.--| |
| '--------------'o|
| LI LI """""""   o|
'=================='
`,
    color: "SlateGray",
    height: 14,
    author: "Joan G. Stark",
  },
  {
    name: "thumbsUp",
    tags: ["symbol"],
    art: String.raw`
      _
     /(|
   __\  \  _____
 (____)  '|
(____)|   |
 (____).__|
  (___)__.|_____
`,
    color: "Goldenrod",
    height: 7,
    author: "Sebastian Stöcker",
  },
  {
    name: "toiletPaper",
    tags: ["item"],
    art: String.raw`
 .--""--.___.._
(  <__>  )     '-.
|'--..--'|      <|
|       :|       /
|       :|--""-./
'.______;'
`,
    color: "White",
    height: 6,
    author: "Ojosh!ro",
  },
  {
    name: "tombstone",
    tags: ["halloween", "item"],
    art: String.raw`
      ,-=-.
     /  +  \
     | ~~~ |
     |R.I.P|
\vV,,|_____|,,Vv/
`,
    color: "Gray",
    height: 5,
    author: "Hayley Jane Wakenshaw",
  },
  {
    name: "turtle",
    tags: ["animal"],
    art: String.raw`
                __
     .,-;-;-,. /'_\
   _/_/_/_|_\_\) /
'-<_><_><_><_>=/\
  '/_/    /_/  \_\
   ""     ""    ""
`,
    color: "LimeGreen",
    height: 6,
    author: "",
  },
  {
    name: "tweetieBird",
    tags: ["bird", "cartoon", "character", "looneyTunes", "pet"],
    art: String.raw`
    .-"-.
   /  - -\
   \  @ @/
    (_ <_)
    _)(
,_('_))\
 "-\)__/
  __|||__
 ((__|__))
`,
    color: "Orange",
    height: 9,
    author: "",
  },
  {
    name: "warning",
    tags: ["message"],
    art: String.raw`
 _    _    __    ____  _  _  ____  _  _  ___
( \/\/ )  /__\  (  _ \( \( )(_  _)( \( )/ __)
 )    (  /(__)\  )   / )  (  _)(_  )  (( (_-.
(__/\__)(__)(__)(_)\_)(_)\_)(____)(_)\_)\___/
`,
    color: "DarkOrange",
    height: 4,
    author: "",
  },
  {
    name: "wasp",
    tags: ["animal", "flying", "insect"],
    art: String.raw`
    _  _
   | )/ )
\\ |//,' __
(")(_)-"()))=-
   (\\
`,
    color: "Yellow",
    height: 5,
    author: "Stef00",
  },
  {
    name: "welcome",
    tags: ["message"],
    art: String.raw`
 _    _  ____  __    ___  _____  __  __  ____
( \/\/ )( ___)(  )  / __)(  _  )(  \/  )( ___)
 )    (  )__)  )(__( (__  )(_)(  )    (  )__)
(__/\__)(____)(____)\___)(_____)(_/\/\_)(____)
`,
    color: "DeepSkyBlue",
    height: 4,
    author: "",
  },
  {
    name: "whale",
    tags: ["animal", "sea"],
    art: String.raw`
       .
      ":"
    ___:____     |"\/"|
  ,'        '.    \  /
  |  O        \___/  |
~^~^~^~^~^~^~^~^~^~^~^~^~
`,
    color: "RoyalBlue",
    height: 6,
    author: "Riitta Rasimus",
  },
  {
    name: "yosemiteSam",
    tags: ["cartoon", "character", "looneyTunes"],
    art: String.raw`
        ___
    .-''   ''-.
  .'           '.
 /               \
|      __ __      |
'      /\_/\      '
 \  ___\O_O/___  /
  \/    ___    \/
  (    (___)    )
   \   /\_/\   /
    \  |._.|  /
     \ |   | /
      \/   \/
`,
    color: "Red",
    height: 13,
    author: "",
  },
  {
    name: "zeppelin",
    tags: ["flying", "vehicle"],
    art: String.raw`
      _..--=--..._
  .-'            '-.  .-.
 /.'              '.\/  /
|=-                -=| (
 \'.              .'/\  \
  '-.,_____ _____.-'  '-'
        [_____]=8
`,
    color: "Blue",
    height: 7,
    author: "Joan G. Stark",
  },
];
