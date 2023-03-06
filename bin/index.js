// @ts-nocheck
'use strict';

import { bubleSort } from "../bubleSort.js";
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
   const x = radixSort([54, 4333, 47, 1, 23, 443, 54311])
    console.log(x);

}

function suma(x){
   return x+1;
}

main();
