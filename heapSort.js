


export const heapSort = function (list) {
    let listaFinal = [];
    let largoOriginalLista = list.length

    let i = Math.round((largoOriginalLista / 2) ) 
    for (i; i >= 0; i--) {

      heapify(list, i)
    }
    for (let y = 0; y < largoOriginalLista; y++){
        let primerItem = list[0];
        let ultimoItem = list[list.length - 1];

        list[0] = ultimoItem;
        list[list.length - 1] = primerItem;
        if( list[0] < list[list.length - 1]){
            listaFinal.push(list[0]);
            list.shift();
            
        }else{
            listaFinal.push(list[list.length - 1]);
            list.pop();
        }
        heapify(list, 0);
       
    }

    return listaFinal;


}


const heapify = function (list, i) {
    let posicionHijoIzquierdo= 2 * i + 1
    let posicionHijoDerecho= 2 * i + 2
    
    let hijoIzquierdo = list[posicionHijoIzquierdo];
    let hijoDerecho = list[posicionHijoDerecho];
    let nodoPadre = list[i];
    if (hijoIzquierdo && hijoDerecho) {
        let j = hijoIzquierdo <= hijoDerecho ? posicionHijoIzquierdo : posicionHijoDerecho;
        if (nodoPadre > list[j]) {
            list[i] = list[j];
            list[j] = nodoPadre;
            heapify(list, j)
        }

    }
    else if (hijoIzquierdo) {
        if (hijoIzquierdo < nodoPadre) {
            list[i] = hijoIzquierdo;
            list[posicionHijoIzquierdo] = nodoPadre;
        }
    }
    else if (hijoDerecho) {
        if (hijoDerecho < nodoPadre) {
            list[i] = hijoDerecho;
            list[posicionHijoDerecho] = nodoPadre;
        }
    }
   // return list;
}