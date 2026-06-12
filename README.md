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

Then open your browser console and call one of the helpers:

```js
printAsciiById(18);
printAsciiByName("pinkPanther");
printAsciiSearch("panther");
printRandomAscii("character");
listAsciis("animal");
listAsciiNames("animal");
listAsciiTypes();
```

## Demo

Open `source/demo.html` in your browser, then open the console.

The demo page includes:

- the available public commands;
- copy-ready examples;
- the full ASCII catalog with ID, name, category, color, and `printAsciiById(...)` command.

## Files

- `build/ascii-printer.min.js` is the recommended file to use in a page.
- `build/ascii-printer.js` is the readable build.
- `source/demo.html` is the browser demo page.
- `source/ascii-printer-functions.js` contains the public helper functions.
- `source/ascii-printer-lib.js` contains the ASCII library.
- `LICENSE` contains the code license.

The build files are generated manually, so update both `source` and `build` when changing the library or helpers.

## API

| Function | Description |
|---|---|
| `listAsciiTypes()` | Returns the available categories. |
| `listAsciiNames()` | Returns ASCII names, optionally filtered by category. |
| `listAsciis()` | Returns ASCII metadata with `id`, `name`, and `category`, optionally filtered by category. |
| `printAsciiById()` | Prints one ASCII by ID. |
| `printAsciiByName()` | Prints one ASCII by exact name. |
| `printAsciiSearch()` | Prints the first ASCII whose name contains the search text. |
| `printRandomAscii()` | Prints a random ASCII, optionally filtered by category. |

## How does it work?

### By Name

**Input**

    printAsciiByName("pinkPanther");

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

    printAsciiById(18);

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

    printRandomAscii();

Or by narrowing it down with a category.

    printRandomAscii("character");
    printRandomAscii("thing");
    printRandomAscii("banner");

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

    printAsciiSearch("panther");

This prints the first ASCII whose name contains the search text.

### List available ASCII

**Input**

    listAsciiTypes();

**Output**

    ["animal", "character", "thing", "banner"]

**Input**

    listAsciiNames();

Or only one category:

    listAsciiNames("animal");

Use `listAsciis()` when you need the id, name, and category together:

    listAsciis("banner");

**Output**

    [
      { id: 63, name: "dev", category: "banner" },
      { id: 64, name: "hello", category: "banner" }
    ]

### Options

All print functions accept an optional options object.

**Custom color**

    printAsciiByName("frog", { color: "HotPink" });

You can use any CSS color value supported by your browser console:

    printAsciiByName("hello", { color: "rebeccapurple" });
    printAsciiByName("bomb", { color: "#ff3355" });
    printAsciiByName("gift", { color: "rgb(255, 180, 0)" });

CSS color values are documented on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value

**Credits**

    printAsciiByName("frog", { credits: true });

**Options also work with random and search**

    printRandomAscii("character", { color: "Gold", credits: true });
    printAsciiSearch("bird", { color: "DodgerBlue" });

### Console things and banners

The library also includes a few utility ASCII arts for console messages.

**Thing examples**

    printAsciiByName("bomb");
    printAsciiByName("gift");
    printAsciiByName("rocket");

**Banner examples**

    printAsciiByName("dev");
    printAsciiByName("hello");
    printAsciiByName("production");
    printAsciiByName("staging");
    printAsciiByName("welcome");

## What's inside?

| ID | Name | Category | Color |
|---:|---|---|---|
| 0 | anteater | animal | LightSlateGray |
| 1 | armadillo | animal | RosyBrown |
| 2 | bat | animal | DimGray |
| 3 | bear | animal | Brown |
| 4 | bees | animal | Goldenrod |
| 5 | beaver | animal | DarkGoldenrod |
| 6 | cat | animal | DarkSlateGrey |
| 7 | caterpillar | animal | Green |
| 8 | crab | animal | Red |
| 9 | crocodile | animal | OliveDrab |
| 10 | deer | animal | Tan |
| 11 | dog | animal | Tan |
| 12 | duck | animal | DarkGray |
| 13 | elephant | animal | Silver |
| 14 | flamingo | animal | Pink |
| 15 | fox | animal | DarkOrange |
| 16 | frog | animal | SpringGreen |
| 17 | goldfish | animal | Gold |
| 18 | hippo | animal | DarkGray |
| 19 | hedgehog | animal | Tan |
| 20 | lion | animal | Peru |
| 21 | marbles | animal | Brown |
| 22 | marmot | animal | DarkGoldenrod |
| 23 | monkey | animal | Brown |
| 24 | mouse | animal | Gray |
| 25 | parrot | animal | DodgerBlue |
| 26 | pig | animal | Pink |
| 27 | pinguin | animal | Black |
| 28 | snail | animal | SeaGreen |
| 29 | teckel | animal | Chocolate |
| 30 | turtle | animal | LimeGreen |
| 31 | wasp | animal | Yellow |
| 32 | whale | animal | RoyalBlue |
| 33 | bender | character | Silver |
| 34 | bigBird | character | Yellow |
| 35 | cheshireCat | character | Violet |
| 36 | cookieMonster | character | Blue |
| 37 | devil | character | Red |
| 38 | einstein | character | Silver |
| 39 | flintstones | character | DarkOrange |
| 40 | garfield | character | Orange |
| 41 | homer | character | Gold |
| 42 | kermit | character | SpringGreen |
| 43 | maryPoppins | character | Black |
| 44 | monaLisa | character | Sienna |
| 45 | pinkPanther | character | Pink |
| 46 | r2d2 | character | Blue |
| 47 | santaClaus | character | Red |
| 48 | sherlockHolmes | character | MediumSeaGreen |
| 49 | snoopy | character | Black |
| 50 | sonic | character | Blue |
| 51 | spaceInvader | character | Chartreuse |
| 52 | squidward | character | Gray |
| 53 | tweetieBird | character | Orange |
| 54 | yosemiteSam | character | Red |
| 55 | alarm | thing | Chocolate |
| 56 | boat | thing | Aqua |
| 57 | bomb | thing | DimGray |
| 58 | book | thing | SaddleBrown |
| 59 | camera | thing | Gray |
| 60 | crown | thing | Gold |
| 61 | floppyDisk | thing | DarkSlateGray |
| 62 | gift | thing | Red |
| 63 | plane | thing | Red |
| 64 | rocket | thing | OrangeRed |
| 65 | television | thing | Cornsilk |
| 66 | tombstone | thing | Gray |
| 67 | dev | banner | MediumPurple |
| 68 | hello | banner | DeepSkyBlue |
| 69 | production | banner | LimeGreen |
| 70 | staging | banner | DarkOrange |
| 71 | welcome | banner | DeepSkyBlue |

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
  - Veronica Karlsson
  - Win Kang
  
**PS:** Again, I didn't make those arts, I just found them. When I could, I put the talented author in the library.

**PPS:** Everything comes with colors!

## Release notes

### v1.0.0

First stable release of ASCII Printer.

- 72 ASCII arts.
- Category, name, and ID listing helpers.
- Random printing by category.
- Search by partial name.
- Color override support.
- Optional credits display.
- Browser demo page.

## License

The JavaScript code is released under the MIT License. See `LICENSE`.

The ASCII arts are credited in this README when the author is known.
