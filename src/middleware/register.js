const { body } = require("express-validator")
const users = require('../database/dbUsers.json');

module.exports = [
    body('username').notEmpty().withMessage('Campo obligatorio').bail().isLength({ min: 6 }).withMessage('Debe tener al menos 6 caracteres'),
    body('email').notEmpty().withMessage('Campo obligatorio').bail().isEmail(),
    body('password').notEmpty().withMessage('Campo obligatorio').bail().isLength({ min: 6 }).withMessage('Debe tener al menos 6 caracteres').isAlphanumeric(),
    body('confirmPassword').notEmpty().withMessage('Campo obligatorio').bail().isLength({ min: 6 }).withMessage('Debe tener al menos 6 caracteres').isAlphanumeric()
    .custom(async(confirmPassword, { req }) => {
        const password = req.body.password
        if (password !== confirmPassword) {
            throw new Error('Las contraseñas no coinciden')
        }
    })
]