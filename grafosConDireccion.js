





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

    busquedaExpansion(x) {
        let cola = []
        if (this.vertices.hasOwnProperty(x)) {

            this.vertices[x].visitado = true;
            this.vertices[x].nivel = 0;
            cola.push(this.vertices[x]);
            while (cola.length > 0) {
                let actual = cola.shift();
                actual.vecinos.forEach(vecino => {
                    if (!this.vertices[vecino].visitado) {
                        cola.push(this.vertices[vecino]);
                        this.vertices[vecino].visitado = true;
                        this.vertices[vecino].nivel = actual.nivel + 1;
                    }
                });
            }
        }
        return this.vertices;

    }

    busquedaProfundidad(x) {

        if (this.vertices.hasOwnProperty(x)) {
            this.vertices[x].visitado = true;
            for (let index = 0; index < this.vertices[x].vecinos.length; index++) {

                if (!this.vertices[this.vertices[x].vecinos[index]].visitado) {
                    this.vertices[this.vertices[x].vecinos[index]].padre = x;
                    this.busquedaProfundidad(this.vertices[x].vecinos[index]);
                }

            }

        }

    }

    buscarCamino(x, y) {
        let camino = [];
        let actual = y
        while (actual) {
            camino.unshift(actual);
            actual = this.vertices[actual].padre ?? undefined;
        }
        let distancia = camino.reduce((accumulator, currentValue) => this.vertices[accumulator].distancia + currentValue,)
        return [camino, distancia];
    }

    bellmanFord(x) {
        if (this.vertices.hasOwnProperty(x)) {
            this.vertices[x].distancia = 0;
            
            for (const key in this.vertices) {
                if (Object.hasOwnProperty.call(this.vertices, key)) {
                    const element = this.vertices[key];
                    if (element.id !== x) {
                        this.vertices[key].distancia = 99999999999
                        this.vertices[key].predesesor = null
                    }
                }
            }

            for (const key in this.vertices) {
                if (Object.hasOwnProperty.call(this.vertices, key)) {
                    const element = this.vertices[key];
                    element.vecinos.forEach((arista) => {
                        let distancia =  this.vertices[arista[0]].distancia

                        if ((element.distancia + arista[1]) <distancia) {
                            this.vertices[arista[0]].distancia = element.distancia + arista[1];
                            this.vertices[arista[0]].padre = element.id
    
                        }
                    })

                  
                }
            }



         
        }
    }
}