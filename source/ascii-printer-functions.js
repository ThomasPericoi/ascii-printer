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
  // Output
  console.log(
    `%c${asciis[asciiId].art}`,
    `color: ${asciis[asciiId].color}; font-family: monospace;`
  );
}

function printAsciiByName(asciiName) {
  // Process
  selectedAscii = asciis.findIndex((ascii) => ascii.name === asciiName); // Select ascii according the name
  // Output
  printAsciiById(selectedAscii);
}

function printRandomAscii(criteria = "all") {
  // Process
  var selectedAsciis = asciis.filter((ascii) => ascii.type === criteria); // Select the asciis matching the criteria
  selectedAsciis.length < 1 && (selectedAsciis = Object.values(asciis)); // If empty or nothing is matching, select them all
  randomAscii = getRandomValueFromArray(selectedAsciis);
  // Output
  printAsciiByName(randomAscii.name);
}
