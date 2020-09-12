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



//Variáveis que serão utilizadas
let idProduct;
let chosenProduct;
let quantity;
let hasDiscount;
let valueDiscount;
const shoppingCart = new Array()


//Classe
class Order {
    constructor(listProducts, CouponValue) {
        this.produtos = listProducts //array shopping cart
        this.desconto = CouponValue
        //this.data = new date()
        this.total = 0
    }
    
    /*totalItens() {
    
    }
    
    totalWithoutDiscount() {
    
    }
    
    totalWithDiscount() {
    
    }*/
}

//Pergunta id do produto
let id = parseInt(input.question("Digite a ID do produto que deseja: "))
let productChoose = products.find(item => item.id === id)
    while(productChoose === undefined) {
        id = parseInt(input.question("Produto não encontrado. Digite um ID correto: "))
        productChoose = products.find(item => item.id === id)
    }
console.log(`${productChoose.nome} adicionado ao carrinho.`);

//Pergunta quantidade
let quantity = parseInt(input.question("Quantos itens deseja adicionar ao carrinho: "))
    while(quantity <= 0) {
        quantity = parseInt(input.question("Quantidade inválida. Digite um valor maior que 0: "))
    }
console.log(`${quantity} ${productChoose.nome} adicionados.`);

const continueShopping = input.question("Deseja continuar comprando (S/N): ")
    if(continueShopping === 'N' || continueShopping === 'n') {
        addToCart()
        console.log(``);
    }


let hasDiscount
let discount;
let shoppingCart = new Array()


//Função que adicionando itens ao carrinho
const addToCart = () => {
    const item = new Object()
    item.name = productChoose.nome
    item.price = productChoose.preco
    item.quantity = quantity

    return shoppingCart.push(item)
}