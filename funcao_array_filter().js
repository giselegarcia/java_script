//Curso de JavaScript e TypeScript do básico ao avançado
let nome = "Gisele"; const currentDate = new Date();
const currentHour = currentDate.getHours();  

console.log("Meu nome é: " + nome + " e eu estou assistindo essa aula ás " + currentHour + " horas da manhã");

// Função com Array Filter
const numeros = [2, 6, 90, 180, 340, 500, 680, 1000];

resultado = numeros.filter((valor, indice, array)=> {
    //console.log(valor, indice, array);
    return valor < 180;
});
console.log(resultado);

// Retorne as pessoas que tem o nome com 5 letras ou mais;
// Retorne as pessoas com mais de 50 anos;
// Retorne as pessoas cujo nome termina com a letra A

const pessoas = [
    { nome : 'Luiz', idade: 30},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Leticia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
]
const resultadoNome = pessoas.filter((valorNome) =>{
    return valorNome.nome.length >= 5;
})
const resultadoIdade = pessoas.filter((valorIdade) =>{
    return valorIdade.idade > 50;
})
const nomeQueTerminaComA = pessoas.filter((valorLetras) =>{
    return valorLetras.nome.toLowerCase().endsWith("a");
})
console.log("resultadoNome = ", resultadoNome);
console.log("resultadoIdade = ", resultadoIdade);
console.log("Nomes que terminam com a letra A = ", nomeQueTerminaComA);
