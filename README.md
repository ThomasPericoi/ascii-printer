      ___  _____ _____ _____ _____  ______     _       _            
     / _ \/  ___/  __ \_   _|_   _| | ___ \   (_)     | |           
    / /_\ \ `--.| /  \/ | |   | |   | |_/ / __ _ _ __ | |_ ___ _ __ 
    |  _  |`--. \ |     | |   | |   |  __/ '__| | '_ \| __/ _ \ '__|
    | | | /\__/ / \__/\_| |_ _| |_  | |  | |  | | | | | ||  __/ |   
    \_| |_|____/ \____/\___/ \___/  \_|  |_|  |_|_| |_|\__\___|_|

# ASCII Printer

Tiny browser script that prints colorful ASCII arts into your JavaScript console.

## Quick start

Use the minified file from `build` in your page:

```html
<script src="build/ascii-printer.min.js"></script>
```

Then open your browser console and call the recommended API:

```js
AsciiPrinter.printById(94);
AsciiPrinter.printByName("pinkPanther");
AsciiPrinter.printBySearch("panther");
AsciiPrinter.printRandom("bird");
AsciiPrinter.printRandomFrom(["heart", "key", "lightBulb"]);
AsciiPrinter.list("bird");
AsciiPrinter.listNames("bird");
AsciiPrinter.listTags();
AsciiPrinter.getById(59);
AsciiPrinter.getByName("pinkPanther");
AsciiPrinter.version;
AsciiPrinter.catalog;
```

## Demo

Open `demo/index.html` in your browser, then open the console. You can see the online version here: [ASCII Printer Demo](https://ascii-printer.thomaspericoi.com/)

The demo page includes:

- the current library version;
- a black and white documentation site;
- a quick start section;
- a full API overview;
- detailed notes for print, random, list, get, options, and project files;
- an interactive playground;
- copy-ready console commands;
- the full ASCII catalog with ID, name, tags, color, height, author, and `AsciiPrinter.printById(...)` command.

## API

| API | Description |
|---|---|
| `AsciiPrinter.printById()` | Prints one ASCII by ID. |
| `AsciiPrinter.printByName()` | Prints one ASCII by exact name. |
| `AsciiPrinter.printBySearch()` | Prints the first ASCII whose name contains the search text. |
| `AsciiPrinter.printRandom()` | Prints a random ASCII, optionally filtered by tag. |
| `AsciiPrinter.printRandomFrom()` | Prints a random ASCII from a list of names. |
| `AsciiPrinter.listTags()` | Returns the available tags. |
| `AsciiPrinter.listNames()` | Returns ASCII names, optionally filtered by tag. |
| `AsciiPrinter.list()` | Returns ASCII metadata with `id`, `name`, and `tags`, optionally filtered by tag. |
| `AsciiPrinter.getById()` | Returns one ASCII by ID without printing it. |
| `AsciiPrinter.getByName()` | Returns one ASCII by exact name without printing it. |
| `AsciiPrinter.version` | Returns the library version. |
| `AsciiPrinter.catalog` | Returns the full ASCII catalog. |

## Print

Print methods write ASCII art to the browser console. They do not return catalog data.

### Print by name

`AsciiPrinter.printByName(name, options)`

**Use**

Print one ASCII by exact name.

**Input**

    AsciiPrinter.printByName("bigBird");

**Output**

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

### Print by ID

`AsciiPrinter.printById(id, options)`

**Use**

Print one ASCII by catalog ID.

**Input**

    AsciiPrinter.printById(94);

**Output**

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

### Print by search

`AsciiPrinter.printBySearch(query, options)`

**Use**

Print the first ASCII whose name contains the search text.

**Input**

    AsciiPrinter.printBySearch("panther");

**Output**

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

### Print random

`AsciiPrinter.printRandom(tag, options)`

**Use**

Print one random ASCII from the full catalog, or from one tag.

**Input**

    AsciiPrinter.printRandom();
    AsciiPrinter.printRandom("bird");

**Output**

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

### Print random from names

`AsciiPrinter.printRandomFrom(names, options)`

**Use**

Print one random ASCII from a custom list of names.

**Input**

    AsciiPrinter.printRandomFrom(["heart", "heart", "heart", "devil"]);

**Output**

      ,  ,  , , ,
     <(__)> | | |
     | \/ | \_|_/
     \^  ^/   |
     /\--/\  /|
    /  \/  \/ |

**Notes**

Unknown names are ignored. If no provided names match the catalog, ASCII Printer prints a warning.

### Print options

All print methods accept the same optional `options` object.
When a `tag` parameter is shown, it is optional and defaults to the full catalog.

**Input**

    AsciiPrinter.printByName("frog", { color: "HotPink" });
    AsciiPrinter.printByName("frog", { color: false });
    AsciiPrinter.printByName("frog", { credits: true });
    AsciiPrinter.printRandom("character", { color: "Gold", credits: true });
    AsciiPrinter.printRandomFrom(["heart", "key"], { color: "Gold" });
    AsciiPrinter.printBySearch("bird", { color: "DodgerBlue" });

**Options**

| Option | Description |
|---|---|
| `color` | Overrides the catalog color with any CSS color value supported by your browser console. Use `false` to keep the browser console default color. |
| `credits` | Prints the ASCII author after the art. Unknown authors are displayed as `Unknown`. |

CSS color values are documented on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value

## List

List methods return catalog summaries without printing ASCII art.

### List tags

`AsciiPrinter.listTags()`

**Use**

Return the available tags.

**Input**

    AsciiPrinter.listTags();

**Output**

    ["animal", "character", "item", "message", "..."]

### List names

`AsciiPrinter.listNames(tag)`

**Use**

Return ASCII names from the full catalog, or from one tag.
The `tag` parameter is optional.

**Input**

    AsciiPrinter.listNames();
    AsciiPrinter.listNames("bird");

**Output**

    ["anteater", "armadillo", "bat", "..."]

### List metadata

`AsciiPrinter.list(tag)`

**Use**

Return ASCII metadata with `id`, `name`, and `tags`.
The `tag` parameter is optional.

**Input**

    AsciiPrinter.list("bird");

**Output**

    [
      { id: 48, name: "duck", tags: ["animal","bird","pet"] },
      { id: 53, name: "flamingo", tags: ["animal","bird"] },
      { id: 94, name: "parrot", tags: ["animal","bird","flying","pet"] }
    ]

## Get

Get methods return full ASCII objects without printing ASCII art.

### Get by name

`AsciiPrinter.getByName(name)`

**Use**

Return one ASCII object by exact name.

**Input**

    AsciiPrinter.getByName("frog");

**Output**

    {
      name: "frog",
      tags: ["animal"],
      art: "...",
      color: "SpringGreen",
      height: 6,
      author: ""
    }

### Get by ID

`AsciiPrinter.getById(id)`

**Use**

Return one ASCII object by catalog ID.

**Input**

    AsciiPrinter.getById(59);

**Output**

    {
      name: "frog",
      tags: ["animal"],
      art: "...",
      color: "SpringGreen",
      height: 6,
      author: ""
    }

## Catalog

| ID | Name | Tags | Color | Height | Author |
|---:|---|---|---|---:|---|
| 0 | 404 | message | Green | 4 | Unknown |
| 1 | alarm | item | Chocolate | 10 | Joan G. Stark |
| 2 | alien | character, space | Green | 9 | Joan G. Stark |
| 3 | anchor | item, sea | SlateGray | 10 | Joan G. Stark |
| 4 | anteater | animal | LightSlateGray | 7 | Veronica Karlsson |
| 5 | apple | food, nature | Red | 5 | Hayley Jane Wakenshaw |
| 6 | armadillo | animal | RosyBrown | 7 | Seal do Mar |
| 7 | axe | item, medieval, tool, weapon | SlateGray | 10 | Harry Mason |
| 8 | bart | cartoon, character, simpsons | Yellow | 9 | Unknown |
| 9 | bat | animal, flying | DimGray | 7 | Joan G. Stark |
| 10 | bear | animal | Brown | 10 | Joan G. Stark |
| 11 | beaver | animal | DarkGoldenrod | 7 | Joan G. Stark |
| 12 | beer | drink, item | Goldenrod | 8 | Paul Martin Howard |
| 13 | bees | animal, insect | Goldenrod | 9 | Joan G. Stark |
| 14 | beetle | animal, insect | Purple | 6 | l42 |
| 15 | bender | cartoon, character, futurama, space | Silver | 16 | Silver Saks |
| 16 | bigBird | bird, cartoon, character, sesameStreet | Yellow | 16 | Unknown |
| 17 | bike | vehicle | Yellow | 16 | Hayley Jane Wakenshaw |
| 18 | boat | sea, vehicle | Aqua | 5 | Hayley Jane Wakenshaw |
| 19 | bomb | item, weapon | DimGray | 14 | Joan G. Stark |
| 20 | book | item | SaddleBrown | 10 | Joan G. Stark |
| 21 | bravo | message | MediumPurple | 4 | Unknown |
| 22 | bug | animal, insect | OliveDrab | 6 | Unknown |
| 23 | bye | message | MediumPurple | 4 | Unknown |
| 24 | cactus | nature, plant | Green | 12 | Joan G. Stark |
| 25 | cake | food | Pink | 10 | Laura Brown |
| 26 | camera | item, retro | Gray | 7 | Joan G. Stark |
| 27 | candle | christmas, item | Gold | 7 | Unknown |
| 28 | cat | animal, pet | DarkSlateGrey | 12 | Unknown |
| 29 | caterpillar | animal, insect | Green | 3 | Joan G. Stark |
| 30 | cheese | food | Yellow | 6 | Randy Ransom |
| 31 | cheshireCat | cartoon, character, disney | Violet | 6 | Randy Ransom |
| 32 | chess | game, item | Black | 7 | Unknown |
| 33 | coffee | drink, item | Brown | 9 | H.P. Barmario |
| 34 | cookieMonster | cartoon, character, sesameStreet | Blue | 6 | Randy Ransom |
| 35 | cool | message | Blue | 4 | Unknown |
| 36 | crab | animal, sea | Red | 8 | Unknown |
| 37 | crocodile | animal | OliveDrab | 9 | Shanaka Dias |
| 38 | crown | item, medieval, symbol | Gold | 10 | Joan G. Stark |
| 39 | cube | symbol | Gold | 7 | Unknown |
| 40 | dart | game, item, sport | Silver | 3 | Joan G. Stark |
| 41 | deer | animal | Tan | 15 | Unknown |
| 42 | dev | message | MediumPurple | 4 | Unknown |
| 43 | devil | character, halloween | Red | 6 | Joan G. Stark |
| 44 | die | game, item | White | 7 | Unknown |
| 45 | diplodocus | animal | Green | 6 | Unknown |
| 46 | dog | animal, pet | Tan | 8 | Unknown |
| 47 | dragon | halloween | Red | 11 | Unknown |
| 48 | duck | animal, bird, pet | DarkGray | 7 | Unknown |
| 49 | einstein | character, history | Silver | 9 | Joan G. Stark |
| 50 | electricGuitar | item, music | Red | 14 | Rowan Crawford |
| 51 | elephant | animal | Silver | 11 | Hamilton Furtado |
| 52 | error | message | Red | 4 | Unknown |
| 53 | flamingo | animal, bird | Pink | 11 | Joan G. Stark |
| 54 | flintstones | cartoon, character | DarkOrange | 11 | Unknown |
| 55 | floppyDisk | item, retro | DarkSlateGray | 10 | Robert Craggs |
| 56 | flower | nature, plant | Pink | 7 | Joan G. Stark |
| 57 | folder | item, retro | Orange | 7 | Joan G. Stark |
| 58 | fox | animal | DarkOrange | 9 | Unknown |
| 59 | frog | animal | SpringGreen | 6 | Unknown |
| 60 | frontDoor | city | Brown | 12 | Hayley Jane Wakenshaw |
| 61 | garfield | cartoon, character, pet | Orange | 12 | Joan G. Stark |
| 62 | gift | christmas, item | Red | 5 | Laura Brown |
| 63 | goldfish | animal, sea | Gold | 6 | Unknown |
| 64 | gun | item, weapon | Silver | 6 | Unknown |
| 65 | hat | item | Brown | 9 | gnv |
| 66 | heart | symbol | Red | 5 | Bungle |
| 67 | hedgehog | animal | Tan | 5 | Unknown |
| 68 | hello | message | DeepSkyBlue | 4 | Unknown |
| 69 | helloWorld | message | DeepSkyBlue | 4 | Unknown |
| 70 | heron | animal, bird | DeepSkyBlue | 10 | Joan G. Stark |
| 71 | hippo | animal | DarkGray | 7 | Unknown |
| 72 | homer | cartoon, character, simpsons | Gold | 14 | Unknown |
| 73 | hotAirBalloon | flying, vehicle | Red | 15 | Joan G. Stark |
| 74 | house | city | Brown | 7 | Unknown |
| 75 | impossibleTriangle | symbol | Gold | 16 | Ojosh!ro |
| 76 | impossibleTrident | symbol | Gold | 15 | P.J. LaBrocca |
| 77 | info | message | DeepSkyBlue | 4 | Unknown |
| 78 | kermit | cartoon, character, sesameStreet | SpringGreen | 13 | Joan G. Stark |
| 79 | key | item | Gold | 5 | Hayley Jane Wakenshaw |
| 80 | kingKong | character, cinema | Silver | 21 | Cyberfox |
| 81 | knight | character, medieval | Silver | 10 | Joan G. Stark |
| 82 | lightBulb | item | Goldenrod | 7 | Joan G. Stark |
| 83 | lion | animal | Peru | 13 | Joan G. Stark |
| 84 | loading | message | DeepSkyBlue | 4 | Unknown |
| 85 | mailbox | item | Red | 12 | Joan G. Stark |
| 86 | marbles | animal, pet | Brown | 10 | Unknown |
| 87 | marmot | animal | DarkGoldenrod | 12 | Hayley Jane Wakenshaw |
| 88 | maryPoppins | cartoon, character, cinema, disney | Black | 17 | Unknown |
| 89 | monaLisa | art, character | Sienna | 17 | Unknown |
| 90 | monkey | animal | Brown | 12 | Joan G. Stark |
| 91 | mountain | christmas, nature | SlateGray | 9 | Unknown |
| 92 | mouse | animal, pet | Gray | 5 | Unknown |
| 93 | mushroom | nature, plant | Red | 5 | Donovan Baker |
| 94 | parrot | animal, bird, flying, pet | DodgerBlue | 16 | Unknown |
| 95 | pig | animal | Pink | 9 | Unknown |
| 96 | pinguin | animal, bird | Black | 6 | Unknown |
| 97 | pinkPanther | cartoon, character | Pink | 12 | Unknown |
| 98 | plane | flying, vehicle | Red | 8 | Joan G. Stark |
| 99 | production | message | LimeGreen | 4 | Unknown |
| 100 | puzzle | game, item | Yellow | 7 | Unknown |
| 101 | r2d2 | character, cinema, space, starWars | Blue | 8 | snd |
| 102 | rain | nature, weather | DodgerBlue | 6 | Unknown |
| 103 | rainbow | nature, weather | MediumPurple | 6 | Brian T. Odom |
| 104 | ready | message | DodgerBlue | 4 | Unknown |
| 105 | robot | character, space | Blue | 14 | Joan G. Stark |
| 106 | rocket | space, vehicle | OrangeRed | 9 | Joan G. Stark |
| 107 | rowlf | cartoon, character, sesameStreet | Brown | 6 | Unknown |
| 108 | santaClaus | character, christmas | Red | 10 | B.D.S. "Don" McConnell |
| 109 | sherlockHolmes | character | MediumSeaGreen | 8 | Harry Mason |
| 110 | shield | item, medieval, weapon | Gold | 8 | Joan G. Stark |
| 111 | skeleton | character, halloween | White | 14 | Ultramarine Rain, Lunatic 42 |
| 112 | snail | animal | SeaGreen | 5 | Hayley Jane Wakenshaw |
| 113 | snoopy | cartoon, character, pet | Black | 15 | Win Kang |
| 114 | snowman | character, christmas | White | 6 | Laura Brown |
| 115 | sonic | character, videoGame | Blue | 9 | Unknown |
| 116 | spaceInvader | character, space, videoGame | Chartreuse | 8 | Unknown |
| 117 | squidward | cartoon, character, spongeBob | Gray | 15 | LGB |
| 118 | squirrel | animal | Brown | 9 | Rowan Crawford |
| 119 | stage | message | DarkOrange | 4 | Unknown |
| 120 | stopSign | item | Red | 8 | Joan G. Stark |
| 121 | sunFace | character, space, symbol | Gold | 13 | Joan G. Stark |
| 122 | sword | item, medieval, weapon | Gold | 7 | Veronica Karlsson |
| 123 | tank | vehicle, weapon | Green | 4 | Chad Racine |
| 124 | teapot | drink, item | Sienna | 11 | Stephane Abello |
| 125 | teckel | animal, pet | Chocolate | 8 | Hayley Jane Wakenshaw |
| 126 | telescope | item, space | SlateGray | 14 | David Riley |
| 127 | television | item, retro | SlateGray | 14 | Joan G. Stark |
| 128 | thumbsUp | symbol | Goldenrod | 7 | Sebastian Stöcker |
| 129 | toiletPaper | item | White | 6 | Ojosh!ro |
| 130 | tombstone | halloween, item | Gray | 5 | Hayley Jane Wakenshaw |
| 131 | turtle | animal | LimeGreen | 6 | Unknown |
| 132 | tweetieBird | bird, cartoon, character, looneyTunes, pet | Orange | 9 | Unknown |
| 133 | warning | message | DarkOrange | 4 | Unknown |
| 134 | wasp | animal, flying, insect | Yellow | 5 | Stef00 |
| 135 | welcome | message | DeepSkyBlue | 4 | Unknown |
| 136 | whale | animal, sea | RoyalBlue | 6 | Riitta Rasimus |
| 137 | wine | drink, item | Purple | 11 | John Frick |
| 138 | yosemiteSam | cartoon, character, looneyTunes | Red | 13 | Unknown |
| 139 | zeppelin | flying, vehicle | Blue | 7 | Joan G. Stark |
## Credits

I didn't make the arts. At best, I just tweaked them. Here are the names of the authors (when I could find them):
  - B.D.S. "Don" McConnell
  - Brian T. Odom
  - Bungle
  - Chad Racine
  - Cyberfox
  - David Riley
  - Donovan Baker
  - gnv
  - H.P. Barmario
  - Hamilton Furtado
  - Harry Mason
  - Hayley Jane Wakenshaw
  - Joan G. Stark
  - John Frick
  - l42
  - Laura Brown
  - LGB
  - Ojosh!ro
  - P.J. LaBrocca
  - Paul Martin Howard
  - Randy Ransom
  - Riitta Rasimus
  - Robert Craggs
  - Rowan Crawford
  - Seal do Mar
  - Sebastian Stöcker
  - Shanaka Dias
  - Silver Saks
  - snd
  - Stef00
  - Stephane Abello
  - Ultramarine Rain, Lunatic 42
  - Veronica Karlsson
  - Win Kang
## Files

- `build/ascii-printer.min.js` is the recommended file to use in a page. Current size: ~40.3 KB.
- `build/ascii-printer.js` is the readable build. Current size: ~44.8 KB.
- `demo/index.html` is the browser demo page.
- `demo/styles.css` contains the demo styling.
- `demo/main.js` contains the demo interactions.
- `source/ascii-printer-functions.js` contains the public API and internal helpers.
- `source/ascii-printer-lib.js` contains the ASCII library.
- `LICENSE` contains the code license.

The build files are generated manually, so update both `source` and `build` when changing the library or helpers.
Build sizes are approximate and will move as the catalog grows.

## License

The JavaScript code is released under the MIT License. See `LICENSE`.

The ASCII arts are credited in this README when the author is known.
