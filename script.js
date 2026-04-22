let salarioBruto = parseFloat(prompt("Digite o seu salario bruto mensal (ex: 15,000.00)"));
let imposto = 0;
let Aliquota = "";
if (salarioBruto <= 5000.00){
    imposto = 0;
    Aliquota = "isento";
}else if(salarioBruto >= 5000.01 && salarioBruto <= 6500.00){
        imposto = salarioBruto * 0.075; //7.5%
        Aliquota = "7.5%"
    } else if(salarioBruto >= 6500.01 && salarioBruto <= 8000.00){
        imposto = salarioBruto * 0.15; //15%
        Aliquota = "15%"
    } else if(salarioBruto >= 8000.01 && salarioBruto <= 10000.00){
        imposto = salarioBruto * 0.225;  //22%
        Aliquota = "22%"
    } else {
        imposto = salarioBruto * 0.275; //27.5%
        Aliquota = "27.5%"
    }

let salarioLiquido = salarioBruto - imposto;
let descontoFGTS = salarioLiquido * 0.11; //desconto fgts
let separador = "-".repeat(30);
alert(`${separador} 
    O salario sem descontos é: R$ ${salarioBruto.toFixed(2)}\n
    Aliquota aplicada: R$ ${Aliquota}\n
    Valor do desconto: R$ ${imposto.toFixed(2)}\n
    Salario liquido:   R$ ${salarioLiquido.toFixed(2)}\n
    Salario com desconto FGTS 11%: R$ ${descontoFGTS.toFixed(2)}\n
    O que voce recebe entao eh: R$ ${salarioLiquido - descontoFGTS}
    ${separador} `);
