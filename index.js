function jugar(opcionJugador) {
    var nombreJugador = document.getElementById("nombre").value;
    var opciones = ["piedra", "papel", "tijera"];
    var opcionComputadora = opciones[Math.floor(Math.random() * opciones.length)];
    
    var resultado = "";
    
    if (nombreJugador === "") {
        alert("Por favor, ingresa tu nombre.");
        return;
    }
    
    if (opcionJugador === opcionComputadora) {
        resultado = "Empate";
    } else if (
        (opcionJugador === "piedra" && opcionComputadora === "tijera") ||
        (opcionJugador === "papel" && opcionComputadora === "piedra") ||
        (opcionJugador === "tijera" && opcionComputadora === "papel")
    ) {
        resultado = "Ganaste";
    } else {
        resultado = "Perdiste";
    }
    
    document.getElementById("nombreJugador").innerHTML = nombreJugador + " : " + opcionJugador ;
    document.getElementById("opcionComputadora").innerHTML = "Computadora: " + opcionComputadora;
    document.getElementById("resultado").innerHTML =  resultado;
}