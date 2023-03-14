



export const busquedaLineal = function (list, busqueda) {
    let indice = 0;
    while (indice < list.length) {
        if (list[indice] == busqueda) {
            
            return true;
        }
        indice++;
    }
    return false;

}