const valorCusto = 10 * 0.80
const valorVenda = 20
let lucro = (valorVenda - valorCusto) * 1000;
if (valorCusto < 0 || valorVenda < 0) {
    console.log("Erro")

} else {
    console.log(lucro)
}