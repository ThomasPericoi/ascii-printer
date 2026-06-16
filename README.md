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
AsciiPrinter.printById(26);
AsciiPrinter.printByName("pinkPanther");
AsciiPrinter.printBySearch("panther");
AsciiPrinter.printRandom("character");
AsciiPrinter.printRandomFrom(["heart", "key", "lightBulb"]);
AsciiPrinter.list("animal");
AsciiPrinter.listNames("animal");
AsciiPrinter.listTypes();
AsciiPrinter.getById(18);
AsciiPrinter.getByName("pinkPanther");
AsciiPrinter.version;
AsciiPrinter.catalog;
```

## Demo

Open `demo.html` in your browser, then open the console.

The demo page includes:

- the available public commands;
- copy-ready examples;
- the full ASCII catalog with ID, name, category, color, height, author, and `AsciiPrinter.printById(...)` command.

## API

| API | Description |
|---|---|
| `AsciiPrinter.printById()` | Prints one ASCII by ID. |
| `AsciiPrinter.printByName()` | Prints one ASCII by exact name. |
| `AsciiPrinter.printBySearch()` | Prints the first ASCII whose name contains the search text. |
| `AsciiPrinter.printRandom()` | Prints a random ASCII, optionally filtered by category. |
| `AsciiPrinter.printRandomFrom()` | Prints a random ASCII from a list of names. |
| `AsciiPrinter.listTypes()` | Returns the available categories. |
| `AsciiPrinter.listNames()` | Returns ASCII names, optionally filtered by category. |
| `AsciiPrinter.list()` | Returns ASCII metadata with `id`, `name`, and `category`, optionally filtered by category. |
| `AsciiPrinter.getById()` | Returns one ASCII by ID without printing it. |
| `AsciiPrinter.getByName()` | Returns one ASCII by exact name without printing it. |
| `AsciiPrinter.version` | Returns the library version. |
| `AsciiPrinter.catalog` | Returns the full ASCII catalog. |

## How does it work?

### Print

Print methods write ASCII art to the browser console. They do not return catalog data.

#### `AsciiPrinter.printByName(name[, options])`

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

#### `AsciiPrinter.printById(id[, options])`

**Use**

Print one ASCII by catalog ID.

**Input**

    AsciiPrinter.printById(26);

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

#### `AsciiPrinter.printBySearch(query[, options])`

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

#### `AsciiPrinter.printRandom([category][, options])`

**Use**

Print one random ASCII from the full catalog, or from one category.

**Input**

    AsciiPrinter.printRandom();
    AsciiPrinter.printRandom("character");

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

#### `AsciiPrinter.printRandomFrom(names[, options])`

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

#### Print Options

All print methods accept the same optional `options` object.

**Input**

    AsciiPrinter.printByName("frog", { color: "HotPink" });
    AsciiPrinter.printByName("frog", { credits: true });
    AsciiPrinter.printRandom("character", { color: "Gold", credits: true });
    AsciiPrinter.printRandomFrom(["heart", "key"], { color: "Gold" });
    AsciiPrinter.printBySearch("bird", { color: "DodgerBlue" });

**Options**

| Option | Description |
|---|---|
| `color` | Overrides the catalog color with any CSS color value supported by your browser console. |
| `credits` | Prints the ASCII author after the art. Unknown authors are displayed as `Unknown`. |

CSS color values are documented on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value

### List

List methods return catalog summaries without printing ASCII art.

#### `AsciiPrinter.listTypes()`

**Use**

Return the available categories.

**Input**

    AsciiPrinter.listTypes();

**Output**

    ["animal", "character", "thing", "banner"]

#### `AsciiPrinter.listNames([category])`

**Use**

Return ASCII names from the full catalog, or from one category.

**Input**

    AsciiPrinter.listNames();
    AsciiPrinter.listNames("animal");

**Output**

    ["anteater", "armadillo", "bat", "..."]

#### `AsciiPrinter.list([category])`

**Use**

Return ASCII metadata with `id`, `name`, and `category`.

**Input**

    AsciiPrinter.list("banner");

**Output**

    [
      { id: 86, name: "dev", category: "banner" },
      { id: 87, name: "error", category: "banner" },
      { id: 88, name: "hello", category: "banner" }
    ]

### Get

Get methods return full ASCII objects without printing ASCII art.

#### `AsciiPrinter.getByName(name)`

**Use**

Return one ASCII object by exact name.

**Input**

    AsciiPrinter.getByName("frog");

**Output**

    {
      type: "animal",
      name: "frog",
      art: "...",
      color: "SpringGreen",
      height: 6,
      author: ""
    }

#### `AsciiPrinter.getById(id)`

**Use**

Return one ASCII object by catalog ID.

**Input**

    AsciiPrinter.getById(17);

**Output**

    {
      type: "animal",
      name: "frog",
      art: "...",
      color: "SpringGreen",
      height: 6,
      author: ""
    }

## Catalog

| ID | Name | Category | Color | Height | Author |
|---:|---|---|---|---:|---|
| 0 | anteater | animal | LightSlateGray | 7 | Veronica Karlsson |
| 1 | armadillo | animal | RosyBrown | 7 | Seal do Mar |
| 2 | bat | animal | DimGray | 7 | Joan G. Stark |
| 3 | bear | animal | Brown | 10 | Joan G. Stark |
| 4 | bees | animal | Goldenrod | 9 | Joan G. Stark |
| 5 | beaver | animal | DarkGoldenrod | 7 | Joan G. Stark |
| 6 | bug | animal | DarkGoldenrod | 6 | Unknown |
| 7 | cat | animal | DarkSlateGrey | 12 | Unknown |
| 8 | caterpillar | animal | Green | 3 | Joan G. Stark |
| 9 | crab | animal | Red | 8 | Unknown |
| 10 | crocodile | animal | OliveDrab | 9 | Shanaka Dias |
| 11 | deer | animal | Tan | 15 | Unknown |
| 12 | dog | animal | Tan | 8 | Unknown |
| 13 | duck | animal | DarkGray | 7 | Unknown |
| 14 | elephant | animal | Silver | 11 | Hamilton Furtado |
| 15 | flamingo | animal | Pink | 13 | Unknown |
| 16 | fox | animal | DarkOrange | 9 | Unknown |
| 17 | frog | animal | SpringGreen | 6 | Unknown |
| 18 | goldfish | animal | Gold | 6 | Unknown |
| 19 | hippo | animal | DarkGray | 7 | Unknown |
| 20 | hedgehog | animal | Tan | 5 | Unknown |
| 21 | lion | animal | Peru | 13 | Joan G. Stark |
| 22 | marbles | animal | Brown | 10 | Unknown |
| 23 | marmot | animal | DarkGoldenrod | 12 | Hayley Jane Wakenshaw |
| 24 | monkey | animal | Brown | 12 | Joan G. Stark |
| 25 | mouse | animal | Gray | 5 | Unknown |
| 26 | parrot | animal | DodgerBlue | 16 | Unknown |
| 27 | pig | animal | Pink | 9 | Unknown |
| 28 | pinguin | animal | Black | 6 | Unknown |
| 29 | snail | animal | SeaGreen | 5 | Hayley Jane Wakenshaw |
| 30 | teckel | animal | Chocolate | 8 | Hayley Jane Wakenshaw |
| 31 | turtle | animal | LimeGreen | 6 | Unknown |
| 32 | wasp | animal | Yellow | 5 | Stef00 |
| 33 | whale | animal | RoyalBlue | 6 | Riitta Rasimus |
| 34 | alien | character | Green | 9 | Joan G. Stark |
| 35 | bender | character | Silver | 16 | Silver Saks |
| 36 | bigBird | character | Yellow | 16 | Unknown |
| 37 | cheshireCat | character | Violet | 6 | Randy Ransom |
| 38 | cookieMonster | character | Blue | 6 | Randy Ransom |
| 39 | devil | character | Red | 6 | Joan G. Stark |
| 40 | einstein | character | Silver | 9 | Joan G. Stark |
| 41 | flintstones | character | DarkOrange | 11 | Unknown |
| 42 | garfield | character | Orange | 12 | Joan G. Stark |
| 43 | homer | character | Gold | 14 | Unknown |
| 44 | kermit | character | SpringGreen | 13 | Joan G. Stark |
| 45 | knight | character | Silver | 10 | Joan G. Stark |
| 46 | maryPoppins | character | Black | 17 | Unknown |
| 47 | monaLisa | character | Sienna | 17 | Unknown |
| 48 | pinkPanther | character | Pink | 12 | Unknown |
| 49 | r2d2 | character | Blue | 8 | snd |
| 50 | robot | character | Blue | 14 | Joan G. Stark |
| 51 | santaClaus | character | Red | 10 | B.D.S. "Don" McConnell |
| 52 | sherlockHolmes | character | MediumSeaGreen | 8 | Harry Mason |
| 53 | snoopy | character | Black | 15 | Win Kang |
| 54 | sonic | character | Blue | 9 | Unknown |
| 55 | spaceInvader | character | Chartreuse | 8 | Unknown |
| 56 | squidward | character | Gray | 15 | LGB |
| 57 | tweetieBird | character | Orange | 9 | Unknown |
| 58 | yosemiteSam | character | Red | 13 | Unknown |
| 59 | alarm | thing | Chocolate | 10 | Joan G. Stark |
| 60 | anchor | thing | SlateGray | 10 | Joan G. Stark |
| 61 | axe | thing | SlateGray | 10 | Harry Mason |
| 62 | boat | thing | Aqua | 5 | Hayley Jane Wakenshaw |
| 63 | bomb | thing | DimGray | 14 | Joan G. Stark |
| 64 | book | thing | SaddleBrown | 10 | Joan G. Stark |
| 65 | cake | thing | Pink | 10 | Laura Brown |
| 66 | camera | thing | Gray | 10 | Joan G. Stark |
| 67 | coffee | thing | Brown | 9 | H.P. Barmario |
| 68 | crown | thing | Gold | 10 | Joan G. Stark |
| 69 | floppyDisk | thing | DarkSlateGray | 10 | Robert Craggs |
| 70 | flower | thing | Pink | 7 | Joan G. Stark |
| 71 | folder | thing | Orange | 7 | Joan G. Stark |
| 72 | gift | thing | Red | 5 | Laura Brown |
| 73 | gun | thing | Silver | 6 | Unknown |
| 74 | heart | thing | Red | 5 | Bungle |
| 75 | hotAirBalloon | thing | Red | 15 | Joan G. Stark |
| 76 | key | thing | Gold | 5 | Hayley Jane Wakenshaw |
| 77 | lightBulb | thing | Goldenrod | 7 | Joan G. Stark |
| 78 | mailbox | thing | Red | 12 | Joan G. Stark |
| 79 | plane | thing | Red | 8 | Joan G. Stark |
| 80 | rocket | thing | OrangeRed | 9 | Joan G. Stark |
| 81 | stopSign | thing | Red | 8 | Joan G. Stark |
| 82 | sword | thing | Gold | 7 | Veronica Karlsson |
| 83 | teapot | thing | Sienna | 11 | Stephane Abello |
| 84 | television | thing | Cornsilk | 8 | Ojoshiro |
| 85 | tombstone | thing | Gray | 5 | Hayley Jane Wakenshaw |
| 86 | dev | banner | MediumPurple | 4 | Unknown |
| 87 | error | banner | Red | 4 | Unknown |
| 88 | hello | banner | DeepSkyBlue | 4 | Unknown |
| 89 | production | banner | LimeGreen | 4 | Unknown |
| 90 | stage | banner | DarkOrange | 4 | Unknown |
| 91 | welcome | banner | DeepSkyBlue | 4 | Unknown |

## Credits

I didn't make the arts. At best, I just tweaked them. Here are the names of the authors (when I could find them):
  - B.D.S. "Don" McConnell
  - Bungle
  - H.P. Barmario
  - Hamilton Furtado
  - Harry Mason
  - Hayley Jane Wakenshaw
  - Joan G. Stark
  - Laura Brown
  - LGB
  - Ojoshiro
  - Randy Ransom
  - Riitta Rasimus
  - Robert Craggs
  - Seal do Mar
  - Shanaka Dias
  - Silver Saks
  - snd
  - Stef00
  - Stephane Abello
  - Veronica Karlsson
  - Win Kang

## Files

- `build/ascii-printer.min.js` is the recommended file to use in a page.
- `build/ascii-printer.js` is the readable build.
- `demo.html` is the browser demo page.
- `source/ascii-printer-functions.js` contains the public API and internal helpers.
- `source/ascii-printer-lib.js` contains the ASCII library.
- `LICENSE` contains the code license.

The build files are generated manually, so update both `source` and `build` when changing the library or helpers.

## Design choices

ASCII Printer keeps a tiny surface area: `AsciiPrinter` is the only global exposed by the script. Methods prefixed with `print` write to the console. Methods prefixed with `get` only return catalog data.

## License

The JavaScript code is released under the MIT License. See `LICENSE`.

The ASCII arts are credited in this README when the author is known.
