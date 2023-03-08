'use strict';

import { bubleSort } from "../bubleSort.js";
import { busquedaHash } from "../busquedaHash.js";
import { busquedaLineal } from "../busquedaLineal.js";
import { GraficaConDireccion } from "../grafosConDireccion.js";
import { gridChallenge } from "../gridChallenge.js";
import { heapSort } from "../heapSort.js";
import { mergeSort } from "../mergeSort.js";
import { palindromeIndex, palindromeIndex2 } from "../polipalabra.js";
import { quickSort } from "../quickSort.js";
import { radixSort } from "../radixSort.js";



/*
 * Complete the 'towerBreakers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 */



function main() {

    //    const result = towerBreakers(1, 4);
    //     console.log(result);
    // const result = gridChallenge(['kc',
    //     'iu'])
    // console.log(result);
    //    const x = busquedaHash([11, 72, 3, 14, 45, 6, 17], 33)
    //     console.log(x);
    // const grafica = new Grafica();
    // const vertices = [0, 1, 2, 3, 4, 5, 6]
    // vertices.forEach(vertice => {
    //     grafica.agregarVertice(vertice)
    // });

    // const aristas = [1,4,4,3,4,6,3,5,3,2,6,5,5,2]
    // for (let index = 0; index < aristas.length; index = index + 2) {
    //     grafica.agregarArista(aristas[index], aristas[index + 1])
    // }
    // grafica.busquedaProfundidad(2)
    // console.log(grafica)


    let grafica = new GraficaConDireccion();
    grafica.agregarVertice(1);
    grafica.agregarVertice(2);
    grafica.agregarVertice(3);
    grafica.agregarVertice(4);
    grafica.agregarVertice(5);
    grafica.agregarVertice(6);

    grafica.agregarArista(1, 6, 14)
    grafica.agregarArista(1, 2, 7)
    grafica.agregarArista(1, 3, 9)
    grafica.agregarArista(2, 3, 10)
    grafica.agregarArista(2, 4, 15)
    grafica.agregarArista(3, 4, 11)
    grafica.agregarArista(3, 6, 2)
    grafica.agregarArista(4, 5, 6)
    grafica.agregarArista(5, 6, 9)
    grafica.bellmanFord(1)
    console.log(grafica.buscarCamino(1,6));

}



main();
