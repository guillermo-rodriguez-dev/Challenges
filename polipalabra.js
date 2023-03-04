'use strict';

export function palindromeIndex(s) {
    // Write your code here
    let largoPalabras = s.length;
    let x = 0;
    let palabraSolicitada = s;
    let listaStringAlrevez = palabraSolicitada.split('');
    let listaAlrevez = listaStringAlrevez.reverse();
    let palabraAlRevez = listaAlrevez.join('');

    if(palabraSolicitada === palabraAlRevez){
        return -1;
    }


    while (largoPalabras >= x) {
        let palabraCortada =  palabraSolicitada.slice(0,x) + palabraSolicitada.slice(x+1); 
        let palabraCortadaAlRevez = palabraCortada.split('').reverse().join('');
        console.log(palabraCortada);
        console.log(palabraCortadaAlRevez);

        if(palabraCortadaAlRevez === palabraCortada){
            return x;
        }
        x++;
    }
    return -1;


}


export function palindromeIndex2(s) {

    let largoPalabras = s.length;
    let palabraSolicitada = s.split('');
    let listaAlrevez = [...palabraSolicitada].reverse().join('');
    palabraSolicitada = palabraSolicitada.join('');
    let x = 0;
    if(palabraSolicitada === listaAlrevez){
        console.log(palabraSolicitada)
        console.log(listaAlrevez)
        console.log('ya es polipalabra')
        return -1
    }
    if(largoPalabras<2){
        console.log('demasiado corta')

        return -1
    }
    let indiceDesigual = 0; 
    while (x < largoPalabras) {
        if(palabraSolicitada[x] === listaAlrevez[x]){
           
        }else{
            indiceDesigual = x;
            let recortadoAlInicio = s.substring(0, indiceDesigual) + s.substring((indiceDesigual + 1)); 
            let recortadoAlInicioAlRevez = recortadoAlInicio.split("").reverse().join("")
            let palabraFinalAlRevez =  s.substring(0, (largoPalabras - 1 - indiceDesigual)) + s.substring((largoPalabras - indiceDesigual)); 
            let palabraFinalAlRevezAlRevez =  palabraFinalAlRevez.split("").reverse().join("")
            console.log(recortadoAlInicio);
            console.log(recortadoAlInicioAlRevez);
            console.log(palabraFinalAlRevez);
            console.log(palabraFinalAlRevezAlRevez);
            
            if(recortadoAlInicio === recortadoAlInicioAlRevez) {
                console.log('indice por delante al inicio')
        
                return indiceDesigual
            }
            if(palabraFinalAlRevez === palabraFinalAlRevezAlRevez) {
                console.log("indice por detras")
                return largoPalabras - 1 - indiceDesigual;
            }
        }
        x++;
    }

   
    console.log("no se puede generar")
    return -1;


}
