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
AsciiPrinter.printById(73);
AsciiPrinter.printByName("pinkPanther");
AsciiPrinter.printBySearch("panther");
AsciiPrinter.printRandom("bird");
AsciiPrinter.printRandomFrom(["heart", "key", "lightBulb"]);
AsciiPrinter.list("bird");
AsciiPrinter.listNames("bird");
AsciiPrinter.listTags();
AsciiPrinter.getById(43);
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

    AsciiPrinter.printById(73);

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
      { id: 32, name: "duck", tags: ["animal","bird"] },
      { id: 37, name: "flamingo", tags: ["animal","bird"] },
      { id: 73, name: "parrot", tags: ["animal","bird","flying","pet"] }
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

    AsciiPrinter.getById(43);

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
| 0 | alarm | item | Chocolate | 10 | Joan G. Stark |
| 1 | alien | character, space | Green | 9 | Joan G. Stark |
| 2 | anchor | item, sea | SlateGray | 10 | Joan G. Stark |
| 3 | anteater | animal | LightSlateGray | 7 | Veronica Karlsson |
| 4 | armadillo | animal | RosyBrown | 7 | Seal do Mar |
| 5 | axe | item, medieval, tool, weapon | SlateGray | 10 | Harry Mason |
| 6 | bat | animal, flying | DimGray | 7 | Joan G. Stark |
| 7 | bear | animal | Brown | 10 | Joan G. Stark |
| 8 | beaver | animal | DarkGoldenrod | 7 | Joan G. Stark |
| 9 | bees | animal, insect | Goldenrod | 9 | Joan G. Stark |
| 10 | bender | cartoon, character, space | Silver | 16 | Silver Saks |
| 11 | bigBird | bird, cartoon, character | Yellow | 16 | Unknown |
| 12 | boat | sea, vehicle | Aqua | 5 | Hayley Jane Wakenshaw |
| 13 | bomb | item, weapon | DimGray | 14 | Joan G. Stark |
| 14 | book | item | SaddleBrown | 10 | Joan G. Stark |
| 15 | bravo | message | MediumPurple | 4 | Unknown |
| 16 | bug | animal, insect | OliveDrab | 6 | Unknown |
| 17 | bye | message | MediumPurple | 4 | Unknown |
| 18 | cake | food | Pink | 10 | Laura Brown |
| 19 | camera | item, retro | Gray | 7 | Joan G. Stark |
| 20 | cat | animal, pet | DarkSlateGrey | 12 | Unknown |
| 21 | caterpillar | animal, insect | Green | 3 | Joan G. Stark |
| 22 | cheshireCat | cartoon, character | Violet | 6 | Randy Ransom |
| 23 | coffee | drink, item | Brown | 9 | H.P. Barmario |
| 24 | cookieMonster | cartoon, character | Blue | 6 | Randy Ransom |
| 25 | crab | animal, sea | Red | 8 | Unknown |
| 26 | crocodile | animal | OliveDrab | 9 | Shanaka Dias |
| 27 | crown | item, medieval, symbol | Gold | 10 | Joan G. Stark |
| 28 | deer | animal | Tan | 15 | Unknown |
| 29 | dev | message | MediumPurple | 4 | Unknown |
| 30 | devil | character, halloween | Red | 6 | Joan G. Stark |
| 31 | dog | animal, pet | Tan | 8 | Unknown |
| 32 | duck | animal, bird | DarkGray | 7 | Unknown |
| 33 | einstein | character, history | Silver | 9 | Joan G. Stark |
| 34 | electricGuitar | item, music | Red | 14 | Rowan Crawford |
| 35 | elephant | animal | Silver | 11 | Hamilton Furtado |
| 36 | error | message | Red | 4 | Unknown |
| 37 | flamingo | animal, bird | Pink | 13 | Unknown |
| 38 | flintstones | cartoon, character | DarkOrange | 11 | Unknown |
| 39 | floppyDisk | item, retro | DarkSlateGray | 10 | Robert Craggs |
| 40 | flower | nature, plant | Pink | 7 | Joan G. Stark |
| 41 | folder | item, retro | Orange | 7 | Joan G. Stark |
| 42 | fox | animal | DarkOrange | 9 | Unknown |
| 43 | frog | animal | SpringGreen | 6 | Unknown |
| 44 | frontDoor | item | Brown | 12 | Hayley Jane Wakenshaw |
| 45 | garfield | cartoon, character, pet | Orange | 12 | Joan G. Stark |
| 46 | gift | christmas, item | Red | 5 | Laura Brown |
| 47 | goldfish | animal, sea | Gold | 6 | Unknown |
| 48 | gun | item, weapon | Silver | 6 | Unknown |
| 49 | heart | symbol | Red | 5 | Bungle |
| 50 | hedgehog | animal | Tan | 5 | Unknown |
| 51 | hello | message | DeepSkyBlue | 4 | Unknown |
| 52 | helloWorld | message | DeepSkyBlue | 4 | Unknown |
| 53 | hippo | animal | DarkGray | 7 | Unknown |
| 54 | homer | cartoon, character | Gold | 14 | Unknown |
| 55 | hotAirBalloon | flying, vehicle | Red | 15 | Joan G. Stark |
| 56 | impossibleTriangle | symbol | Gold | 16 | Ojosh!ro |
| 57 | impossibleTrident | symbol | Gold | 15 | P.J. LaBrocca |
| 58 | info | message | DeepSkyBlue | 4 | Unknown |
| 59 | kermit | cartoon, character | SpringGreen | 13 | Joan G. Stark |
| 60 | key | item | Gold | 5 | Hayley Jane Wakenshaw |
| 61 | knight | character, medieval | Silver | 10 | Joan G. Stark |
| 62 | lightBulb | item | Goldenrod | 7 | Joan G. Stark |
| 63 | lion | animal | Peru | 13 | Joan G. Stark |
| 64 | loading | message | DeepSkyBlue | 4 | Unknown |
| 65 | mailbox | item | Red | 12 | Joan G. Stark |
| 66 | marbles | animal, pet | Brown | 10 | Unknown |
| 67 | marmot | animal | DarkGoldenrod | 12 | Hayley Jane Wakenshaw |
| 68 | maryPoppins | cartoon, character | Black | 17 | Unknown |
| 69 | monaLisa | art, character | Sienna | 17 | Unknown |
| 70 | monkey | animal | Brown | 12 | Joan G. Stark |
| 71 | mountain | christmas, nature | SlateGray | 9 | Unknown |
| 72 | mouse | animal, pet | Gray | 5 | Unknown |
| 73 | parrot | animal, bird, flying, pet | DodgerBlue | 16 | Unknown |
| 74 | pig | animal | Pink | 9 | Unknown |
| 75 | pinguin | animal, bird | Black | 6 | Unknown |
| 76 | pinkPanther | cartoon, character | Pink | 12 | Unknown |
| 77 | plane | flying, vehicle | Red | 8 | Joan G. Stark |
| 78 | production | message | LimeGreen | 4 | Unknown |
| 79 | r2d2 | character, space | Blue | 8 | snd |
| 80 | rain | nature, weather | DodgerBlue | 6 | Unknown |
| 81 | rainbow | nature, weather | MediumPurple | 6 | Brian T. Odom |
| 82 | robot | character, space | Blue | 14 | Joan G. Stark |
| 83 | rocket | space, vehicle | OrangeRed | 9 | Joan G. Stark |
| 84 | santaClaus | character, christmas | Red | 10 | B.D.S. "Don" McConnell |
| 85 | sherlockHolmes | character | MediumSeaGreen | 8 | Harry Mason |
| 86 | shield | item, medieval, weapon | Gold | 8 | Joan G. Stark |
| 87 | snail | animal | SeaGreen | 5 | Hayley Jane Wakenshaw |
| 88 | snoopy | cartoon, character | Black | 15 | Win Kang |
| 89 | sonic | character, video game | Blue | 9 | Unknown |
| 90 | spaceInvader | character, space, video game | Chartreuse | 8 | Unknown |
| 91 | squidward | cartoon, character | Gray | 15 | LGB |
| 92 | stage | message | DarkOrange | 4 | Unknown |
| 93 | stopSign | item | Red | 8 | Joan G. Stark |
| 94 | sword | item, medieval, weapon | Gold | 7 | Veronica Karlsson |
| 95 | teapot | drink, item | Sienna | 11 | Stephane Abello |
| 96 | teckel | animal, pet | Chocolate | 8 | Hayley Jane Wakenshaw |
| 97 | television | item, retro | SlateGray | 14 | Joan G. Stark |
| 98 | thumbsUp | symbol | Goldenrod | 7 | Sebastian Stöcker |
| 99 | tombstone | halloween, item | Gray | 5 | Hayley Jane Wakenshaw |
| 100 | turtle | animal | LimeGreen | 6 | Unknown |
| 101 | tweetieBird | bird, cartoon, character | Orange | 9 | Unknown |
| 102 | warning | message | DarkOrange | 4 | Unknown |
| 103 | wasp | animal, flying, insect | Yellow | 5 | Stef00 |
| 104 | welcome | message | DeepSkyBlue | 4 | Unknown |
| 105 | whale | animal, sea | RoyalBlue | 6 | Riitta Rasimus |
| 106 | yosemiteSam | cartoon, character | Red | 13 | Unknown |

## Credits

I didn't make the arts. At best, I just tweaked them. Here are the names of the authors (when I could find them):
  - B.D.S. "Don" McConnell
  - Brian T. Odom
  - Bungle
  - H.P. Barmario
  - Hamilton Furtado
  - Harry Mason
  - Hayley Jane Wakenshaw
  - Joan G. Stark
  - Laura Brown
  - LGB
  - Ojosh!ro
  - P.J. LaBrocca
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
  - Veronica Karlsson
  - Win Kang

## Files

- `build/ascii-printer.min.js` is the recommended file to use in a page. Current size: ~32.9 KB.
- `build/ascii-printer.js` is the readable build. Current size: ~36.6 KB.
- `demo/index.html` is the browser demo page.
- `demo/styles.css` contains the demo styling.
- `demo/main.js` contains the demo interactions.
- `source/ascii-printer-functions.js` contains the public API and internal helpers.
- `source/ascii-printer-lib.js` contains the ASCII library.
- `LICENSE` contains the code license.

The build files are generated manually, so update both `source` and `build` when changing the library or helpers.
Build sizes are approximate and will move as the catalog grows.

## Design choices

ASCII Printer keeps a tiny surface area: `AsciiPrinter` is the only global exposed by the script. Methods prefixed with `print` write to the console. Methods prefixed with `get` only return catalog data.

Printed ASCII uses monospace text and preserves whitespace so the art keeps its shape as much as the browser console allows.

## License

The JavaScript code is released under the MIT License. See `LICENSE`.

The ASCII arts are credited in this README when the author is known.
