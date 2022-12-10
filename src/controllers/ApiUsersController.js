const usersdb = require('../../models').tb_usuarios;
const bcrypt = require('bcrypt');

const adminLogin = async(req, res) => {

    var errors = [];
    try {

        if (req.body == null) {
            return res.status(400).send({
                message: "La solicitud está vacía"
            });
        }

        const { username, password } = req.body
        console.log("El usuario es: " + username);
        console.log("El password es: " + password);

        const user = await usersdb.findOne({ where: { username: username } });

        if (user == null) {
            return res.status(400).send({
                message: "Usuario y/o contraseña inválidas"
            });
        }

        if (!user.admin) {
            return res.status(400).send({
                message: "No tiene permisos para acceder a este sistema"
            });
        }

        const checkPassword = bcrypt.compareSync(password, user.password)
        if (!checkPassword) {
            return res.status(400).send({
                message: "Usuario y/o contraseña inválidas"
            });
        }

        return res.status(200).send();

    } catch (error) {
        console.log("Error: " + error.message);
        return res.status(500).send({
            message: "Error al iniciar sesión"
        });
    }
}

module.exports = {
    adminLogin
};