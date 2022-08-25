// creo un middleware que realizará la verificación de usuarios para saber cuáles son administradores y cuales no y en base a eso dará acceso a diferentes partes de la página. Luego de creado lo implemento en el enroutador (routes) main dentro de la ruta admin. //

const { admin } = require("../controllers/mainController");

let admins = [ "Greta", "Ada", "Tim", "Vim"]; //creo una lista de administradores//

module.exports = (req, res, next) => { 
    if (admins.includes(req.query.user)){  //creo un condicional que utilizando el método includes, chequea si la información del query (lo que ingresa el usuario por formulario) en el atributo user incluye a  algun nombre de la lista admins. Si hay coincidencia ejecuta next() y lo deja pasar. De no ser así redirecciona a la persona a la vista noEntry// 
        next();  
    } else {
        res.redirect("/noEntry")
    }
}