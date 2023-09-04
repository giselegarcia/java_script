//Curso de JavaScript e TypeScript do básico ao avançado
let nome = "Gisele"; const currentDate = new Date();
const currentHour = currentDate.getHours();  

console.log("Meu nome é: " + nome + " e eu estou assistindo essa aula ás " + currentHour + " horas da manhã");

// Função com Array Filter
const numeros = [2, 6, 90, 180, 340, 500, 680, 1000];

function numerosFilter(valor){
    return valor < 180
}
resultado = numeros.filter(numerosFilter);
console.log(resultado);
