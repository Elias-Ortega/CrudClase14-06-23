//ES 6
import fs from 'fs';
import { Persona } from './nombre.js';
//ES5
//require

//CRUD  en Node con Javascript nombres
//Create con cadenas
const createCad = (persona) => {
  let datos = fs.readFileSync('EstamosProbando.txt', 'utf-8');
  datos = datos + '\n' + persona.nombre;
  console.log(datos);
  fs.writeFileSync('EstamosProbando.txt', datos)
}

//create con arreglos
const createArr = (persona) => {
  let datos = fs.readFileSync('EstamosProbando.txt', 'utf-8');
  datos.replace('\r', '');//limpiando la cadena de \r y dejando solamente \n
  datos = datos.split('\n');// aca empezamos a usarlo  como arreglo 
  datos.push(persona.nombre);
  datos = datos.join('\n');
  fs.writeFileSync('EstamosProbando.txt', datos);
}

//Read Generico standard (lectura del archivo)
const readAll = () => {
  let datos = fs.readFileSync('EstamosProbando.txt', 'utf-8');
  datos.replace('\r', '');
  datos = datos.split('\n');
  return datos;
}
/* const readName = (nombre) => {  //el read puede tener variaciones, por ejemplo leer por nombre, o por Id,  o por comuna.
} */

//Update
const update = (nombreAntiguo, nombreNuevo) => {
  let datos = fs.readFileSync('EstamosProbando.txt', 'utf-8');
  datos.replace('\r', '');
  datos = datos.split('\n');
  //indexOf()
  const indiceACambiar = datos.indexOf(nombreAntiguo);
  console.log(indiceACambiar);
  //splice(indiceDesde, cantidad)
  datos.splice(indiceACambiar, 1, nombreNuevo)//el splice retorna el dato que se elimina o se cambia
  datos = datos.join('\n');
  fs.writeFileSync('EstamosProbando.txt', datos);
}
update('Francisco', 'Daniel');
//Delete