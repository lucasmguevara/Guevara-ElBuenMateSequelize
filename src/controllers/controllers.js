const { validationResult } = require("express-validator");
const fs = require('fs');
const bcrypt = require('bcrypt');

const { readProducts, readProduct } = require("../middleware/products")

let dbUsers = fs.readFileSync('src/database/dbUsers.json', 'utf-8')
let users = JSON.parse(dbUsers)

const productsdb = require('../../models').tb_productos;
const usersDB = require('../../models').tb_usuarios;

const home = (req, res) => {
    var username = "";

    if (req.cookies.userData != undefined)
        username = req.cookies.userData.username;

    res.render('home.ejs', {
        username
    });


};

const login = (req, res) => {
    var errors = [];
    res.render('login.ejs', {
        errors
    });
};

// const processLogin = (req, res) => {

//     const errors = validationResult(req)
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }

//     req.session.username = req.body.username

//     console.log(req.session.username)
//     const { username, password } = req.body
//     res.cookie('userData', { username, password }, {
//         expires: new Date(Date.now() + 900000),
//         httpOnly: true,
//     });
//     console.log(req.sessionID)
//     console.log(req.cookies['connect.sid'])
//     console.log(req.cookies.userData)

//     return res.redirect('/home')

// };

const processLogin = async(req, res) => {
    var errors = [];
    try {
        validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            validations = validationErrors.array();
            errors.push(validations[0].param + ": " + validations[0].msg);
            return res.render('login', { errors });
        }

        const { username, password } = req.body
        console.log("El usuario es: " + username);
        console.log("El password es: " + password);

        const user = await usersDB.findOne({ where: { username: username } });

        if (user == null) {
            errors.push("Usuario y/o contraseña inválidas");
            return res.render('login', { errors });
        }

        const checkPassword = bcrypt.compareSync(password, user.password)
        if (!checkPassword) {
            errors.push("Usuario y/o contraseña inválidas");
            return res.render('login', { errors });
        }

        req.session.username = req.body.username
        res.cookie('userData', { username, password }, {
            expires: new Date(Date.now() + 900000),
            httpOnly: true,
        });
        console.log(req.sessionID)
        console.log(req.cookies['connect.sid'])
        console.log(req.cookies.userData)

        return res.redirect('/home')

    } catch (error) {
        errors.push("Error al iniciar sesión. Intente nuevamente");
        return res.render('login', { errors });
    }
};

const register = (req, res) => {
    var errors = [];
    res.render('register.ejs', {
        errors
    });
};

// const processRegister = (req, res) => {
//     const errors = validationResult(req)
//     if (!errors.isEmpty()) {
//         return res.json(errors)

//     }

//     const { userName, email, password } = req.body
//     const passwordHashed = bcrypt.hashSync(password, 10)

//     let newUser = {
//         userName,
//         email,
//         password: passwordHashed
//     }

//     users.push(newUser)

//     let userDb = JSON.stringify(users)
//     fs.writeFileSync('src/database/dbUsers.json', userDb, 'utf-8')


//     res.redirect('/login')
// };

const processRegister = async(req, res) => {
    var errors = [];
    try {


        validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            validations = validationErrors.array();
            errors.push(validations[0].param + ": " + validations[0].msg);
            return res.render('register.ejs', { errors });
        }

        console.log("Datos ok")

        const { username, email, password } = req.body
        const passwordHashed = bcrypt.hashSync(password, 10)

        const usernameValid = await usersDB.findOne({ where: { username: username } });

        if (usernameValid != null) {
            errors.push("El nombre de usuario ya está registrado");
            return res.render('register.ejs', { errors });
        }


        let user = await usersDB.create({ username: username, email: email, password: passwordHashed, admin: false })

        req.session.username = req.body.username
        res.cookie('userData', { username, password }, {
            expires: new Date(Date.now() + 900000),
            httpOnly: true,
        });
        console.log(req.sessionID)
        console.log(req.cookies['connect.sid'])
        console.log(req.cookies.userData)

        return res.redirect('/home')

    } catch (error) {
        console.log("Error: " + error);
        errors.push("Error al registrarse. Intente nuevamente");
        return res.render('register.ejs', { errors });
    }
};

// const shop = (req, res) => {
//     var username = "";

//     if (req.cookies.userData != undefined)
//         username = req.cookies.userData.username;

//     const products = readProducts();

//     if (products.length <= 0) {
//         return res.status(404).json({
//             status: 'error',
//             message: 'no se encontraron productos'
//         });
//     }

//     res.render('shop.ejs', {
//         username,
//         products
//     });
// };

const shop = async(req, res) => {
    var username = "";

    if (req.cookies.userData != undefined)
        username = req.cookies.userData.username;

    const products = await productsdb.findAll();

    if (products.length <= 0) {
        return res.status(404).json({
            status: 'error',
            message: 'no se encontraron productos'
        });
    }

    res.render('shop.ejs', {
        username,
        products
    });
};

// const productDetail = (req, res) => {
//     var username = "";

//     if (req.cookies.userData != undefined)
//         username = req.cookies.userData.username;

//     const id = +req.params.id;
//     console.log(id);
//     const products = readProduct(id);
//     console.log(products.length)

//     return res.render('productDetail', {
//         username,
//         products
//     });

// };

const productDetail = async(req, res) => {
    var username = "";

    if (req.cookies.userData != undefined)
        username = req.cookies.userData.username;

    const id = +req.params.id;
    console.log(id);
    const product = await productsdb.findOne({ where: { id: id } });
    console.log(product)

    return res.render('productDetail', {
        username,
        product
    });

};

const cart = (req, res) => {
    var username = "";

    if (req.cookies.userData != undefined)
        username = req.cookies.userData.username;

    return res.render('cart', {
        username
    });
};

const logout = (req, res) => {
    console.log(req.cookies.userData)
    res.clearCookie("userData");
    return res.redirect('login');
}

module.exports = {
    home,
    login,
    processLogin,
    register,
    processRegister,
    shop,
    cart,
    productDetail,
    logout
};