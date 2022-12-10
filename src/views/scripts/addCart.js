function addCart(product) {
    const price = document.getElementById(product).getAttribute('price');
    const image = document.getElementById(product).getAttribute('image');

    const productInfo = {
        name: product,
        price: price,
        total: 0,
        image: image,
        qty: 1
    }
    updateCart(productInfo)
}