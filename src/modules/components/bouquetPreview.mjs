export function renderBouquetPreview(flower) {
    const div = document.createElement('div');
    div.classList.add("bouquet-preview");

    div.innerHTML = `
        <h3>${flower.common_name}</h3>
        <img src="${flower.default_image?.small_url}" class="preview-img">
    `;

    return div;
}