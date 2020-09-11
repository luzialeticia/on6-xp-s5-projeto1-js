console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const db = require('./database')

//Listar no console uma tabela contendo os produtos em ordem crescente de preço (do menor ao maior).
console.log('--------------- Listando os produtos em ordem crescente de preço: ---------------');

const { produtos:products } = db

products.sort((a, b) => a.preco - b.preco)

console.table(products);

console.log('***********************************************************************************************************************');