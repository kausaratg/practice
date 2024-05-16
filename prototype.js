const a = {
    prop1: 1
}
const b = {
    prop2: 2
}
const c = {
    prop3: 3
}
const d = {
    prop4: 4
}

d.__proto__= c
c.__proto__ = b
b.__proto__ = a