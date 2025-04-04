const sumar = (num1, num2) => {
    let suma = num1 + num2;
    console.log(suma);
}

const restar = (num1, num2) => {
    let resta = num1 - num2;
    console.log(resta);
}

const mult = (num1, num2) => {
    let multi = num1 * num2;
    console.log(multi);
}

const PI = () => {
    const pi = Math.PI;
    console.log(pi);
}

module.exports = {
    sumar,
    restar,
    mult,
    PI
}