console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const db = require('./database')
const input = require('readline-sync')

//Listar no console uma tabela contendo os produtos em ordem crescente de preço (do menor ao maior).
console.log('--------------- Listando os produtos em ordem crescente de preço: ---------------');

const { produtos:products } = db

products.sort((a, b) => a.preco - b.preco)

console.table(products);

console.log('***********************************************************************************************************************');


//Receber via terminal as entradas de id e quantidade dos produtos a serem adquiridos.
const id = parseInt(input.question("Digite a id do produto: "))
const quantity = parseInt(input.question("Quantidade: "))

const hasDiscount = parseInt(input.question("Possui cupom de desconto? De quanto? "))
