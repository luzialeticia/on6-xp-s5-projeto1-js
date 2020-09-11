console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const db = require('./database')
const input = require('readline-sync')

//Listar no console uma tabela contendo os produtos em ordem crescente de preço (do menor ao maior).
console.log('--------------- Listando os produtos em ordem crescente de preço: ---------------');

const { produtos:products, produtos: [{ preco:price }] } = db
/*Eu pesquisei como fazer a desestruturação acima pra colocar os nomes em inglês.
Achei e apliquei, mas não sei pq não funciona pro preco:price */

products.sort((a, b) => a.preco - b.preco)

console.table(products)

console.log('***********************************************************************************************************************');


//Receber via terminal as entradas de id e quantidade dos produtos a serem adquiridos.
const id = Number(input.question("Digite a id do produto: "))
const quantity = Number(input.question("Quantidade: "))

//const hasDiscount = parseInt(input.question("Possui cupom de desconto? De quanto? "))

const productChoose = products.find(item => item.id === id)

console.table(productChoose);

const total = productChoose.preco*quantity

console.log(total);
