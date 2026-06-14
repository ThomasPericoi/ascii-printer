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
AsciiPrinter.getById(18);
AsciiPrinter.getByName("pinkPanther");
AsciiPrinter.list("animal");
AsciiPrinter.listNames("animal");
AsciiPrinter.listTypes();
AsciiPrinter.version;
AsciiPrinter.catalog;
```

## Demo

Open `demo.html` in your browser, then open the console.

The demo page includes:

- the available public commands;
- copy-ready examples;
- the full ASCII catalog with ID, name, category, color, height, author, and `AsciiPrinter.printById(...)` command.

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

## API

| API | Description |
|---|---|
| `AsciiPrinter.version` | Returns the library version. |
| `AsciiPrinter.catalog` | Returns the full ASCII catalog. |
| `AsciiPrinter.getById()` | Returns one ASCII by ID without printing it. |
| `AsciiPrinter.getByName()` | Returns one ASCII by exact name without printing it. |
| `AsciiPrinter.listTypes()` | Returns the available categories. |
| `AsciiPrinter.listNames()` | Returns ASCII names, optionally filtered by category. |
| `AsciiPrinter.list()` | Returns ASCII metadata with `id`, `name`, and `category`, optionally filtered by category. |
| `AsciiPrinter.printById()` | Prints one ASCII by ID. |
| `AsciiPrinter.printByName()` | Prints one ASCII by exact name. |
| `AsciiPrinter.printBySearch()` | Prints the first ASCII whose name contains the search text. |
| `AsciiPrinter.printRandom()` | Prints a random ASCII, optionally filtered by category. |
| `AsciiPrinter.printRandomFrom()` | Prints a random ASCII from a list of names. |

## How does it work?

### Print By Name

**Input**

    AsciiPrinter.printByName("pinkPanther");

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

### Print By ID

**Input**

Useful if you want to create your own "random" list of arts for instance.

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

### Print Random

**Input**

    AsciiPrinter.printRandom();

Print a random ASCII from the full catalog, or narrow it down with a category:

    AsciiPrinter.printRandom("character");
    AsciiPrinter.printRandom("thing");
    AsciiPrinter.printRandom("banner");

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

### Print Random From

**Input**

Use `printRandomFrom()` when you want to choose the random pool yourself.

    AsciiPrinter.printRandomFrom(["heart", "key", "lightBulb"]);

This prints one random ASCII from the names you provide.

You can also pass print options:

    AsciiPrinter.printRandomFrom(["heart", "key"], { color: "Gold" });

If a name does not exist, it is ignored. If no provided names match the catalog, ASCII Printer prints a warning.

### Print by Search

**Input**

Useful when you remember part of a name, but not the exact camelCase spelling.

    AsciiPrinter.printBySearch("panther");

This prints the first ASCII whose name contains the search text.

### List available ASCII

**Input**

    AsciiPrinter.listTypes();

**Output**

    ["animal", "character", "thing", "banner"]

**Input**

    AsciiPrinter.listNames();

Or only one category:

    AsciiPrinter.listNames("animal");

Use `AsciiPrinter.list()` when you need the id, name, and category together:

    AsciiPrinter.list("banner");

**Output**

    [
      { id: 82, name: "dev", category: "banner" },
      { id: 83, name: "hello", category: "banner" }
    ]

### Get without printing

**Input**

    AsciiPrinter.getByName("frog");

This returns the ASCII object without writing anything to the console, in case you want to use the catalog data differently.

### Options

All print functions accept an optional options object.

**Custom color**

    AsciiPrinter.printByName("frog", { color: "HotPink" });

You can use any CSS color value supported by your browser console:

    AsciiPrinter.printByName("hello", { color: "rebeccapurple" });
    AsciiPrinter.printByName("bomb", { color: "#ff3355" });
    AsciiPrinter.printByName("gift", { color: "rgb(255, 180, 0)" });

CSS color values are documented on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value

**Credits**

    AsciiPrinter.printByName("frog", { credits: true });

**Options also work with random and search**

    AsciiPrinter.printRandom("character", { color: "Gold", credits: true });
    AsciiPrinter.printRandomFrom(["heart", "key"], { color: "Gold" });
    AsciiPrinter.printBySearch("bird", { color: "DodgerBlue" });

## What's inside?

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
| 34 | bender | character | Silver | 16 | Silver Saks |
| 35 | bigBird | character | Yellow | 16 | Unknown |
| 36 | cheshireCat | character | Violet | 6 | Randy Ransom |
| 37 | cookieMonster | character | Blue | 6 | Randy Ransom |
| 38 | devil | character | Red | 6 | Joan G. Stark |
| 39 | einstein | character | Silver | 9 | Joan G. Stark |
| 40 | flintstones | character | DarkOrange | 11 | Unknown |
| 41 | garfield | character | Orange | 12 | Joan G. Stark |
| 42 | homer | character | Gold | 14 | Unknown |
| 43 | kermit | character | SpringGreen | 13 | Joan G. Stark |
| 44 | knight | character | Silver | 10 | Joan G. Stark |
| 45 | maryPoppins | character | Black | 17 | Unknown |
| 46 | monaLisa | character | Sienna | 17 | Unknown |
| 47 | pinkPanther | character | Pink | 12 | Unknown |
| 48 | r2d2 | character | Blue | 8 | snd |
| 49 | robot | character | Blue | 14 | Joan G. Stark |
| 50 | santaClaus | character | Red | 10 | B.D.S. "Don" McConnell |
| 51 | sherlockHolmes | character | MediumSeaGreen | 8 | Harry Mason |
| 52 | snoopy | character | Black | 15 | Win Kang |
| 53 | sonic | character | Blue | 9 | Unknown |
| 54 | spaceInvader | character | Chartreuse | 8 | Unknown |
| 55 | squidward | character | Gray | 15 | LGB |
| 56 | tweetieBird | character | Orange | 9 | Unknown |
| 57 | yosemiteSam | character | Red | 13 | Unknown |
| 58 | alarm | thing | Chocolate | 10 | Joan G. Stark |
| 59 | anchor | thing | SlateGray | 10 | Joan G. Stark |
| 60 | axe | thing | SlateGray | 10 | Harry Mason |
| 61 | boat | thing | Aqua | 5 | Hayley Jane Wakenshaw |
| 62 | bomb | thing | DimGray | 14 | Joan G. Stark |
| 63 | book | thing | SaddleBrown | 10 | Joan G. Stark |
| 64 | cake | thing | Pink | 10 | Laura Brown |
| 65 | camera | thing | Gray | 10 | Joan G. Stark |
| 66 | crown | thing | Gold | 10 | Joan G. Stark |
| 67 | floppyDisk | thing | DarkSlateGray | 10 | Robert Craggs |
| 68 | gift | thing | Red | 5 | Laura Brown |
| 69 | gun | thing | Silver | 6 | Unknown |
| 70 | heart | thing | Red | 5 | Bungle |
| 71 | hotAirBalloon | thing | Red | 15 | Joan G. Stark |
| 72 | key | thing | Gold | 5 | Hayley Jane Wakenshaw |
| 73 | lightBulb | thing | Goldenrod | 7 | Joan G. Stark |
| 74 | mailbox | thing | Red | 12 | Joan G. Stark |
| 75 | plane | thing | Red | 8 | Joan G. Stark |
| 76 | rocket | thing | OrangeRed | 9 | Joan G. Stark |
| 77 | stopSign | thing | Red | 8 | Joan G. Stark |
| 78 | sword | thing | Gold | 7 | Veronica Karlsson |
| 79 | teapot | thing | Sienna | 11 | Stephane Abello |
| 80 | television | thing | Cornsilk | 8 | Ojoshiro |
| 81 | tombstone | thing | Gray | 5 | Hayley Jane Wakenshaw |
| 82 | dev | banner | MediumPurple | 5 | Unknown |
| 83 | hello | banner | DeepSkyBlue | 5 | Unknown |
| 84 | production | banner | LimeGreen | 5 | Unknown |
| 85 | staging | banner | DarkOrange | 5 | Unknown |
| 86 | welcome | banner | DeepSkyBlue | 5 | Unknown |

## Credits

I didn't make the arts. At best, I just tweaked them. Here are the names of the authors (when I could find them):
  - ASCII Printer
  - B.D.S. "Don" McConnell
  - Bungle
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

## License

The JavaScript code is released under the MIT License. See `LICENSE`.

The ASCII arts are credited in this README when the author is known.
