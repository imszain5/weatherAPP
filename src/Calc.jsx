
const add = (a,b) => {
    let sum = a+b;
    return sum;
}
const sub = (a,b) =>  {
    let sub = a-b;
    return sub;
}

const div = (a,b) => {
    let div = a/b;
    div = div.toFixed(3)
    return div;
}
const mul = (a,b) => {
    let mul = a*b;
    return mul;
}

export {add,sub,div,mul};
