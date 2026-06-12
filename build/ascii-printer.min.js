function getRandomIdFromArray(a){return Math.floor(Math.random()*a.length)}function getRandomValueFromArray(a){return a[getRandomIdFromArray(a)]}function printAsciiById(a){console.log(`%c${asciis[a].art}`,`color: ${asciis[a].color}; font-family: monospace;`)}function printAsciiByName(a){printAsciiById(selectedAscii=asciis.findIndex(r=>r.name===a))}function printRandomAscii(a="all"){var r=asciis.filter(r=>r.type===a);r.length<1&&(r=Object.values(asciis)),printAsciiByName((randomAscii=getRandomValueFromArray(r)).name)}var asciis=[{type:"animal",name:"anteater",art:String.raw` 
       _.---._    /\\
    ./'       "--'\//
  ./              o \
 /./\  )______   \__ \
./  / /\ \   | \ \  \ \
   / /  \ \  | |\ \  \7
    "     "    "  "
    `,color:"LightSlateGray",height:7,author:"Veronica Karlsson"},{type:"animal",name:"armadillo",art:String.raw` 
             _.-----__    
          ,:::://///,:::-. 
         /:''/////// \\:::;/|/
        /'   ||||||     :://''\
      .' ,   ||||||     ./(  e \
-===~__-'\__X_'''''\_____/~'-.__'0
           ~~        ~~       
    `,color:"RosyBrown",height:7,author:"Seal do Mar"},{type:"animal",name:"bat",art:String.raw` 
  /\                 /\
 / \'._   (\_/)   _.'/ \
/_.''._'--('.')--'_.''._\
| \_ / ';=/ " \=;' \ _/ |
 \/ '\__|'\___/'|__/'  \/
         \(/|\)/
          " ' "
    `,color:"DimGray",height:7,author:"Joan G. Stark"},{type:"animal",name:"bear",art:String.raw` 
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
    `,color:"Brown",height:10,author:"Joan G. Stark"},{type:"animal",name:"beaver",art:String.raw` 
            ___
         .="   "=._.---.
       ."         c ' Y' p
      /   ,       '.  w_/
      |   '-.   /     /
_,..._|      )_-\ \_=.\
'-....-''------)))'=-'"''"
    `,color:"DarkGoldenrod",height:7,author:"Joan G. Stark"},{type:"animal",name:"cat",art:String.raw` 
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
    `,color:"DarkSlateGrey",height:12,author:""},{type:"animal",name:"caterpillar",art:String.raw` 
\_/-.--.--.--.--.--.
(")__)__)__)__)__)__)
 ^ "" "" "" "" "" ""
    `,color:"Green",height:3,author:"Joan G. Stark"},{type:"animal",name:"crab",art:String.raw` 
   __       __    
  / <'     '> \
 (  / @   @ \  )
  \(_ _\_/_ _)/
(\ '-/     \-' /)
 "===\     /==="
  .==')___('==.
 ' .='     '=. '
    `,color:"Red",height:8,author:""},{type:"animal",name:"deer",art:String.raw` 
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
    `,color:"Tan",height:15,author:""},{type:"animal",name:"dog",art:String.raw` 
            /)-_-(\
             (o o)
     .-----__/\o/
    /  __      /
\__/\ /  \_\ |/
     \\     ||
     //     ||
     |\     |\
    `,color:"Tan",height:8,author:""},{type:"animal",name:"duck",art:String.raw` 
      ,~~.
     (  9 )-_,
(\___ )=='-'
 \ .   ) )
  \ '-' /
   '~j-'  
     "=:
    `,color:"DarkGray",height:7,author:""},{type:"animal",name:"elephant",art:String.raw` 
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
    `,color:"Silver",height:11,author:"Hamilton Furtado"},{type:"animal",name:"flamingo",art:String.raw` 
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
    `,color:"Pink",height:13,author:""},{type:"animal",name:"fox",art:String.raw` 
 /\   /\
//\\_//\\     __/\
\_     _/    /   /
 / . . \    /^^^]
 \_\ /_/    [   ]
  / ° \_    [   /
  \     \_  /  /
   [ [ /  \/ _/
  _[ [ \  /_/
    `,color:"DarkOrange",height:9,author:""},{type:"animal",name:"frog",art:String.raw` 
       _   _
      (o)-(o)
   .-(   "   )-.
  /  /;'-=-';\  \
__\ _\ \___/ /_ /__
  /|  /|\ /|\  |\
    `,color:"SpringGreen",height:6,author:""},{type:"animal",name:"goldfish",art:String.raw` 
      /'·.¸
     /¸...¸':·
 ¸.·'  ¸   '·.¸.·°)
: © ):´;      ¸  {
 °·.¸¸'·  ¸.·´\'·¸)
      \\´´\¸.·´
    `,color:"Gold",height:6,author:""},{type:"animal",name:"hippo",art:String.raw` 
     c~~p ,---------.
,---'oo  )           \
( O O                  )/
'=^='                 /
      \    ,     .   /
      \\  |-----'|  /
      ||__|    |_|__|
    `,color:"DarkGray",height:7,author:""},{type:"animal",name:"hedgehog",art:String.raw` 
  .|||||||||.
 |||||||||||||
|||||||||||' .\
'||||||||||_,__o
    ''  '' 
    `,color:"Tan",height:5,author:""},{type:"animal",name:"lion",art:String.raw` 
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
    `,color:"Peru",height:13,author:"Joan G. Stark"},{type:"animal",name:"marbles",art:String.raw` 
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
    `,color:"Brown",height:10,author:""},{type:"animal",name:"marmot",art:String.raw` 
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
    `,color:"DarkGoldenrod",height:12,author:"Hayley Jane Wakenshaw"},{type:"animal",name:"monkey",art:String.raw`
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
    `,color:"Brown",height:12,author:"Joan G. Stark"},{type:"animal",name:"mouse",art:String.raw` 
(q\_/p)
 /. .\.-""""-.      __
=\_t_/=    /  '\   (
  )\ ))__ _\    |___)
 nn-nn'  'nn---'
    `,color:"Grey",height:5,author:""},{type:"animal",name:"parrot",art:String.raw` 
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
    `,color:"DodgerBlue",height:16,author:""},{type:"animal",name:"pig",art:String.raw` 
       9
  ,--.-'-,--.
  \  /-~-\  /
 / )' a a '( \
( (  ,---.  ) )
 \ '(_o_o_)' /
  \   '-'   /
   | |---| |
   [_]   [_]
    `,color:"Pink",height:9,author:""},{type:"animal",name:"pinguin",art:String.raw` 
   __
-=(o '.
   '.-.\
   /|  \\
   '|  ||
    _\_):,_
    `,color:"Black",height:6,author:""},{type:"animal",name:"snail",art:String.raw` 
    .----.   @   @
   / .-"-.'.  \v/
   | | '\ \ \_/ )
 ,-\ '-.' /.'  /
'---'----'----'
    `,color:"SeaGreen",height:5,author:"Hayley Jane Wakenshaw"},{type:"animal",name:"teckel",art:String.raw` 
                        __
 ,                    ," e'--o
((                   (  | __,'
\\~----------------' \_;/
(                      /
 /) ._______________. )
(( (              (( (
'' '               ''-'
    `,color:"Chocolate",height:8,author:"Hayley Jane Wakenshaw"},{type:"animal",name:"turtle",art:String.raw` 
                __
     .,-;-;-,. /'_\
   _/_/_/_|_\_\) /
'-<_><_><_><_>=/\
  '/_/    /_/  \_\
   ""     ""    ""
    `,color:"LimeGreen",height:6,author:""},{type:"animal",name:"wasp",art:String.raw` 
    _  _
   | )/ )
\\ |//,' __
(")(_)-"()))=-
   (\\
    `,color:"Yellow",height:5,author:"Stef00"},{type:"animal",name:"whale",art:String.raw` 
       .
      ":"
    ___:____     |"\/"|
  ,'        '.    \  /
  |  O        \___/  |
~^~^~^~^~^~^~^~^~^~^~^~^~
    `,color:"RoyalBlue",height:6,author:"Riitta Rasimus"},{type:"character",name:"bender",art:String.raw` 
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
    `,color:"Silver",height:16,author:"Silver Saks"},{type:"character",name:"bigBird",art:String.raw` 
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
    `,color:"Yellow",height:16,author:""},{type:"character",name:"cheshireCat",art:String.raw` 
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
    `,color:"Violet",height:6,author:"Randy Ransom"},{type:"character",name:"cookieMonster",art:String.raw` 
    (o)(o)
  w"      "w
 W  -====-  W
  "w      w"
 w"""""""""w
W            W
    `,color:"Blue",height:6,author:"Randy Ransom"},{type:"character",name:"devil",art:String.raw` 
  ,  ,  , , ,
 <(__)> | | |
 | \/ | \_|_/
 \^  ^/   |
 /\--/\  /|
/  \/  \/ |
    `,color:"Red",height:6,author:"Joan G. Stark"},{type:"character",name:"einstein",art:String.raw` 
      -''--.
      _'>   '\.-'/
  _.'     _     '._
.'   _.='   '=._   '.
>_   / /_\ /_\ \   _<
  / (  \o/\\o/  ) \
  >._\ .-,_)-. /_.<
      /__/ \__\ 
        '---'
    `,color:"Silver",height:9,author:"Joan G. Stark"},{type:"character",name:"flintstones",art:String.raw` 
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
    `,color:"DarkOrange",height:11,author:""},{type:"character",name:"garfield",art:String.raw` 
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
    `,color:"Orange",height:12,author:"Joan G. Stark"},{type:"character",name:"homer",art:String.raw` 
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
    `,color:"Gold",height:14,author:""},{type:"character",name:"kermit",art:String.raw` 
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
    `,color:"SpringGreen",height:13,author:"Joan G. Stark"},{type:"character",name:"maryPoppins",art:String.raw` 
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
    `,color:"Black",height:17,author:""},{type:"character",name:"monaLisa",art:String.raw` 
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
    `,color:"Sienna",height:17,author:""},{type:"character",name:"pinkPanther",art:String.raw` 
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
    `,color:"Pink",height:12,author:""},{type:"character",name:"r2d2",art:String.raw`
    .---.
  .'_:___".
  |__ --==|
  [  ]  :[|
  |__| I=[|
  / / ____|
 |-/.____.'
/___\ /___\  
    `,color:"Blue",height:8,author:"snd"},{type:"character",name:"santaClaus",art:String.raw`
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
    `,color:"Red",height:10,author:'B.D.S.`"Don"McConnell'},{type:"character",name:"sherlockHolmes",art:String.raw`
   ,_       
 ,'  '\,_   
 |_,-'_)    
 /##c '\  ( 
' |'  -{.  )
  /\__-' \[]
 /'-_'\     
 '     \   
    `,color:"MediumSeaGreen",height:8,author:"Harry Mason"},{type:"character",name:"sonic",art:String.raw`
          .,
.      _,'f----.._
|\ ,-'"/  |     ,'
|,_  ,--.      /
/,-. ,''.     (_
f  o|  o|__     "'-.
,-._.,--'_ '.   _.,-'
'"' ___.,'' j,-'
  '-.__.,--'
    `,color:"Blue",height:9,author:""},{type:"character",name:"spaceInvader",art:String.raw`
         __
       _|  |_
     _|      |_
    |  _    _  |
    | |_|  |_| |
 _  |  _    _  |  _
|_|_|_| |__| |_|_|_|
  |_|_        _|_|
    |_|      |_|
    `,color:"Chartreuse",height:8,author:""},{type:"character",name:"squidward",art:String.raw` 
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
    `,color:"Grey",height:15,author:"LGB"},{type:"character",name:"tweetieBird",art:String.raw` 
    .-"-.
   /  - -\
   \  @ @/
    (_ <_)
    _)(
,_('_))\
 "-\)__/
  __|||__
 ((__|__))
    `,color:"Orange",height:9,author:""},{type:"character",name:"yosemiteSam",art:String.raw` 
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
    `,color:"Red",height:13,author:""},{type:"item",name:"alarm",art:String.raw` 
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
    `,color:"Chocolate",height:10,author:"Joan G. Stark"},{type:"item",name:"boat",art:String.raw` 
       _    _
    __|_|__|_|__
  _|____________|__
 |o o o o o o o o /
~'~'~'~'~'~'~'~'~'~'~
    `,color:"Aqua",height:5,author:"Hayley Jane Wakenshaw"},{type:"item",name:"camera",art:String.raw` 
 .-------------------.
/--"--.------.------/|
|Kodak|__Ll__| [==] ||
|     | .--. | """" ||
|     |( () )|      ||
|     | '--' |      |/
'-----'------'------'
    `,color:"Gray",height:10,author:"Joan G. Stark"},{type:"item",name:"crown",art:String.raw` 
       o 
    o^/|\^o
 o_^|\/*\/|^_o
o\*''.\|/.''*/o
 \\\\\\|//////
  {><><@><><}
  '"""""""""'
    `,color:"Gold",height:10,author:"Joan G. Stark"},{type:"item",name:"floppyDisk",art:String.raw` 
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
    `,color:"DarkSlateGrey",height:10,author:"Robert Craggs"},{type:"item",name:"plane",art:String.raw` 
            __/\__
           '==/\=='
 ____________/__\____________
/____________________________\
  __||__||__/.--.\__||__||__
 /__|___|___( >< )___|___|__\
           _/.--.\_
          (/------\)
    `,color:"Red",height:8,author:"Joan G. Stark"},{type:"item",name:"television",art:String.raw` 
 ______________
|,----------.  |\
||           |=| |
||          || | |
||       . _o| | | __
|'-----------' |/ /~/
~~~~~~~~~~~~~~~  /o/
                 ~~
    `,color:"CornSilk",height:8,author:"Ojoshiro"},{type:"item",name:"tombstone",art:String.raw` 
      ,-=-.
     /  +  \
     | ~~~ |
     |R.I.P|
\vV,,|_____|,,Vv/
    `,color:"Gray",height:5,author:"Hayley Jane Wakenshaw"},];