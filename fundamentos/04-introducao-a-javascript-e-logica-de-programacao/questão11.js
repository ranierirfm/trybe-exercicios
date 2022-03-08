let salario = 3000.00
let inss = 0;
let ir = 0;

if (salario <= 1556.95) {
    salario = salario * 0.8
} else if (salario > 1556.95 && salario < 2594.92) {
    salario = salario * 0.9
} else if (salario > 2594.93 && salario < 5189.82) {
    salario = salario * 1.1
} else if (salario > 5189.82) {
    salario = salario + 570.88
}
console.log(salario)