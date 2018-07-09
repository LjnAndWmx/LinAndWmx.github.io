const add = (x, y) => {
    return x + y
}
const sub = (x, y) => {
    return x - y
}
const str = 'calc'

// 暴露出去
module.exports = {
    add,
    sub,
    str
}