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

function getAsciiStyle(ascii, options = {}) {
  const color = options.color || ascii.color;

  return `color: ${color}; font-family: monospace;`;
}

function printAsciiCredit(ascii, options = {}) {
  if (options.credits && ascii.author) {
    console.log(`ASCII by ${ascii.author}`);
  }
}

function listAsciiTypes() {
  return [...new Set(asciis.map((ascii) => ascii.type))];
}

function listAsciiNames(criteria = "all") {
  const selectedAsciis =
    criteria === "all"
      ? asciis
      : asciis.filter((ascii) => ascii.type === criteria);

  return selectedAsciis.map((ascii) => ascii.name);
}

function printAsciiById(asciiId, options = {}) {
  const ascii = asciis[asciiId];

  if (!ascii) {
    console.warn(`ASCII not found for id: ${asciiId}`);
    return null;
  }

  // Output
  console.log(
    `%c${ascii.art}`,
    getAsciiStyle(ascii, options)
  );
  printAsciiCredit(ascii, options);
}

function printAsciiByName(asciiName, options = {}) {
  // Process
  const selectedAscii = asciis.findIndex((ascii) => ascii.name === asciiName); // Select ascii according the name

  if (selectedAscii === -1) {
    console.warn(`ASCII not found for name: ${asciiName}`);
    return null;
  }

  // Output
  printAsciiById(selectedAscii, options);
}

function printAsciiSearch(query, options = {}) {
  const normalizedQuery = query.toLowerCase();
  const selectedAscii = asciis.find((ascii) =>
    ascii.name.toLowerCase().includes(normalizedQuery)
  );

  if (!selectedAscii) {
    console.warn(`ASCII not found for search: ${query}`);
    return null;
  }

  printAsciiByName(selectedAscii.name, options);
}

function printRandomAscii(criteria = "all", options = {}) {
  // Process
  var selectedAsciis = asciis.filter((ascii) => ascii.type === criteria); // Select the asciis matching the criteria
  selectedAsciis.length < 1 && (selectedAsciis = Object.values(asciis)); // If empty or nothing is matching, select them all
  const randomAscii = getRandomValueFromArray(selectedAsciis);
  // Output
  printAsciiByName(randomAscii.name, options);
}
