const nome = "Lucas Puente";
let nome2 = "";
let pessoaDefault = {
    nome: "Lucas Puente",
    idade: "31",
    trabalho: "programador"
}

let nomes = ["Lucas Puente", "Joao do Pulo", "Pupo"]
let pessoas = [
    {
        nome: "Lucas Puente",
        idade: "31",
        trabalho: "programador"
    },
    {
        nome: "Joao do Pulo",
        idade: "40",
        trabalho: "jogador"
    },
    {
        nome: "Pupo",
        idade: "25",
        trabalho: "jovem"
    }
];


function alterarNome() {
    nome2 = "Joao do Pulo";
    console.log("Valor Alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}


function adicionarPessoa(pessoa) {
    pessoas.push(pessoa)
}

function imprimirPessoas() {
    pessoas.forEach((item) => {
       
        console.log("Nome");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);
    
        console.log("Trabalho:");
        console.log(item.trabalho); 
    })
}

adicionarPessoa({
    nome: "Marcelo",
    idade: "40",
    trabalho: "musico"
});

imprimirPessoas();

//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
//    nome: "Joao do Pulo",
//  idade: "40",
//trabalho: "jogador"});


//recebeEalteraNome("Marcos Otavio");
//recebeEalteraNome("Lucas Pupo")

//alterarNome();


