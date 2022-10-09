import * as fs from 'fs';

let parametro: string= process.argv[2];

fs.readFile(parametro, "utf-8", (error,data)=>{
    if (error){
        console.log(error.message);

    }
    console.log(data);

});

//Para ejecutar escribir en la terminal npm start nombreDelArchivo.txt