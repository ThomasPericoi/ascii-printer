(function (global) {
var ASCII_PRINTER_VERSION = "1.1.0";

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

function listAsciiTypes() {
  return [...new Set(asciis.map((ascii) => ascii.type))];
}

function listAsciiNames(category = "all") {
  const selectedAsciis =
    category === "all"
      ? asciis
      : asciis.filter((ascii) => ascii.type === category);

  return selectedAsciis.map((ascii) => ascii.name);
}

function listAsciis(category = "all") {
  return asciis
    .map((ascii, id) => ({
      id,
      name: ascii.name,
      category: ascii.type,
    }))
    .filter((ascii) => category === "all" || ascii.category === category);
}

function getAsciiStyle(ascii, options = {}) {
  const color = options.color || ascii.color;
  return `color: ${color}; font-family: monospace;`;
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

function printRandomAscii(category = "all", options = {}) {
  var selectedAsciis = asciis.filter((ascii) => ascii.type === category);
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
  listTypes: listAsciiTypes,
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
    type: "animal",
    name: "anteater",
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
    type: "animal",
    name: "armadillo",
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
    type: "animal",
    name: "bat",
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
    type: "animal",
    name: "bear",
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
    type: "animal",
    name: "bees",
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
    type: "animal",
    name: "beaver",
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
    type: "animal",
    name: "bug",
    art: String.raw`
  .   .
   \ /
 '/ ! \'
 | o:o |
~| o:o |~
/ \_:_/ \
    `,
    color: "DarkGoldenrod",
    height: 6,
    author: "",
  },
  {
    type: "animal",
    name: "cat",
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
    type: "animal",
    name: "caterpillar",
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
    type: "animal",
    name: "crab",
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
    type: "animal",
    name: "crocodile",
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
    type: "animal",
    name: "deer",
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
    type: "animal",
    name: "dog",
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
    type: "animal",
    name: "duck",
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
    type: "animal",
    name: "elephant",
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
    type: "animal",
    name: "flamingo",
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
    type: "animal",
    name: "fox",
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
    type: "animal",
    name: "frog",
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
    type: "animal",
    name: "goldfish",
    art: String.raw`
      /'·.¸
     /¸...¸':·
 ¸.·'  ¸   '·.¸.·°)
: © ):´;      ¸  {
 °·.¸¸'·  ¸.·´\'·¸)
      \\´´\¸.·´
    `,
    color: "Gold",
    height: 6,
    author: "",
  },
  {
    type: "animal",
    name: "hippo",
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
    type: "animal",
    name: "hedgehog",
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
    type: "animal",
    name: "lion",
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
    type: "animal",
    name: "marbles",
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
    type: "animal",
    name: "marmot",
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
    type: "animal",
    name: "monkey",
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
    type: "animal",
    name: "mouse",
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
    type: "animal",
    name: "parrot",
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
    type: "animal",
    name: "pig",
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
    type: "animal",
    name: "pinguin",
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
    type: "animal",
    name: "snail",
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
    type: "animal",
    name: "teckel",
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
    type: "animal",
    name: "turtle",
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
    type: "animal",
    name: "wasp",
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
    type: "animal",
    name: "whale",
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
    type: "character",
    name: "alien",
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
    type: "character",
    name: "bender",
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
    type: "character",
    name: "bigBird",
    art: String.raw`
   . -- .
  (      )
 ( (/oo\) )
  ( \`'/ )
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
    type: "character",
    name: "cheshireCat",
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
    type: "character",
    name: "cookieMonster",
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
    type: "character",
    name: "devil",
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
    type: "character",
    name: "einstein",
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
    type: "character",
    name: "flintstones",
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
    type: "character",
    name: "garfield",
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
    type: "character",
    name: "homer",
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
    type: "character",
    name: "kermit",
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
    type: "character",
    name: "knight",
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
    type: "character",
    name: "maryPoppins",
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
    type: "character",
    name: "monaLisa",
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
    type: "character",
    name: "pinkPanther",
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
    type: "character",
    name: "r2d2",
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
    type: "character",
    name: "robot",
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
    type: "character",
    name: "santaClaus",
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
    type: "character",
    name: "sherlockHolmes",
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
    type: "character",
    name: "snoopy",
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
    type: "character",
    name: "sonic",
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
    type: "character",
    name: "spaceInvader",
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
    type: "character",
    name: "squidward",
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
    type: "character",
    name: "tweetieBird",
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
    type: "character",
    name: "yosemiteSam",
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
    type: "thing",
    name: "alarm",
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
    type: "thing",
    name: "anchor",
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
    type: "thing",
    name: "axe",
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
    type: "thing",
    name: "boat",
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
    type: "thing",
    name: "bomb",
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
    type: "thing",
    name: "book",
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
    type: "thing",
    name: "cake",
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
    type: "thing",
    name: "camera",
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
    type: "thing",
    name: "coffee",
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
    type: "thing",
    name: "crown",
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
    type: "thing",
    name: "electricGuitar",
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
    type: "thing",
    name: "floppyDisk",
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
    type: "thing",
    name: "flower",
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
    type: "thing",
    name: "folder",
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
    type: "thing",
    name: "frontDoor",
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
    type: "thing",
    name: "gift",
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
    type: "thing",
    name: "gun",
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
    type: "thing",
    name: "heart",
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
    type: "thing",
    name: "hotAirBalloon",
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
    type: "thing",
    name: "impossibleTriangle",
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
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxx+-
    `,
    color: "Gold",
    height: 17,
    author: "Ojosh!ro",
  },
  {
    type: "thing",
    name: "impossibleTrident",
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
    type: "thing",
    name: "key",
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
    type: "thing",
    name: "lightBulb",
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
    type: "thing",
    name: "mailbox",
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
    type: "thing",
    name: "plane",
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
    type: "thing",
    name: "rocket",
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
    type: "thing",
    name: "stopSign",
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
    type: "thing",
    name: "sword",
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
    type: "thing",
    name: "teapot",
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
    type: "thing",
    name: "television",
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
    type: "thing",
    name: "thumbsUp",
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
    type: "thing",
    name: "tombstone",
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
    type: "message",
    name: "bravo",
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
    type: "message",
    name: "bye",
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
    type: "message",
    name: "dev",
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
    type: "message",
    name: "error",
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
    type: "message",
    name: "hello",
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
    type: "message",
    name: "helloWorld",
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
    type: "message",
    name: "info",
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
    type: "message",
    name: "loading",
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
    type: "message",
    name: "production",
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
    type: "message",
    name: "stage",
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
    type: "message",
    name: "warning",
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
    type: "message",
    name: "welcome",
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
];
