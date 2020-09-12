console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const db = require('./database')
const input = require('readline-sync')

//Listar no console uma tabela contendo os produtos em ordem crescente de preço (do menor ao maior).

console.log('--------------- Listando os produtos em ordem crescente de preço: ---------------');

const { produtos:products } = db

products.sort((a, b) => a.preco - b.preco)

console.table(products)

console.log('***********************************************************************************************************************');


let id = parseInt(input.question("Digite a ID do produto que deseja: "))
let productChoose = products.find(item => item.id === id)
let quantity;
let hasDiscount;
let discount;
let shoppingCart = new Array()