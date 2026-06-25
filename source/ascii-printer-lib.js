/*____________________________________ ASCII LIBRARY ____________________________________*/

var asciis = [
  {
    name: "airplane",
    type: "thing",
    art: String.raw`
 __
 \  \     _ _
  \**\ ___\/ \
X*#####*+^^\_\
  o/\  \
     \__\
`,
    color: "SteelBlue",
    height: 6,
    author: "",
  },
  {
    name: "alarm",
    type: "thing",
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
    type: "character",
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
    type: "thing",
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
    type: "animal",
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
    type: "animal",
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
    type: "thing",
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
    name: "bat",
    type: "animal",
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
    type: "animal",
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
    type: "animal",
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
    type: "animal",
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
    type: "character",
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
    type: "character",
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
    name: "boat",
    type: "thing",
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
    type: "thing",
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
    type: "thing",
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
    type: "message",
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
    type: "animal",
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
    type: "message",
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
    name: "cake",
    type: "thing",
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
    type: "thing",
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
    name: "cat",
    type: "animal",
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
    type: "animal",
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
    name: "cheshireCat",
    type: "character",
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
    name: "coffee",
    type: "thing",
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
    type: "character",
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
    type: "animal",
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
    type: "animal",
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
    type: "thing",
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
    name: "deer",
    type: "animal",
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
    type: "message",
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
    type: "character",
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
    name: "dog",
    type: "animal",
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
    name: "duck",
    type: "animal",
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
    type: "character",
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
    type: "thing",
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
    type: "animal",
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
    type: "message",
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
    type: "animal",
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
    type: "character",
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
    type: "thing",
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
    type: "thing",
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
    type: "thing",
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
    type: "animal",
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
    type: "animal",
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
    type: "thing",
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
    type: "character",
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
    type: "thing",
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
    type: "animal",
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
    type: "thing",
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
    type: "thing",
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
    type: "animal",
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
    type: "message",
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
    type: "message",
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
    type: "animal",
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
    type: "character",
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
    type: "thing",
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
    name: "impossibleTriangle",
    type: "thing",
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
    type: "thing",
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
    type: "message",
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
    type: "character",
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
    type: "thing",
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
    type: "character",
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
    type: "thing",
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
    type: "animal",
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
    type: "message",
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
    type: "thing",
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
    type: "animal",
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
    type: "animal",
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
    type: "character",
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
    type: "character",
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
    type: "animal",
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
    type: "thing",
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
    type: "animal",
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
    name: "parrot",
    type: "animal",
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
    type: "animal",
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
    type: "animal",
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
    type: "character",
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
    type: "thing",
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
    type: "message",
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
    type: "character",
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
    type: "thing",
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
    type: "thing",
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
    type: "character",
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
    type: "thing",
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
    name: "santaClaus",
    type: "character",
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
    type: "character",
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
    type: "thing",
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
    name: "snail",
    type: "animal",
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
    type: "character",
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
    name: "sonic",
    type: "character",
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
    type: "character",
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
    type: "character",
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
    type: "message",
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
    type: "thing",
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
    type: "thing",
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
    type: "thing",
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
    type: "animal",
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
    name: "television",
    type: "thing",
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
    type: "thing",
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
    name: "tombstone",
    type: "thing",
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
    type: "animal",
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
    type: "character",
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
    type: "message",
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
    type: "animal",
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
    type: "message",
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
    type: "animal",
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
    type: "character",
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
];
