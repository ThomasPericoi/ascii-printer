const catalog = AsciiPrinter.catalog.map((ascii, id) => ({ ...ascii, id }));
const tags = AsciiPrinter.listTags();

const elements = {
    heroAscii: document.getElementById("hero-ascii"),
    heroCommand: document.getElementById("hero-command"),
    versionStat: document.getElementById("version-stat"),
    countStat: document.getElementById("count-stat"),
    tagStat: document.getElementById("tag-stat"),
    selectedName: document.getElementById("selected-name"),
    selectedMeta: document.getElementById("selected-meta"),
    asciiPreview: document.getElementById("ascii-preview"),
    activeCommand: document.getElementById("active-command"),
    copyActiveCommand: document.getElementById("copy-active-command"),
    copyStatus: document.getElementById("copy-status"),
    asciiSelect: document.getElementById("ascii-select"),
    tagSelect: document.getElementById("tag-select"),
    searchInput: document.getElementById("search-input"),
    colorPicker: document.getElementById("color-picker"),
    colorInput: document.getElementById("color-input"),
    defaultColorInput: document.getElementById("default-color-input"),
    creditsInput: document.getElementById("credits-input"),
    printSelected: document.getElementById("print-selected"),
    randomSelected: document.getElementById("random-selected"),
    catalogSearch: document.getElementById("catalog-search"),
    catalogTag: document.getElementById("catalog-tag"),
    catalogCount: document.getElementById("catalog-count"),
    catalogBody: document.getElementById("catalog-body"),
};

let selectedId = catalog.find((ascii) => ascii.name === "hello")?.id || 0;

function initialize() {
    elements.versionStat.textContent = `v${AsciiPrinter.version}`;
    elements.countStat.textContent = String(catalog.length);
    elements.tagStat.textContent = String(tags.length);

    fillTagSelect(elements.tagSelect, "all");
    fillTagSelect(elements.catalogTag, "all");
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

    elements.tagSelect.addEventListener("change", () => {
        fillAsciiSelect();
        syncSelection(Number(elements.asciiSelect.value));
    });

    elements.searchInput.addEventListener("input", () => {
        const query = elements.searchInput.value.trim().toLowerCase();
        const match = catalog.find((ascii) => ascii.name.toLowerCase().includes(query));

        if (query && match) {
            elements.tagSelect.value = "all";
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
        const tag = elements.tagSelect.value;
        const pool = tag === "all"
            ? catalog
            : catalog.filter((ascii) => ascii.tags.includes(tag));
        const ascii = randomFrom(pool);
        syncSelection(ascii.id);
        AsciiPrinter.printByName(ascii.name, getPrintOptions());
        showFeedback("Check your console.");
    });

    elements.catalogSearch.addEventListener("input", renderCatalog);
    elements.catalogTag.addEventListener("change", renderCatalog);
}

function fillTagSelect(select, selectedValue) {
    select.innerHTML = [
        `<option value="all">All tags</option>`,
        ...tags.map((tag) => `<option value="${escapeHtml(tag)}">${escapeHtml(formatTag(tag))}</option>`),
    ].join("");
    select.value = selectedValue;
}

function fillAsciiSelect() {
    const tag = elements.tagSelect.value;
    const selected = getSelectedAscii();
    const options = catalog
        .filter((ascii) => tag === "all" || ascii.tags.includes(tag))
        .map((ascii) => `<option value="${ascii.id}">${escapeHtml(ascii.name)}</option>`);

    elements.asciiSelect.innerHTML = options.join("");

    if (selected && (tag === "all" || selected.tags.includes(tag))) {
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
    elements.selectedMeta.textContent = `${formatTags(ascii.tags)} · ${ascii.height} lines · ${ascii.author || "Unknown"}`;
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
    const tag = elements.catalogTag.value;
    const selected = catalog.filter((ascii) => {
        const matchesTag = tag === "all" || ascii.tags.includes(tag);
        const matchesQuery = !query || ascii.name.toLowerCase().includes(query);
        return matchesTag && matchesQuery;
    });

    elements.catalogCount.textContent = `${selected.length} shown`;
    elements.catalogBody.innerHTML = selected.map((ascii) => `
        <tr>
            <th scope="row">${ascii.id}</th>
            <td><button class="name-button" type="button" data-id="${ascii.id}" aria-label="Preview ${escapeHtml(ascii.name)} in the playground"><code class="language-text">${escapeHtml(ascii.name)}</code></button></td>
            <td>${escapeHtml(formatTags(ascii.tags))}</td>
            <td><span class="color-chip"><span class="color-dot" style="--dot-color: ${escapeHtml(ascii.color)}" aria-hidden="true"></span>${escapeHtml(ascii.color)}</span></td>
            <td>${escapeHtml(ascii.height)}</td>
            <td>${escapeHtml(ascii.author || "Unknown")}</td>
            <td><code class="language-js">AsciiPrinter.printById(${ascii.id})</code></td>
        </tr>`).join("");

    elements.catalogBody.querySelectorAll("[data-id]").forEach((button) => {
        button.addEventListener("click", () => {
            elements.tagSelect.value = "all";
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

function formatTags(tags) {
    return tags.map(formatTag).join(", ");
}

function formatTag(tag) {
    return tag.charAt(0).toUpperCase() + tag.slice(1);
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}
