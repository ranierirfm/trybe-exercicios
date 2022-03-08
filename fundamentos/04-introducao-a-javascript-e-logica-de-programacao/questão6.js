// Escreva um programa que receba o nome de 
// uma peça de xadrez e retorne os movimentos que ela faz.
let pecaXadrez = "cavAlo";
pecaXadrez = pecaXadrez.toLowerCase();

if (pecaXadrez === "bispo") {
    console.log("diagonal");
} else if (pecaXadrez === "peão") {
    console.log("1casa");
} else if (pecaXadrez === "cavalo") {
    console.log("andar em L");

}