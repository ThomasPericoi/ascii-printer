/*____________________________________ USEFOOL FUNCTIONS (really light) ____________________________________*/

function getRandomIdFromArray(arrayName) {
  // Output
  return Math.floor(Math.random() * arrayName.length);
}

function getRandomValueFromArray(arrayName) {
  // Output
  return arrayName[getRandomIdFromArray(arrayName)];
}

/*____________________________________ ASCIIS FUNCTIONS ____________________________________*/

function printAsciiById(asciiId) {
  const ascii = asciis[asciiId];

  if (!ascii) {
    console.warn(`ASCII not found for id: ${asciiId}`);
    return null;
  }

  // Output
  console.log(
    `%c${ascii.art}`,
    `color: ${ascii.color}; font-family: monospace;`
  );
}

function printAsciiByName(asciiName) {
  // Process
  const selectedAscii = asciis.findIndex((ascii) => ascii.name === asciiName); // Select ascii according the name

  if (selectedAscii === -1) {
    console.warn(`ASCII not found for name: ${asciiName}`);
    return null;
  }

  // Output
  printAsciiById(selectedAscii);
}

function printRandomAscii(criteria = "all") {
  // Process
  var selectedAsciis = asciis.filter((ascii) => ascii.type === criteria); // Select the asciis matching the criteria
  selectedAsciis.length < 1 && (selectedAsciis = Object.values(asciis)); // If empty or nothing is matching, select them all
  const randomAscii = getRandomValueFromArray(selectedAsciis);
  // Output
  printAsciiByName(randomAscii.name);
}
