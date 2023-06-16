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

//Read



//Delete