const catalog = AsciiPrinter.catalog.map((ascii, id) => ({ ...ascii, id }));
const types = AsciiPrinter.listTypes();

const elements = {
    heroAscii: document.getElementById("hero-ascii"),
    heroCommand: document.getElementById("hero-command"),
    versionStat: document.getElementById("version-stat"),
    countStat: document.getElementById("count-stat"),
    categoryStat: document.getElementById("category-stat"),
    selectedName: document.getElementById("selected-name"),
    selectedMeta: document.getElementById("selected-meta"),
    asciiPreview: document.getElementById("ascii-preview"),
    activeCommand: document.getElementById("active-command"),
    copyActiveCommand: document.getElementById("copy-active-command"),
    copyStatus: document.getElementById("copy-status"),
    asciiSelect: document.getElementById("ascii-select"),
    categorySelect: document.getElementById("category-select"),
    searchInput: document.getElementById("search-input"),
    colorPicker: document.getElementById("color-picker"),
    colorInput: document.getElementById("color-input"),
    defaultColorInput: document.getElementById("default-color-input"),
    creditsInput: document.getElementById("credits-input"),
    printSelected: document.getElementById("print-selected"),
    randomSelected: document.getElementById("random-selected"),
    catalogSearch: document.getElementById("catalog-search"),
    catalogCategory: document.getElementById("catalog-category"),
    catalogCount: document.getElementById("catalog-count"),
    catalogBody: document.getElementById("catalog-body"),
};

let selectedId = catalog.find((ascii) => ascii.name === "hello")?.id || 0;

function initialize() {
    elements.versionStat.textContent = `v${AsciiPrinter.version}`;
    elements.countStat.textContent = String(catalog.length);
    elements.categoryStat.textContent = String(types.length);

    fillCategorySelect(elements.categorySelect, "all");
    fillCategorySelect(elements.catalogCategory, "all");
    fillAsciiSelect();
    syncSelection(selectedId);
    renderHero();
    renderCatalog();
    bindEvents();
}

initialize();

function bindEvents() {
    document.querySelector(".control-panel").addEventListener("submit", (event) => {
        event.preventDefault();
    });

    elements.asciiSelect.addEventListener("change", () => {
        syncSelection(Number(elements.asciiSelect.value));
    });

    elements.categorySelect.addEventListener("change", () => {
        fillAsciiSelect();
        syncSelection(Number(elements.asciiSelect.value));
    });

    elements.searchInput.addEventListener("input", () => {
        const query = elements.searchInput.value.trim().toLowerCase();
        const match = catalog.find((ascii) => ascii.name.toLowerCase().includes(query));

        if (query && match) {
            elements.categorySelect.value = "all";
            fillAsciiSelect();
            syncSelection(match.id);
        }
    });

    elements.colorPicker.addEventListener("input", () => {
        elements.colorInput.value = elements.colorPicker.value;
        elements.defaultColorInput.checked = false;
        updatePreview(getSelectedAscii());
    });

    elements.colorInput.addEventListener("input", () => {
        elements.defaultColorInput.checked = false;
        syncColorPicker(elements.colorInput.value);
        updatePreview(getSelectedAscii());
    });

    elements.defaultColorInput.addEventListener("change", () => updatePreview(getSelectedAscii()));
    elements.creditsInput.addEventListener("change", () => updateCommand(getSelectedAscii()));

    elements.printSelected.addEventListener("click", () => {
        const ascii = getSelectedAscii();
        AsciiPrinter.printByName(ascii.name, getPrintOptions());
        showFeedback("Check your console.");
    });

    elements.copyActiveCommand.addEventListener("click", () => {
        copyText(elements.activeCommand.textContent);
    });

    elements.randomSelected.addEventListener("click", () => {
        const category = elements.categorySelect.value;
        const pool = category === "all"
            ? catalog
            : catalog.filter((ascii) => ascii.type === category);
        const ascii = randomFrom(pool);
        syncSelection(ascii.id);
        AsciiPrinter.printByName(ascii.name, getPrintOptions());
        showFeedback("Check your console.");
    });

    elements.catalogSearch.addEventListener("input", renderCatalog);
    elements.catalogCategory.addEventListener("change", renderCatalog);
}

function fillCategorySelect(select, selectedValue) {
    select.innerHTML = [
        `<option value="all">All categories</option>`,
        ...types.map((type) => `<option value="${escapeHtml(type)}">${escapeHtml(formatCategory(type))}</option>`),
    ].join("");
    select.value = selectedValue;
}

function fillAsciiSelect() {
    const category = elements.categorySelect.value;
    const selected = getSelectedAscii();
    const options = catalog
        .filter((ascii) => category === "all" || ascii.type === category)
        .map((ascii) => `<option value="${ascii.id}">${escapeHtml(ascii.name)}</option>`);

    elements.asciiSelect.innerHTML = options.join("");

    if (selected && (category === "all" || selected.type === category)) {
        elements.asciiSelect.value = String(selected.id);
    }
}

function syncSelection(id) {
    selectedId = id;
    elements.asciiSelect.value = String(id);
    updatePreview(getSelectedAscii());
}

function updatePreview(ascii) {
    elements.selectedName.textContent = ascii.name;
    elements.selectedMeta.textContent = `${formatCategory(ascii.type)} · ${ascii.height} lines · ${ascii.author || "Unknown"}`;
    elements.asciiPreview.textContent = ascii.art.trimEnd();
    elements.asciiPreview.setAttribute("aria-label", `${ascii.name} ASCII art preview`);
    syncColorPicker(getPreviewColor(ascii));
    elements.asciiPreview.style.setProperty("--preview-color", getPreviewColor(ascii));
    updateCommand(ascii);
}

function updateCommand(ascii) {
    const options = getPrintOptions();
    const optionsText = Object.keys(options).length
        ? `, ${JSON.stringify(options)}`
        : "";

    elements.activeCommand.textContent = `AsciiPrinter.printByName("${ascii.name}"${optionsText})`;
    elements.copyStatus.textContent = "";
}

function renderHero() {
    const ascii = catalog.find((item) => item.name === "fox") || catalog[0];
    elements.heroAscii.textContent = ascii.art.trimEnd();
    elements.heroAscii.setAttribute("aria-label", `${ascii.name} ASCII art console preview`);
    elements.heroCommand.textContent = `AsciiPrinter.printByName("${ascii.name}")`;
}

function renderCatalog() {
    const query = elements.catalogSearch.value.trim().toLowerCase();
    const category = elements.catalogCategory.value;
    const selected = catalog.filter((ascii) => {
        const matchesCategory = category === "all" || ascii.type === category;
        const matchesQuery = !query || ascii.name.toLowerCase().includes(query);
        return matchesCategory && matchesQuery;
    });

    let currentCategory = "";
    elements.catalogCount.textContent = `${selected.length} shown`;
    elements.catalogBody.innerHTML = selected.map((ascii) => {
        const separator = ascii.type === currentCategory
            ? ""
            : `<tr class="category-row"><th scope="colgroup" colspan="7">${escapeHtml(formatCategory(ascii.type))}</th></tr>`;
        currentCategory = ascii.type;

        return `${separator}
            <tr>
                <th scope="row">${ascii.id}</th>
                <td><button class="name-button" type="button" data-id="${ascii.id}" aria-label="Preview ${escapeHtml(ascii.name)} in the playground"><code class="language-text">${escapeHtml(ascii.name)}</code></button></td>
                <td>${escapeHtml(ascii.type)}</td>
                <td><span class="color-chip"><span class="color-dot" style="--dot-color: ${escapeHtml(ascii.color)}" aria-hidden="true"></span>${escapeHtml(ascii.color)}</span></td>
                <td>${escapeHtml(ascii.height)}</td>
                <td>${escapeHtml(ascii.author || "Unknown")}</td>
                <td><code class="language-js">AsciiPrinter.printById(${ascii.id})</code></td>
            </tr>`;
    }).join("");

    elements.catalogBody.querySelectorAll("[data-id]").forEach((button) => {
        button.addEventListener("click", () => {
            elements.categorySelect.value = "all";
            fillAsciiSelect();
            syncSelection(Number(button.dataset.id));
            document.getElementById("playground").scrollIntoView({ behavior: "smooth" });
        });
    });
}

function getSelectedAscii() {
    return catalog.find((ascii) => ascii.id === selectedId) || catalog[0];
}

function getPrintOptions() {
    const ascii = getSelectedAscii();
    const color = elements.colorInput.value.trim();
    const options = {};

    if (elements.defaultColorInput.checked) {
        options.color = false;
    } else if (color && color !== ascii.color) {
        options.color = color;
    }

    if (elements.creditsInput.checked) {
        options.credits = true;
    }

    return options;
}

function getPreviewColor(ascii) {
    if (elements.defaultColorInput.checked) {
        return "#f7f7f2";
    }

    return elements.colorInput.value.trim() || ascii.color;
}

function syncColorPicker(color) {
    if (/^#[0-9a-f]{6}$/i.test(color)) {
        elements.colorPicker.value = color;
    }
}

async function copyText(text) {
    try {
        await navigator.clipboard.writeText(text);
        showFeedback("Copied.");
    } catch {
        showFeedback(text);
    }
}

function showFeedback(message) {
    elements.copyStatus.textContent = message;
}

function randomFrom(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function formatCategory(category) {
    return category.charAt(0).toUpperCase() + category.slice(1);
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}
