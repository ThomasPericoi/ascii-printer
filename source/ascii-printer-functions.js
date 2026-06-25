(function (global) {
var ASCII_PRINTER_VERSION = "1.1.0";

/*____________________________________ UTILITY FUNCTIONS ____________________________________*/

function getRandomIdFromArray(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomValueFromArray(array) {
  return array[getRandomIdFromArray(array)];
}

/*____________________________________ ASCII FUNCTIONS ____________________________________*/

function getAsciiById(asciiId) {
  return asciis[asciiId] || null;
}

function getAsciiByName(asciiName) {
  return asciis.find((ascii) => ascii.name === asciiName) || null;
}

function getAsciiStyle(ascii, options = {}) {
  const styles = [
    "font-family: monospace;",
    "white-space: pre;",
  ];

  if (options.color !== false) {
    styles.unshift(`color: ${options.color || ascii.color};`);
  }

  return styles.join(" ");
}

function listAsciiTypes() {
  const preferredOrder = ["animal", "character", "thing", "message"];
  const types = [...new Set(asciis.map((ascii) => ascii.type))];

  return types.sort((firstType, secondType) => {
    const firstIndex = preferredOrder.indexOf(firstType);
    const secondIndex = preferredOrder.indexOf(secondType);

    if (firstIndex === -1 && secondIndex === -1) {
      return firstType.localeCompare(secondType);
    }

    if (firstIndex === -1) {
      return 1;
    }

    if (secondIndex === -1) {
      return -1;
    }

    return firstIndex - secondIndex;
  });
}

function listAsciiNames(category = "all") {
  const selectedAsciis =
    category === "all"
      ? asciis
      : asciis.filter((ascii) => ascii.type === category);

  return selectedAsciis.map((ascii) => ascii.name);
}

function listAsciis(category = "all") {
  return asciis
    .map((ascii, id) => ({
      id,
      name: ascii.name,
      category: ascii.type,
    }))
    .filter((ascii) => category === "all" || ascii.category === category);
}

function printAsciiCredit(ascii, options = {}) {
  if (options.credits) {
    console.log(`ASCII by ${ascii.author || "Unknown"}`);
  }
}

function printAsciiById(asciiId, options = {}) {
  const ascii = getAsciiById(asciiId);

  if (!ascii) {
    console.warn(`ASCII not found for id: ${asciiId}`);
    return;
  }

  console.log(
    `%c${ascii.art}`,
    getAsciiStyle(ascii, options)
  );
  printAsciiCredit(ascii, options);
}

function printAsciiByName(asciiName, options = {}) {
  const ascii = getAsciiByName(asciiName);

  if (!ascii) {
    console.warn(`ASCII not found for name: ${asciiName}`);
    return;
  }

  console.log(
    `%c${ascii.art}`,
    getAsciiStyle(ascii, options)
  );
  printAsciiCredit(ascii, options);
}

function printAsciiSearch(query, options = {}) {
  const normalizedQuery = query.toLowerCase();
  const selectedAscii = asciis.find((ascii) =>
    ascii.name.toLowerCase().includes(normalizedQuery)
  );

  if (!selectedAscii) {
    console.warn(`ASCII not found for search: ${query}`);
    return;
  }

  printAsciiByName(selectedAscii.name, options);
}

function printRandomAscii(category = "all", options = {}) {
  var selectedAsciis = asciis.filter((ascii) => ascii.type === category);
  selectedAsciis.length < 1 && (selectedAsciis = Object.values(asciis));
  const randomAscii = getRandomValueFromArray(selectedAsciis);
  printAsciiByName(randomAscii.name, options);
}

function printRandomAsciiFrom(asciiNames, options = {}) {
  if (!Array.isArray(asciiNames) || asciiNames.length < 1) {
    console.warn("ASCII names must be a non-empty array.");
    return;
  }

  const selectedAsciis = asciiNames
    .map((asciiName) => getAsciiByName(asciiName))
    .filter(Boolean);

  if (selectedAsciis.length < 1) {
    console.warn("No ASCII found for the provided names.");
    return;
  }

  const randomAscii = getRandomValueFromArray(selectedAsciis);
  printAsciiByName(randomAscii.name, options);
}

/*____________________________________ ASCII API ____________________________________*/

global.AsciiPrinter = {
  version: ASCII_PRINTER_VERSION,
  get catalog() {
    return asciis;
  },
  getById: getAsciiById,
  getByName: getAsciiByName,
  listTypes: listAsciiTypes,
  listNames: listAsciiNames,
  list: listAsciis,
  printById: printAsciiById,
  printByName: printAsciiByName,
  printBySearch: printAsciiSearch,
  printRandom: printRandomAscii,
  printRandomFrom: printRandomAsciiFrom,
};
})(globalThis);
