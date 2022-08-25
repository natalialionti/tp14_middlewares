// creo mi middleware que guardará los registros de cada vez que el usuario ingrese a la página. Una vez creado el middleware, voy a requerirlo en el archivo app.js a trevés del método use. Allí, arriba de la línea que contiene al main router, coloco app.use(require(""./middlewares/userLogs")). Lo vemos en el archivo app linea 25 //


//requiero fileSystem para poder utilizar el writeFileSync que me permitirá saber a qué ruta ingresó el usuario //
// requiero path para poder usar el path de la ruta //

const fs = require ("fs");
const path = require ("path");

module.exports = (req, res, next) => {
    fs.appendFileSync(path.join(__dirname, "../logs/userLogs.txt"), "El usuario ingresó a la ruta " + (req.url) + "\n")  //uso el método appendFileSync que me permite escribir sobre el archivo .txt y, utilizando path, pido que ese registro se guarde en userLogs.txt //
    //en el segundo parámetro coloco "El usuario ingresó a la ruta" y le concateno el req.url que me dará la información de todas las rutas a las que ingresó el usuario. Además coloco un "\n" (tener en cuenta que la barra es invertida) para que en el archivo .txt después de cada oración salte al renglón de abajo." //

    next(); // ejecuto next para que se realice el middleware y se siga cragando la página, sino queda pensando //
}