
// Bubble sort is a basic algorithm for arranging a string of numbers or other elements in the correct order. 
//The method works by examining each set of adjacent elements in the string, from left to right, switching their positions if they are out of order. 
//The algorithm then repeats this process until it can run through the entire string and find no two elements that need to be swapped.

export const bubleSort = function (x) {
    let largoLista = x.length
    let indice = 0;
    let indice2 = 0;
    while (indice < largoLista) {
        let sigueDesordenado = false;
        while (indice2 < largoLista) {
            if (x[indice2] > x[indice2 + 1]) {
                let tempVal = x[indice2];
                x[indice2] = x[indice2 + 1];
                x[indice2 + 1] = tempVal;
                sigueDesordenado = true;
            }

            indice2++;
        }
        if (!sigueDesordenado) {
            break;
        }
        indice2 = 0;
        indice++;
    }

    return x;


}
