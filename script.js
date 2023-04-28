//Variaveis que acumulam as contas
var numContas = 0;
var numTotal = 0;

var resposta = "";

function contaMes () {
    var descricao = document.querySelector("#descricao")
    var valoraPagar = document.querySelector("#valoraPagar")
    var outListaContas = document.querySelector("#outListaContas")
    var outTotal = document.querySelector("#outTotal")

    var descricaoConta = descricao.value;
    var valor = Number (valoraPagar.value)

    if (descricaoConta == "" || valor == 0 || isNaN(valor)){
        alert("Preencha os campos corretamente!")
    }

    numContas++;
    numTotal = numTotal + valor;

    //concatena as contas
    resposta = resposta + descricaoConta + " - R$: " + valor.toFixed(2) + "\n"

    outListaContas.textContent = resposta
    outTotal.textContent = numContas + " Conta(s) - Total R$: " + numTotal.toFixed(2)

    descricao.value = "";
    valoraPagar.value = "";
}

let btnRegistrar = document.querySelector("#btnRegistrar")
btnRegistrar.addEventListener("click", contaMes)
