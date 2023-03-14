// El algoritmo quicksort parte de un concepto muy simple. Asumiendo que tienes un arreglo A:

// Te ubicas en un elemento A[i] donde 0 < i < longitud de A. Este elemento será el pivote
// Colocar todos los elementos A[j] > A[i] en las casillas superiores o "a la derecha" de A[i], 
// mientras que todos los elementos A[k] < A[i] se colocan en las casillas inferiores o "a la izquierda" de A[i]. 

// Los elementos iguales pueden estar a su derecha o izquierda. Es (muy) probable que el pivote cambie de lugar para 
// satisfacer estas condiciones, es decir, el valor de i sea modificado.
// Luego de realizados los cambios, se tiene A1 que es el subconjunto de A desde A[0] 
// hasta A[i-1] y A2 que es el subconjunto de A[i+1] hasta A[longitud de A - 1]. Aplicar este proceso para A1 y A2.


export const quickSort = function(list){
    if(list.length <= 1){
        return list;
    }
    let pivote = list.pop()
    let listaMenores = [];
    let listaMayores = [];

    for (let index = 0; index < list.length; index++) {
        
        if (list[index] > pivote) {
            listaMayores.push(list[index]);
        }
        else{
            listaMenores.push(list[index]);
        }
        
    }
    let listaMenoresOrdenada = quickSort(listaMenores);
    let listaMayoresOrdenada = quickSort(listaMayores);
    return listaMenoresOrdenada.concat( pivote, listaMayoresOrdenada)
}