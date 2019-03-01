//Declaración de variables

var nombreUsuario="Catalina Syddall"
var saldoCuenta = 5000;
var limiteExtraccion = 5000;
var dinero = 0;
var nuevoSaldo = 0;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
var cuentaAmiga1=1234567;
var cuentaAmiga2 = 7654321;
var codigoPersonal = 0000;
//Ejecución de las funciones que actualizan los valores de las variables en el HTML.

window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}
function sumarDinero(dinero){
    
    nuevoSaldo = saldoCuenta + dinero;
}

function restarDinero(dinero){
    nuevoSaldo = saldoCuenta - dinero;
}

function stringaNum(string){
    var numero = parseInt(string);
    if(isNaN(numero)){
        return false;
    } else {
        dinero = numero;
         }
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var limite = prompt("A cuánto quieres cambiar tu límite de extracción??")
    stringaNum(limite);
    if(stringaNum(limite)!=false){limiteExtraccion = dinero;
    alert ("Has cambiado tu limite de extracción a: $" + limiteExtraccion);
    actualizarLimiteEnPantalla();
    

}else{
    alert("El monto ingresado es inválido")
}
}

function extraerDinero() {
    var extrae = prompt("Cuánto dinero necesitás extraer?")
    stringaNum(extrae);
   if(dinero!=0){
    if(dinero<=saldoCuenta && dinero%100==0 && dinero<=limiteExtraccion){
        restarDinero(dinero);
        alert ("Has extraido: $" + dinero + "\nSaldo Anterior: $" + saldoCuenta + "\nTu nuevo saldo es: $" + nuevoSaldo);
        saldoCuenta = nuevoSaldo;
        actualizarSaldoEnPantalla();
    } else if (dinero>saldoCuenta){
        alert("No podés retirar más plata de la que tenes! :( ")
    } else if(dinero%100!=0){
        alert("Recordá que este cajero solo da billetes de 100, no tenemos cambio! :(")
    } else if(dinero>limiteExtraccion){
        alert("Tu limite de extracción es: $" + limiteExtraccion + "\nNo podés retirar más que eso :(")
    }
} else {alert("Para poder extraer, ingresá un numero válido")}
    

}

function depositarDinero() {
    var deposita = prompt("Cuánto dinero querés depositar??")
    stringaNum(deposita);
    sumarDinero(dinero);
    if(dinero!=0){
        alert ("Has depositado: $" + dinero + "\n Saldo Anterior: $" + saldoCuenta + "\n Tu nuevo saldo es: $" + nuevoSaldo);
        saldoCuenta = nuevoSaldo;
        actualizarSaldoEnPantalla();
    } else {alert("Para empezar a depositar, ingresá un monto válido")}

}

function pagarServicio() {
 var servicioAPagar= prompt("ingrese el número que corresponda con el servicio que querés pagar: \n 1- Agua \n 2-Luz \n 3-Internet \n4-Teléfono");
 var servicioElegido = "";
 
switch(servicioAPagar){
    case "1": 
        servicioElegido="agua"
        montoAPagar = agua
        break;
    case "2": 
        servicioElegido= "luz"
        montoAPagar=luz;
        break;
    case "3": 
        servicioElegido = "internet"
        montoAPagar = internet;
        break;
   case "4": 
        servicioElegido="telefono"
        montoAPagar=telefono;
    break;
   default:
    alert("El servicio que ingresaste es inválido") 
   break;
        
}
if(montoAPagar<=saldoCuenta){
restarDinero(servicioAPagar);
saldoCuenta = nuevoSaldo;
actualizarSaldoEnPantalla();
alert("Usted a pagado el servicio "+ servicioElegido +"\n por un monto total de: $"  + servicioAPagar + "\nTu nuevo saldo es: $" + saldoCuenta);
} else {
    alert("no tenes dinero suficiente!")
}
}

function transferirDinero() {
    var transfiere = prompt("Cuánto dinero necesitás transferir?")
    stringaNum(transfiere);
    if(stringaNum(transfiere)!=false && dinero<=saldoCuenta){
        var cuentaAmiga= prompt("ingresar el numero de la cuenta a la que queres transferir")
        if(cuentaAmiga == cuentaAmiga1 || cuentaAmiga == cuentaAmiga2){
            restarDinero(dinero);
            alert ("Has transferido: $" + dinero + "\nCuenta destino: " + cuentaAmiga + "\nTu nuevo saldo es: $" + nuevoSaldo);
            saldoCuenta = nuevoSaldo;
            actualizarSaldoEnPantalla();
        } else {alert("La cuenta ingresada es incorrecta")}
            
    } else if (dinero>saldoCuenta){
        alert("Tu saldo no es suficiente para realizar la transferencia :( ")
    } else {
        alert("El monto ingresado es invalido")
    }
        
}

function iniciarSesion() {
    var ingresaCod = prompt("Bienvenidx! Ingresá tu código para empezar a operar :)")
    if(ingresaCod == codigoPersonal){
        alert("Bienvenida Catalina Syddall, ya puedes empezar a operar!")
    } else {alert("El código es incorrecto, el dinero será retenido por cuestiones de seguridad")
        saldoCuenta = 0;
}

}

function personalizarPantalla(){
    var tema = prompt ("Elegí el color de tu homebanking, los colores disponibles son: \nRojo \nVerde \nVioleta")
    tema = tema.toLocaleLowerCase()
    var contenedor = document.getElementById("contenedor")
    var cuerpa = document.getElementsByTagName("body")[0]
    console.log(cuerpa)
    switch(tema){
        case "rojo": 
            contenedor.style.backgroundColor="#FF333F"
            cuerpa.style.backgroundColor = "#FA5A64"

        break;
        case "verde":
            
        contenedor.style.backgroundColor="#009933"
        cuerpa.style.backgroundColor = "#05fa73"    
        break;
        case "violeta":
         contenedor.style.backgroundColor=" #6600ff"
         cuerpa.style.backgroundColor = "#d1b3ff"
        
         break;
        default: alert("Elegí un tema válido!")
    }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}