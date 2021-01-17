/**
 * Una vez instalada la dependencia debemos instanciarla
 */
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/'
function fetchData(url_api, callback) {
    //Creamos la instancia del objeto
  let xhttp = new XMLHttpRequest();

    /**
     * Hacemos un llamado a la url
     * open: Recibe como parametro el metodo http, la url, si se va a anejar de manera asincrona, si queremos lo agregamos ya que por defecto esta en true
     */
    xhttp.open('GET', url_api, true);//abrimos la conexion
    /**
     * Generar o escucha lo que va a hacer esa conexion
     */
    xhttp.onreadystatechange = function (event) {
        //validacion de estado de la peticion
        if (xhttp.readyState === 4) {// request finished and response is ready
            if (xhttp.status === 200) {//"OK"
                /**
                 * El estandar es que el primer parametro es un error y el segundo la informacion.
                 * Recordar que la informacion viene en un archivo de texto  
                 * por lo tanto hay que parsear la informacion a JSON
                 *  */
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                // const error = new Error(`Error ${url_api}`);
                let error = new Error('Error: ' + url_api);

                return callback(error, null);
            }
        }
    }
    //Envio de la solicitud
    xhttp.send();
}

fetchData(API, function (error1, data1) {
    if (error1) return console.log(error1);//en caso de fallo al retornar de una vez provoca que se detenga la ejecusion del codigo
    fetchData(API + data1.results[0].id, function (error2, data2) {
        if (error2) return console.log(error2);//en caso de fallo al retornar de una vez provoca que se detenga la ejecusion del codigo
        fetchData(data2.origin.url, function (error3, data3) {
            if (error3) return console.log(error3);//en caso de fallo al retornar de una vez provoca que se detenga la ejecusion del codigo
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
})