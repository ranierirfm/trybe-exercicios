// 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma de 1 a 50 é: X.
// let valor = 50;
// let soma = 0;
// for (let i = 0; i <= valor; i += 1) {
//     soma += i;
// }
//console.log(soma)
//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
// let contador = 0;
// for (let i = 2; i <= 150; i += 1) {
//     if (i % 3 === 0) {
//         contador += 1;
//     }
// }
// if (contador === 50) {
//     console.log("Parabéns você é hakuna matata")
// }
//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".
// let pessoa2 = "pedra";
// let pessoa1 = "tesoura";
// if ((pessoa1 === "pedra" && pessoa2 === "pedra")||(pessoa1 === "tesoura" && pessoa2 === "tesoura" )||(pessoa1 === "papel" && pessoa2 === "papel" )){
//     console.log("A Ties")
// } else if ((pessoa1 === "pedra" && pessoa2 === "tesoura")||(pessoa1 === "tesoura" && pessoa2 === "papel" )||(pessoa1 === "papel" && pessoa2 === "pedra" )){
//     console.log("Player 1 won")
// } else if ((pessoa2 === "pedra" && pessoa1 === "tesoura")||(pessoa2 === "tesoura" && pessoa1 === "papel" )||(pessoa2 === "papel" && pessoa1 === "pedra" )){
//     console.log("Player 2 won")
// }
//4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
// let idade = 17;
// if (idade >= 18) {
//     console.log("A pessoa é maior de idade")
// } else {
//     console.log("Jovem")
// }
//5. Crie um algoritmo que recebe a idade de Manu, Ana e Ronald e imprime quem é a mais nova no formato:
// "Pessoa" é a mais nova.
// let idade1 = 15;
// let idade2 = 20;
// let idade3 = 99;
// if (idade1 < idade2 && idade1 < idade3) {
//     console.log("A mais jovem é a Manu")
// } else if (idade2 < idade1 && idade2 < idade3) {
//     console.log("A mais jovem é a Ana")
// } else if (idade3 < idade1 && idade3 < idade2) {
//     console.log("O mais jovem é o Ronald")
// }