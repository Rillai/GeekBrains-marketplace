const products = [
    { id: 1, title: 'Notebook', price: 2000 },
    { id: 2, title: 'Mouse', price: 20 },
    { id: 3, title: 'Keyboard', price: 200 },
    { id: 4, title: 'Gamepad', price: 50 },
    { id: 5, title: 'Notebook', price: 2000 },
    { id: 6, title: 'Mouse', price: 20 },
];
const renderProduct = (item) => {
    return `<div class='product' key='${item.id}'>
                <img alt='product' src="${item.img = 'https://sun9-47.userapi.com/c855136/v855136490/106df9/qq0xBKdiZ1o.jpg'}">
                <p>${item.title}</p>
                <strong class='price'>${item.price}</strong>
                <button class='addToCart'>Купить</button>
            </div>`
};
const main = function () {
    document.querySelector('.products').innerHTML = products.map(item => renderProduct(item)).join('');
}()