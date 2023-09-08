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
