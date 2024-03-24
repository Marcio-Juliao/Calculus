function converter() {
    var numero;
    var valor = document.getElementById("input_valor").value;
    var base = document.getElementById("base").value;

    if (base === "decimal") {
        numero = parseInt(valor);
    } else if (base === "binario") {
        numero = parseInt(valor, 2);
    } else if (base === "octal") {
        numero = parseInt(valor, 8);
    } else if (base === "hexadecimal") {
        numero = parseInt(valor, 16);
    } else {
        console.log("Não foi possível converter, base inválida");
        return;
    }

    var decimal = numero;
    var binario = numero.toString(2);
    var octal = numero.toString(8);
    var hexadecimal = numero.toString(16).toUpperCase();

    resultado.innerHTML = `
Decimal: ${decimal}<br>
Octal: ${octal}<br>
Hexadecimal: ${hexadecimal}<br>
Binário: ${binario}
`;

    console.log(`Resultados: Decimal: ${decimal}, Binário: ${binario}, Octal: ${octal}, Hexadecimal: ${hexadecimal}`);
}
