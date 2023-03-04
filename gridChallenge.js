


export const gridChallenge = function (grid) {
    let result = "YES";
    let cantidadDeColumnas = grid[0].length;
    if (cantidadDeColumnas == 0) {
        return result;
    }
    let indice = 0;
    let gridOrdenado = [];
    grid.forEach(
        x => {
            gridOrdenado.push(x.split('').sort());
        }
    )


    while (cantidadDeColumnas > indice) {
        let columna = [];
        gridOrdenado.forEach(element => {
            columna.push(element[indice]);
        });
        let columnaString = columna.toString();
        let columnaOrdenadaString = [...columna].sort().toString();
        if (columnaString !==columnaOrdenadaString) {
            return "NO"
        }
        indice++;
    }
    return result;



}