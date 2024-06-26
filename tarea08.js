// Funcion fabrica para crear una cuenta bancaria
function crearCuentaBancaria(saldoInicial) {
// Propiedad privada
var saldo = saldoInicial;
// Método privado para depositar dinero
function depositar(cantidad) {
if (cantidad > 0) {
    8	      saldo += cantidad;
    9	    } else {
    10	      console.log("La cantidad a depositar debe ser mayor a cero.");
    11	    }
    12	  }
    13	  // Método privado para retirar dinero
    14	  function retirar(cantidad) {
    15	    if (cantidad > 0 && cantidad <= saldo) {
    16	      saldo -= cantidad;
    17	    } else {
    18	      console.log(
    19	        "La cantidad a retirar debe ser mayor a cero y no exceder el saldo disponible."
    20	      );
    21	    }
    22	  }
    23	  // Retornamos un objeto con métodos públicos
    24	  return {
    25	    consultarSaldo: function () {
    26	      return saldo;
    27	    },
    28	    realizarDeposito: function (cantidad) {
    29	      depositar(cantidad);
    30	    },
    31	    realizarRetiro: function (cantidad) {
    32	      retirar(cantidad);
    33	    },
    34	  };
    35	}
    36	
    37	// Ejemplo de uso
    38	var miCuenta = crearCuentaBancaria(1000);
    39	console.log("Saldo inicial: " + miCuenta.consultarSaldo()); // Saldo inicial: 1000
    40	miCuenta.realizarDeposito(500);
    41	console.log("Saldo después del depósito: " + miCuenta.consultarSaldo()); // Saldo después del depósito: 1500
    42	miCuenta.realizarRetiro(200);
    43	console.log("Saldo después del retiro: " + miCuenta.consultarSaldo()); // Saldo después del retiro: 1300
    44	// Intento de acceder a métodos privados (no funcionará)
    45	
    46	//Como manejar excepciones en JavaScript utilizando try  catch
    47	try {
    48	  //El codigo dentro de try se ejecuta. Si no hay errores, el bloque catch se omite.
    49	  miCuenta.depositar(100); // Error: miCuenta.depositar is not a function
    50	} catch (e) {
    51	  //el parámetro e es una referencia al objeto de excepción que fue lanzado
    52	  console.log(e.message); //message es la propiedad del objeto e, contiene una string describiendo el error
    53	}
    54	try {
    55	  miCuenta.retirar(100); // Error: miCuenta.retirar is not a function
    56	} catch (e) {
  console.log(e.message);
}