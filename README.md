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
printAsciiByName("pinkPanther");
printAsciiById(18);
printRandomAscii("character");
printAsciiSearch("panther");
listAsciiNames("animal");
```

## Files

- `build/ascii-printer.min.js` is the recommended file to use in a page.
- `build/ascii-printer.js` is the readable build.
- `source/ascii-printer-functions.js` contains the public helper functions.
- `source/ascii-printer-lib.js` contains the ASCII library.

The build files are generated manually, so update both `source` and `build` when changing the library or helpers.

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

- **Type:** Animals (animal)

  - anteater
  - armadillo
  - bat
  - bear
  - beaver
  - cat
  - caterpillar
  - crab
  - deer
  - dog
  - duck
  - elephant
  - flamingo
  - fox
  - frog
  - goldfish
  - hedgehog
  - hippo
  - lion
  - marbles
  - marmot
  - monkey
  - mouse
  - parrot
  - pig
  - pinguin
  - snail
  - teckel
  - turtle
  - wasp
  - whale

- **Type:** Characters (character)
  - bender
  - bigBird
  - cheshireCat
  - cookieMonster
  - devil
  - einstein
  - flintstones
  - garfield
  - homer
  - kermit
  - maryPoppins
  - monaLisa
  - pinkPanther
  - r2d2
  - santaClaus
  - sherlockHolmes
  - sonic
  - spaceInvader
  - squidward
  - tweetieBird
  - yosemiteSam

- **Type:** Things (thing)
  - alarm
  - boat
  - bomb
  - camera
  - crown
  - floppyDisk
  - gift
  - plane
  - rocket
  - television
  - tombstone

- **Type:** Banners (banner)
  - dev
  - hello
  - production
  - staging
  - welcome

## Credits

I didn't make the arts. At best, I just tweaked them. Here are the names of the authors (when I could find them):
  - B.D.S. "Don"McConnell
  - Hamilton Furtado
  - Harry Mason (hjm)
  - Hayley Jane Wakenshaw (hjw)
  - Joan G. Stark (jgs)
  - Ojoshiro
  - Laura Brown
  - LGB
  - Randy Ransom
  - Riitta Rasimus
  - Robert Craggs
  - Seal do Mar
  - Silver Saks
  - snd
  - Stef00
  - Veronica Karlsson
  
**PS:** Again, I didn't make those arts, I just found them. When I could, I put the talented author in the library.

**PPS:** Everything comes with colors!
