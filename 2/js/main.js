class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
    }
    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ];
    }

    getSumOfPrice() {
        return this.goods.reduce((s, i) => s = s + i.price, 0)
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObject = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }
}

class ProductItem {
    constructor(product, img = 'https://placehold.it/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }
    render() {
        return `<div class='product' key='${this.id}'>
        <img alt='product' src="${this.img}">
        <p>${this.title}</p>
        <strong class='price'>${this.price}</strong>
        <button class='addToCart'>Купить</button>
    </div>`
    }
}

let list = new ProductsList();
list.render();

class Cart {
    addElem() { }
    deleteElem() { }
}
class CartElem {
    render() {

    }
}