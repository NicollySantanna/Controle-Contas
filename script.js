//Variaveis que acumulam as contas
var numContas = 0;
var numTotal = 0;

var resposta = "";

function contaMes () {
    var salario = document.querySelector("#salario")
    var extra = document.querySelector("#extra")

    var descricao = document.querySelector("#descricao")
    var valoraPagar = document.querySelector("#valoraPagar")
    var outListaContas = document.querySelector("#outListaContas")
    var outTotal = document.querySelector("#outTotal")
    var outSalario = document.querySelector("#outSalario")

    var salario = Number (salario.value)
    var extra = Number (extra.value)
    var descricaoConta = descricao.value;
    var valor = Number (valoraPagar.value)

    if (descricaoConta == "" || valor == 0 || isNaN(valor)){
        alert("Preencha os campos corretamente!")
    }

    numContas++;
    numTotal = numTotal + valor;
    var salarioExtra = salario + extra - numTotal


    //concatena as contas
    resposta = resposta + " Salário de - R$: " + salario + " \n " + " Extra de - R$: " + extra +  "\n" + descricaoConta + " - R$: " + valor.toFixed(2) + "\n"

    outListaContas.textContent = resposta
    outTotal.textContent = numContas + " Conta(s) - Total R$: " + valor.toFixed(2)
    outSalario.textContent = "Restam - R$ " + salarioExtra.toFixed(2)

    descricao.value = "";
    valoraPagar.value = "";
}

let btnRegistrar = document.querySelector("#btnRegistrar")
btnRegistrar.addEventListener("click", contaMes)
