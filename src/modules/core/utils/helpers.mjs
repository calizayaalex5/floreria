// funciones genericas
// random ID

export const randomId = () => Math.random().toString(36).substring(2, 10)

export const debounce = (fn, delay = 300) => {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => fn(...args), delay)
    }
}

export const clore = (obj) => JSON.parse(JSON.stringify(obj))

