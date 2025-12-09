export function openModal(content) {
    const modal = document.createElement('div')
    modal.classList.add('modal-overlay')

    modal.innerHTML = `
        <div class="modal">
        <button class="close-modal">&times;</button>
        <div class="modal-content">${content}</div>
        </div>
    `;

    document.body.appendChild(modal)

    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove()
    })
}