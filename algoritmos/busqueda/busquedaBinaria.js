


export const busquedaBinaria = function(list, busqueda){
    let largoLista = list.length;
    let mitadLardoLista = Math.round(largoLista/2);
    if(list[mitadLardoLista] == busqueda){
        return true;
    }
    if(list.length === 1){
        return false;

    }
    if(busqueda < list[mitadLardoLista] ){
        list =list.slice(0, mitadLardoLista)
        busquedaBinaria(list, busqueda)
    }else{
        list =list.slice(mitadLardoLista)
        busquedaBinaria(list, busqueda)
    }


}