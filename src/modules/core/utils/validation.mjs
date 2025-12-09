//valdiaciones de formulario
//util para paginas de support and DIY

export const isEmail = (email) => /\S+@\S+\.\S+/.test(email)

export const isNotEmpty = (str) => str && str.trim().length > 0

export const isNumber = (value) => !isNaN(Number(value))

