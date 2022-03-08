// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo.
// Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. 
// Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
const angulo1 = 90
const angulo2 = 45
const angulo3 = 45

if (angulo1 + angulo2 + angulo3 == 180) {
    console.log(true);

} else {
    console.log(false)
}