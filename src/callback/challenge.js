/**
 * UNa vez intalada la dependencia debemos instanciarla
 */
let XMLHttpRequest=require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api,callback) {
    //Creamos la instancia del objeto
    let xhttp=XMLHttpRequest();
    /**
     * Hacemos un llamado a la url
     * open: Recibe como parametro el metodo http, la url, si se va a anejar de manera asincrona, si queremos lo agregamos ya que por defecto esta en true
     */
    xhttp.open('GET',url_api,true);
    /**
     * Generar o escucha lo que va a hacer esa conexion
     */
    xhttp.onreadystatechange=function (event) {
        //validacion de estado de la peticion
        if (xhttp.readystate===4) {// request finished and response is ready
            if (xhttp.status===200) {//"OK"
            /**
             * El estandar es que el primer parametro es un error y el segundo la informacion.
             * Recordar que la informacion viene en un archivo de texto  
             * por lo tanto hay que parsear la informacion a JSON
             *  */  
            callback(null,JSON.parse(xhttp.responseText));   
            }else{
                const error=new Error(`Error ${url_api}`);
                return callback(error,null);
            }
        }
    }
    //Envio de la solicitud
    xhttp.send();
}
