const productsdb = require('../../models').tb_productos;

const getAllProducts = async(req, res) => {

    await productsdb.findAll()
        .then(data => {
            return res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al consultar los productos"
            });
        });

    // const products = await productsdb.findAll();

    // if (products.length <= 0) {
    //     return res.status(404).json({
    //         status: 'error',
    //         message: 'no products found'
    //     });
    // }

    // return res.status(200).json(products);

}

const getProductById = async(req, res) => {

    const id = +req.params.id;

    await productsdb.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: "No se encontró el producto"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al consultar el producto"
            });
        });

    // const id = +req.params.id;
    // console.log(id);
    // const product = await productsdb.findOne({ where: { id: id } });
    // console.log(product)

    // if (product == null) {
    //     return res.status(404).json({
    //         status: 'error',
    //         message: 'no product found'
    //     });
    // }

    // return res.status(200).json(product);
};

const createProduct = async(req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "La solicitud está vacía"
        });
        return;
    }

    const product = {
        name: req.body.name,
        detail: req.body.detail,
        price: req.body.price,
        category: req.body.category,
        isnew: req.body.isnew,
        issale: req.body.issale,
        imgsrc: req.body.imgsrc
    };

    await productsdb.create(product)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al crear el producto"
            });
        });
}

const updateProduct = async(req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "La solicitud está vacía"
        });
        return;
    }

    console.log(req.body.id);

    await productsdb.update(req.body, {
            where: { id: req.body.id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Los datos del producto fueron actualizados"
                });
            } else {
                res.send({
                    message: "No se pudo actualizar los datos del producto"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al actualizar los datos del producto"
            });
        });
}

const deleteProductById = async(req, res) => {
    const id = req.query.id;
    await productsdb.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.status(200).send();
            } else {
                res.status(500).send({
                    message: "No se pudo eliminar el producto"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar el producto"
            });
        });
}


const deleteAllProducts = async(req, res) => {
    await productsdb.destroy({
            where: {},
            truncate: false
        })
        .then(nums => {
            res.send({ message: `${nums} Productos eliminados exitosamente!` });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al eliminar todos los productos"
            });
        });
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProductById,
    deleteAllProducts
};