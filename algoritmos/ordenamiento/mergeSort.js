
// El método Merge Sort consiste en partir una estructura en mitades, 
// ordenar cada mitad y luego intercalar ordenadamente ambas mitades. 
// Cada mitad se ordena aplicando el mismo método.

export const mergeSort = function (x) {

    if (x.length === 1) {
        return x
    }
    else {
        let puntoMedio = Math.round(x.length / 2);
        let primeraMitad = x.slice(0, puntoMedio);
        let segundaMitad = x.slice(puntoMedio);
        let primeraMitadOrdenada = mergeSort(primeraMitad);
        let segundaMitadOrdenada = mergeSort(segundaMitad);
        let listaCompletaOrdenada = merge(primeraMitadOrdenada, segundaMitadOrdenada);
        return listaCompletaOrdenada;
    }



}


const merge = function (lista1, lista2) {

    let listaResultado = [];
    while (lista1.length > 0 && lista2.length > 0) {
        if (lista1[0] >= lista2[0]) {
            listaResultado.push(lista2[0]);
            lista2 = lista2.slice(1)

        } else {
            listaResultado.push(lista1[0]);
            lista1 = lista1.slice(1)

        }
    }

    if (lista1.length > 0) {
        listaResultado.push(...lista1)
    }
    if (lista2.length > 0) {
        listaResultado.push(...lista2)
    }

    return listaResultado;


}