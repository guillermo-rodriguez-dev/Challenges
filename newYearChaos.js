



export function newYearChaos(q) {

    let largoLista = q.length;
    let bribes = 0;
    let index = largoLista;
    while (index >= 0) {
        if(q[index] - index >3){
            console.log("Too chaotic")
            return 
        }
       for (let u = q[index]-2; u < index; u++) {
        if(q[u] > q[index]){
            bribes++
        }
        
       }
       index--;
    }
    console.log(bribes);

}