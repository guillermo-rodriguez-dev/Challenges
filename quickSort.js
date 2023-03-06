


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