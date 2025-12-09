export const qs = (selector, parent = document) => parent.querySelector(selector)

export const qsa = (selector, parent = document) => parent.querySelectorAll(selector)

export const create = (tag) => document.createElement(tag)

export const on = (element, event, handler) => element.addEventListener(event, handler)

