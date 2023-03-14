
// La idea básica del algoritmo Radix sort es considerar que las claves están formadas por dıgitos. Ası, para ordenar las claves, 
// el método las ordena por cada uno de sus dıgitos, 
// de menos peso a más peso. A cada ordenación de las claves por un dıgito se le llamará iteración.


export const radixSort = function (list) {
    let largoLista = list.length;
    let listaFinal = [];
    let listaString = [];
    let maxDigits = 1;
    for (const i in list) {
        listaString.push(list[i].toString());
        if (list[i].toString().length > maxDigits) {
            maxDigits = list[i].toString().length
        }
    }
    for (let y = 0; y < largoLista; y++) {
        if (listaString[y].length < maxDigits) {
            let cerosQueFaltan = maxDigits - listaString[y].length;
            listaString[y] = '0'.repeat(cerosQueFaltan) + listaString[y]
        }

    }
    
    while (maxDigits > 0) {
        let mapDigito = {};

        for (let index = 0; index < 10; index++) {
            mapDigito[index] = []
    
        }
        let listaAuxiliar = [];
        for (let j = 0; j < largoLista; j++) {
            let digito = listaString[j].charAt(maxDigits - 1)
            mapDigito[digito] = [...mapDigito[digito], listaString[j]];
            
        }
        for (let index = 0; index < 10; index++) {
            listaAuxiliar.push(...mapDigito[index.toString()])

        }
        listaString = listaAuxiliar;
        maxDigits--
    }

    listaString.forEach(e => {
        listaFinal.push(Number(e));
    });

    return listaFinal;


}