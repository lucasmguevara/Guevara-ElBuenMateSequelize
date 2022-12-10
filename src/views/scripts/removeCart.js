function removeCart(product) {
    const price = document.getElementById(product).getAttribute('price');
    const image = document.getElementById(product).getAttribute('image');

    const productInfo = {
        name: product,
        price: price,
        image: image,
        qty: 1
    }
    updateNegativeCart(productInfo)
}

function removeItemFromCart(product) {

    const price = document.getElementById(product).getAttribute('price');
    const image = document.getElementById(product).getAttribute('image');

    const productInfo = {
        name: product,
        price: price,
        image: image,
        qty: 1
    }
    deleteFromCart(productInfo)
}