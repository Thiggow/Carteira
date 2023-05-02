import { Carteira } from "./Carteira.mjs";

function criarConta() {

    const btnCadastrar = document.querySelector("#send");

    btnCadastrar.addEventListener("click", function() {
    
        const numConta = document.querySelector("#num");
        const name = document.querySelector("#nome");
        const cpf = document.querySelector("#cpf");
        const firstDep = document.querySelector("#dep");

        const carteira = new Carteira();

        carteira.NumeroConta = numConta.value;
        carteira.Dono = name.value;
        carteira.Cpf = cpf.value;
        carteira.Depositar(parseFloat(firstDep.value));

        console.log(carteira);
    });
}