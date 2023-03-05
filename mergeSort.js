


export const mergeSort = function (x) {

    if (x.length === 1) {
        return x
    }
    else {
        let puntoMedio = Math.round(x.length / 2);
        let lista1 = x.slice(0, puntoMedio);
        let lista2 = x.slice(puntoMedio);
        let valor1 = mergeSort(lista1);
        let valor2 = mergeSort(lista2);
        let listaFinal = merge(valor1, valor2);
        return listaFinal;
    }



}


const merge = function (x, y) {

    let listaResultado = [];
    while (x.length > 0 && y.length > 0) {
        if (x[0] >= y[0]) {
            listaResultado.push(y[0]);
            y = y.slice(1)

        } else {
            listaResultado.push(x[0]);
            x = x.slice(1)

        }
    }

    if (x.length > 0) {
        listaResultado.push(...x)
    }
    if (y.length > 0) {
        listaResultado.push(...y)
    }

    return listaResultado;


}