
'use strict';

export function towerBreakers(n, m) {
    // Write your code here
    const arr = new Array(n).fill(m);
    console.log(arr)
    if(n === 1){
        return 2;
    }
    if(m === 1){
        return 1
    }

    // return 1;
    if(n%2 == 0 ) return 2
    return 1
}