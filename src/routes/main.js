const express = require("express");
const router = express.Router();

// requiero los métodos del controlador al que responde este router //
const { index, about, contact, music, admin, login, noEntry } = require("../controllers/mainController");

//requiero el middleware que cree en accesAdmin.js y lo guardo en una variable con el mismo nombre//
const accessAdmin = require("../middlewares/accessAdmin");


// creo el router con las rutas para cada uno de los elementos del navbar que cree en la vista header. Además a cada una de esas rutas le asigno un método del controlador que se hará cargo de las peticiones (en este caso mainController) y que lo tengo importado en la línea 3 //
router
     .get("/", index)
     .get("/about", about)
     .get("/contact", contact)  
     .get("/music", music)
     .get("/admin", accessAdmin, admin) // implemento el middleware "accessAdmin" //
     .get("/login", login)
     .get("/noEntry", noEntry)

module.exports = router; 