





class Vertice {

    constructor(id, visitado = false, nivel = -1, vecinos = []) {
        this.id = id;
        this.visitado = visitado;
        this.nivel = nivel;
        this.vecinos = vecinos;
        this.padre = null;

    }

    agregarVecino(vertice, distancia) {
        if (!this.vecinos.includes(vertice)) {
            this.vecinos.push([vertice, distancia]);
        }
    }
}


export class GraficaConDireccion {
    constructor() {
        this.vertices = {};
    }

    agregarVertice(vertice) {
        if (!this.vertices.hasOwnProperty(vertice)) {
            this.vertices[vertice] = new Vertice(vertice)
        }
    }
    agregarArista(a, b, p) {
        if (this.vertices.hasOwnProperty(a)
            && this.vertices.hasOwnProperty(b)) {
            this.vertices[a].agregarVecino(b, p);
            this.vertices[b].agregarVecino(a, p);
        }
    }



    buscarCaminoDijkstra(x, y) {
        let camino = [];
        let actual = y
        let distancia = 0;
        while (actual != null) {
            camino.unshift(actual);
            actual = this.vertices[actual].padre;
        }

        return [camino, this.vertices[y].distancia];
    }

    bellmanFord(x) {
        if (this.vertices.hasOwnProperty(x)) {
            this.vertices[x].distancia = 0;

            for (const key in this.vertices) {
                if (Object.hasOwnProperty.call(this.vertices, key)) {
                    const element = this.vertices[key];
                    if (element.id !== x) {
                        this.vertices[key].distancia = Number.POSITIVE_INFINITY
                        this.vertices[key].predesesor = null
                    }
                }
            }

            for (const key in this.vertices) {
                if (Object.hasOwnProperty.call(this.vertices, key)) {
                    const element = this.vertices[key];
                    element.vecinos.forEach((arista) => {
                        let distancia = this.vertices[arista[0]].distancia

                        if ((element.distancia + arista[1]) < distancia) {
                            this.vertices[arista[0]].distancia = element.distancia + arista[1];
                            this.vertices[arista[0]].padre = element.id

                        }
                    })


                }
            }




        }
        else {
            console.error("No se encuentra el elemento buscado")
            return false
        }
    }


    dijkstra(x) {
        if (this.vertices.hasOwnProperty(x)) {
            this.vertices[x].distancia = 0;
            this.vertices[x].visitado = false;
            let actual = x
            let noVisitados = [];
            for (const key in this.vertices) {
                if (Object.hasOwnProperty.call(this.vertices, key)) {
                    const element = this.vertices[key];
                    if (element.id !== actual) {
                        this.vertices[key].distancia = Number.POSITIVE_INFINITY
                        this.vertices[key].visitado = false;
                    }
                    this.vertices[key].padre = null

                    noVisitados.push(this.vertices[key].id)

                }
            }

            while (noVisitados.length > 0) {
                const element = this.vertices[actual];
                element.vecinos.forEach((arista) => {
                    if (this.vertices[arista[0]].visitado === false) {


                        let distancia = this.vertices[arista[0]].distancia

                        if ((element.distancia + arista[1]) < distancia) {
                            this.vertices[arista[0]].distancia = element.distancia + arista[1];
                            this.vertices[arista[0]].padre = element.id

                        }
                    }



                })
                this.vertices[actual].visitado = true

                const index = noVisitados.indexOf(actual);
                noVisitados.splice(index, 1);
                actual = this.dijkstraMinimaDistancia(noVisitados)

            }

        }
        else {
            console.error("No se encuentra el elemento buscado")
            return false
        }
    }

    dijkstraMinimaDistancia(x) {
        if (x.length > 0) {
            let menotDistancia = Number.POSITIVE_INFINITY;
            let elementoConMenorDistancia;

            x.forEach((y) => {
                const element = this.vertices[y];
                if (element.distancia < menotDistancia) {
                    menotDistancia = element.distancia;
                    elementoConMenorDistancia = element.id;
                }
            })




            return elementoConMenorDistancia;
        }

    }
}