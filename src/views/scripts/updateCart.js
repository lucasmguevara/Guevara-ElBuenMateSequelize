function updateCart (product) {
            let carrito = [];
            const miLocalStorage = window.localStorage;
            console.log()


            if (miLocalStorage.getItem('carrito') !== null) {
                // Carga la información
                carrito = JSON.parse(miLocalStorage.getItem('carrito'));
            }     

            const result = carrito.find(item => item.name === product.name);

            if(result){
                const carritoUpd = carrito.map(item => {
                    if(item.name === product.name){
                       return {...item, total: (+item.price * (+item.qty + 1)), qty : (item.qty + 1) } 
                    }
                    return item;
                    })        
                    carrito = carritoUpd;        
            }
            else {
                product.total = +product.price;
                carrito.push(product);   
            }

            
            miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function updateNegativeCart (product) {
    let carrito = [];
    const miLocalStorage = window.localStorage;
    console.log()


    if (miLocalStorage.getItem('carrito') !== null) {
        // Carga la información
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }     

    const result = carrito.find(item => item.name === product.name);

    if(result){
        const carritoUpd = carrito.map(item => {
            if(item.name === product.name){
                if(+item.qty > 0){
                    return {...item, total: (+item.price * (+item.qty - 1)), qty : (item.qty - 1) }
                }                          
            }
            return item;            
            })        
            carrito = carritoUpd;        
    }

    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function deleteFromCart (product) {
    let carrito = [];
    const miLocalStorage = window.localStorage;
    console.log()


    if (miLocalStorage.getItem('carrito') !== null) {
        // Carga la información
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }     

    const result = carrito.find(item => item.name === product.name);

    if(result){
        const carritoUpd = carrito.filter(item => item.name !== product.name);        
            carrito = carritoUpd;        
    }

    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}