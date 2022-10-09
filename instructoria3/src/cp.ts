import * as fs from 'fs';
import * as path from 'path';

//ruta de origen
const filepathOrigen = path.resolve(__dirname, process.argv[2]);

// leyendo el archivo de destino
const data = fs.readFileSync(filepathOrigen, 'utf-8')
try {
    //ruta de destino
    const filepathDestino = path.resolve(__dirname, process.argv[3]);
    fs.writeFileSync(filepathDestino, data);
}catch {
    // en caso no se haya proporcionado archivo de destino
    const fileextent: string = path.extname(path.basename(filepathOrigen))
    const fileName: string = path.basename(filepathOrigen)
    const filepathDestino = filepathOrigen.replace(fileName, fileName.split(".")[0]+"-Copy"+fileextent)
    fs.writeFileSync(filepathDestino, data);
}
//Para ejecutar el programa use el siguiente comando:
//npm run --silent cp RUTAORIGEN RUTADESTINO