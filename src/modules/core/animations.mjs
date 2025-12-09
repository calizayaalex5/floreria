export function fadeIn(element, duration = 400) {
    element.style.opacity = 0;
    element.style.display = `opacity ${duration}ms ease`
    
    requestAnimationFrame(() => {
        element.style.opacity = 1;
    })
}

export function slideUp(element, duration = 300) {
    element.style.transition = `transform ${duration}ms ease`
    element.style.transform = "translateY(-10)"
}

export function slideDown(element, duration = 300) {
    element.style.transition = `transform ${duration}ms ease`
    element.style.transform = "translateY(0)"
}

export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}