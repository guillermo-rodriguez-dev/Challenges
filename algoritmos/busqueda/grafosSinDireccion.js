





class Vertice {

    constructor(id, visitado = false, nivel = -1, vecinos = []) {
        this.id = id;
        this.visitado = visitado;
        this.nivel = nivel;
        this.vecinos = vecinos;
    }

    agregarVecino(vertice) {
        if (!this.vecinos.includes(vertice)) {
            this.vecinos.push(vertice);
        }
    }
}


export class GraficaSinDireccion {
    constructor() {
        this.vertices = {};
    }
    agregarVertice(vertice) {
        if (!this.vertices.hasOwnProperty(vertice)) {
            this.vertices[vertice] = new Vertice(vertice)
        }
    }
    agregarArista(a, b) {
        if (this.vertices.hasOwnProperty(a)
            && this.vertices.hasOwnProperty(b)) {
            this.vertices[a].agregarVecino(b);
            this.vertices[b].agregarVecino(a);
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

 
}