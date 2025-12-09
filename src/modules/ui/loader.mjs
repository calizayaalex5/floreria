export function showLoader() {
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.innerHTML = `<span class="spinner"></span>`;
    document.body.appendChild(loader);
}

export function hideLoader() {
    const loader = document.querySelector('#loader');
    loader?.remove();
}