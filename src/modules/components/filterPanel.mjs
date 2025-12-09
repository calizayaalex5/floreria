import { create, qs } from "../core/utils/dom.mjs";

export function renderFilterPanel(categories = []) {
    const panel = create("div");
    panel.classList.add("filter-panel");

    panel.innerHTML = `
        <label>Filter by Category:</label>
        <select id="filter-category">
        <option value="all">All</option>
        </select>
    `;

    const select = panel.querySelector("#filter-category")

    categories.forEach(cat => {
        const option = create("option")
        option.value = cat
        option.textContent = cat
        select.appendChild(option)
    })

    return panel
}