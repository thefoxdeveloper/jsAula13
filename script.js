const pessoas = [
  { nome: "João", sexo: "M", salario: 2500 },
  { nome: "Maria", sexo: "F", salario: 3200 },
  { nome: "Pedro", sexo: "M", salario: 2000 },
  { nome: "Ana", sexo: "F", salario: 2800 },
  { nome: "Carlos", sexo: "M", salario: 3500 },
];
// Utilizando forEach para exibir os nomes:
pessoas.forEach((pessoa) => {
  console.log(pessoa.nome);
});
// Usando findIndex para encontrar índice do primeiro homem:
const indicePrimeiroHomem = pessoas.findIndex((pessoa) => pessoa.sexo === "M");
console.log(indicePrimeiroHomem);
// Utilizando find para encontrar a primeira mulher:
const primeiraMulher = pessoas.find((pessoa) => pessoa.sexo === "F");
console.log(primeiraMulher);
// Usando filter para encontrar pessoas com salário maior que 2500:
const salario2500 = pessoas.filter((pessoa) => pessoa.salario > 2500);
console.log(salario2500);

// Dado um array de números, exiba cada número multiplicado por 3 no console.
const numeros = [1, 2, 3, 4, 5];

numeros.forEach((numero) => {
  console.log(numero * 3);
});
// Dado um array de idades, crie um novo array contendo apenas as idades maiores ou iguais a 18.
const idades = [17, 18, 19, 20, 21];

const idadesMaiores18 = idades.filter((idade) => idade >= 18);

console.log(idadesMaiores18);
// Dado um array de produtos, encontre o primeiro produto que tenha o preço menor que 50.
const produtos = [
  { nome: " 1", preco: 10 },
  { nome: " 2", preco: 40 },
  { nome: " 3", preco: 20 },
  { nome: " 4", preco: 30 },
];
const produto50 = produtos.find((produto) => produto.preco < 50);
console.log(produto50);
// Dado um array de nomes, encontre o índice do primeiro nome que tenha mais de 6 caracteres.
const nomes = ["Douglas", "Carla", "Provin", "Rodrigo", "Bruno"];

const indicePrimeiroNomeComMaisDe6Caracteres = nomes.findIndex(
  (nome) => nome.length > 6
);

console.log(indicePrimeiroNomeComMaisDe6Caracteres);
