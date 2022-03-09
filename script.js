let promedioNotas;
let porcentajeNotas;
let porcentajeExfinal;
let porcentajeTrfinal;
let calificación;
let mensaje = document.querySelector("div");


function Calcular() {
    let nota1 = document.getElementById("cal1").value;
    let nota2 = document.getElementById("cal2").value;
    let nota3 = document.getElementById("cal3").value;
    let examenFinal = document.getElementById("exfinal").value;
    let trabajoFinal = document.getElementById("trfinal").value;
    promedioNotas = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
    porcentajeNotas = 0.55 * (promedioNotas);
    porcentajeExfinal = 0.3 * (examenFinal);
    porcentajeTrfinal = 0.15 * (trabajoFinal);
    calificación =parseFloat(porcentajeNotas) + parseFloat(porcentajeExfinal) + parseFloat(porcentajeTrfinal)
        mensaje.innerHTML = `Su calificación final en la asignatura Algoritmos será: ${calificación.toFixed(2)} `


    console.log(promedioNotas)
    console.log(porcentajeNotas.toFixed(2))
    console.log(porcentajeExfinal.toFixed(2))
    console.log(porcentajeTrfinal.toFixed(2))
    console.log(calificación.toFixed(2))

}