let diasDeLaSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
let numerosPares = []

for(let i=0; i < diasDeLaSemana.length ; i++) {
    if(i == 6) {
        alert("día siete, dominguete")
    } else if ((i%2) == 0) {
        numerosPares.push([i])
    }
}
console.log(numerosPares);