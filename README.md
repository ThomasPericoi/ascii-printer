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
AsciiPrinter.printById(18);
AsciiPrinter.printByName("pinkPanther");
AsciiPrinter.printBySearch("panther");
AsciiPrinter.printRandom("character");
AsciiPrinter.getById(18);
AsciiPrinter.getByName("pinkPanther");
AsciiPrinter.list("animal");
AsciiPrinter.listNames("animal");
AsciiPrinter.listTypes();
AsciiPrinter.version;
AsciiPrinter.catalog;
```

`AsciiPrinter` is the only public API exposed by the script.

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

## How does it work?

### By Name

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

### By ID

**Input**

Useful if you want to create your own "random" list of arts for instance.

    AsciiPrinter.printById(18);

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

### Randomly

**Input**

    AsciiPrinter.printRandom();

Or by narrowing it down with a category.

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

### Search

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
      { id: 69, name: "dev", category: "banner" },
      { id: 70, name: "hello", category: "banner" }
    ]

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
    AsciiPrinter.printBySearch("bird", { color: "DodgerBlue" });

### Get without printing

**Input**

    AsciiPrinter.getByName("frog");

This returns the ASCII object without writing anything to the console.

### Console things and banners

The library also includes a few utility ASCII arts for console messages.

**Thing examples**

    AsciiPrinter.printByName("bomb");
    AsciiPrinter.printByName("gift");
    AsciiPrinter.printByName("rocket");

**Banner examples**

    AsciiPrinter.printByName("dev");
    AsciiPrinter.printByName("hello");
    AsciiPrinter.printByName("production");
    AsciiPrinter.printByName("staging");
    AsciiPrinter.printByName("welcome");

## What's inside?

| ID | Name | Category | Color | Height | Author |
|---:|---|---|---|---:|---|
| 0 | anteater | animal | LightSlateGray | 7 | Veronica Karlsson |
| 1 | armadillo | animal | RosyBrown | 7 | Seal do Mar |
| 2 | bat | animal | DimGray | 7 | Joan G. Stark |
| 3 | bear | animal | Brown | 10 | Joan G. Stark |
| 4 | bees | animal | Goldenrod | 9 | Joan G. Stark |
| 5 | beaver | animal | DarkGoldenrod | 7 | Joan G. Stark |
| 6 | cat | animal | DarkSlateGrey | 12 | Unknown |
| 7 | caterpillar | animal | Green | 3 | Joan G. Stark |
| 8 | crab | animal | Red | 8 | Unknown |
| 9 | crocodile | animal | OliveDrab | 9 | Shanaka Dias |
| 10 | deer | animal | Tan | 15 | Unknown |
| 11 | dog | animal | Tan | 8 | Unknown |
| 12 | duck | animal | DarkGray | 7 | Unknown |
| 13 | elephant | animal | Silver | 11 | Hamilton Furtado |
| 14 | flamingo | animal | Pink | 13 | Unknown |
| 15 | fox | animal | DarkOrange | 9 | Unknown |
| 16 | frog | animal | SpringGreen | 6 | Unknown |
| 17 | goldfish | animal | Gold | 6 | Unknown |
| 18 | hippo | animal | DarkGray | 7 | Unknown |
| 19 | hedgehog | animal | Tan | 5 | Unknown |
| 20 | lion | animal | Peru | 13 | Joan G. Stark |
| 21 | marbles | animal | Brown | 10 | Unknown |
| 22 | marmot | animal | DarkGoldenrod | 12 | Hayley Jane Wakenshaw |
| 23 | monkey | animal | Brown | 12 | Joan G. Stark |
| 24 | mouse | animal | Gray | 5 | Unknown |
| 25 | parrot | animal | DodgerBlue | 16 | Unknown |
| 26 | pig | animal | Pink | 9 | Unknown |
| 27 | pinguin | animal | Black | 6 | Unknown |
| 28 | snail | animal | SeaGreen | 5 | Hayley Jane Wakenshaw |
| 29 | teckel | animal | Chocolate | 8 | Hayley Jane Wakenshaw |
| 30 | turtle | animal | LimeGreen | 6 | Unknown |
| 31 | wasp | animal | Yellow | 5 | Stef00 |
| 32 | whale | animal | RoyalBlue | 6 | Riitta Rasimus |
| 33 | bender | character | Silver | 16 | Silver Saks |
| 34 | bigBird | character | Yellow | 16 | Unknown |
| 35 | cheshireCat | character | Violet | 6 | Randy Ransom |
| 36 | cookieMonster | character | Blue | 6 | Randy Ransom |
| 37 | devil | character | Red | 6 | Joan G. Stark |
| 38 | einstein | character | Silver | 9 | Joan G. Stark |
| 39 | flintstones | character | DarkOrange | 11 | Unknown |
| 40 | garfield | character | Orange | 12 | Joan G. Stark |
| 41 | homer | character | Gold | 14 | Unknown |
| 42 | kermit | character | SpringGreen | 13 | Joan G. Stark |
| 43 | maryPoppins | character | Black | 17 | Unknown |
| 44 | monaLisa | character | Sienna | 17 | Unknown |
| 45 | pinkPanther | character | Pink | 12 | Unknown |
| 46 | r2d2 | character | Blue | 8 | snd |
| 47 | santaClaus | character | Red | 10 | B.D.S. "Don" McConnell |
| 48 | sherlockHolmes | character | MediumSeaGreen | 8 | Harry Mason |
| 49 | snoopy | character | Black | 15 | Win Kang |
| 50 | sonic | character | Blue | 9 | Unknown |
| 51 | spaceInvader | character | Chartreuse | 8 | Unknown |
| 52 | squidward | character | Gray | 15 | LGB |
| 53 | tweetieBird | character | Orange | 9 | Unknown |
| 54 | yosemiteSam | character | Red | 13 | Unknown |
| 55 | alarm | thing | Chocolate | 10 | Joan G. Stark |
| 56 | boat | thing | Aqua | 5 | Hayley Jane Wakenshaw |
| 57 | bomb | thing | DimGray | 14 | Joan G. Stark |
| 58 | book | thing | SaddleBrown | 10 | Joan G. Stark |
| 59 | cake | thing | Pink | 10 | Laura Brown |
| 60 | camera | thing | Gray | 10 | Joan G. Stark |
| 61 | crown | thing | Gold | 10 | Joan G. Stark |
| 62 | floppyDisk | thing | DarkSlateGray | 10 | Robert Craggs |
| 63 | gift | thing | Red | 5 | Laura Brown |
| 64 | plane | thing | Red | 8 | Joan G. Stark |
| 65 | rocket | thing | OrangeRed | 9 | Joan G. Stark |
| 66 | teapot | thing | Sienna | 11 | Stephane Abello |
| 67 | television | thing | Cornsilk | 8 | Ojoshiro |
| 68 | tombstone | thing | Gray | 5 | Hayley Jane Wakenshaw |
| 69 | dev | banner | MediumPurple | 5 | Unknown |
| 70 | hello | banner | DeepSkyBlue | 5 | ASCII Printer |
| 71 | production | banner | LimeGreen | 5 | Unknown |
| 72 | staging | banner | DarkOrange | 5 | Unknown |
| 73 | welcome | banner | DeepSkyBlue | 5 | Unknown |

## Credits

I didn't make the arts. At best, I just tweaked them. Here are the names of the authors (when I could find them):
  - ASCII Printer
  - B.D.S. "Don" McConnell
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
  
**PS:** Again, I didn't make those arts, I just found them. When I could, I put the talented author in the library.

**PPS:** Everything comes with colors!

## Release notes

### v1.0.0

First stable release of ASCII Printer.

- 74 ASCII arts.
- Category, name, and ID listing helpers.
- Random printing by category.
- Search by partial name.
- Color override support.
- Optional credits display.
- Browser demo page.

## License

The JavaScript code is released under the MIT License. See `LICENSE`.

The ASCII arts are credited in this README when the author is known.
