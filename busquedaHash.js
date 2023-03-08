// @ts-nocheck



export const busquedaHash = function (list, busqueda) {
    let m = 4;
    let tablaHash = {};
    for (let index = 0; index < m; index++) {
        tablaHash[index] = [];
    }
   
    list.forEach(item => {
        let sobrante = item % m;
        tablaHash[sobrante].push(item);
    });


    let sobranteBusqueda = busqueda % m;
    let filaTablaBusqueda = tablaHash[sobranteBusqueda];
    let indice = 0;
    while (indice < filaTablaBusqueda.length) {
        if (busqueda === filaTablaBusqueda[indice]) {
            return true;
        }
        indice++;
    }
    return false;



}