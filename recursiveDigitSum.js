




export function recursiveDigitSum(n, k) {
    let result = 0;
    let z = n.toString()
    if (z.length ===1 ) {
        return parseInt(z)
    }
    else {

        let listaDigitos = z.toString().split("");
        let suma = listaDigitos.reduce((x, y) => x + parseInt(y), 0);
        result  = recursiveDigitSum(suma*k, 1);
    }
    return result
}


