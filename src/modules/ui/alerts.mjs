export function showAlert(message) {
    const alert = document.createElement("div");
    alert.className = "alert-box";
    alert.textContent = message;

    document.body.appendChild(alert);

    setTimeout(() => alert.classList.add("show"), 10);

    setTimeout(() => {
        alert.classList.remove("show");
        setTimeout(() => alert.remove(), 300);
    }, 2000);
}
