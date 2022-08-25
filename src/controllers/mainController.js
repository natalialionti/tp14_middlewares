// creo un objeto literal (y lo exporto con module.exports) que contenga todos los métodos que van a utilizar las diferentes rutas que cree en el enroutador main (va al enroutador main porque este es el mainController. Una vez hecho esto, creo las vistas EJS para cada una de las rutas) //

module.exports = {

    index : (req, res) => {
    return res.render("index")
    },

    about : (req, res) => {
        return res.render("about")
        },

    contact : (req, res) => {
        return res.render("contact")
        },

    music : (req, res) => {
        return res.render("music")
        },
    
    admin : (req, res) => {
        return res.render("admin", {  
            user: req.query.user } ) // como segundo parámetro envío lo que el usuario ingresa por formulario en el atributo user (para eso utilizo el req.query.user). Luego, esta información la voy a utilizar (mediante una etiqueta EJS) en la vista admin.ejs para mostrar por pantalla el nombre de quien está ingresando a la página //
        },
    
    noEntry : (req, res) => {
            return res.render("noEntry")
            },

    login : (req, res) => {
        return res.render("login")
        },
}