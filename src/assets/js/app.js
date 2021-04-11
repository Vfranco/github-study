import { MyClass } from './classes.js';


let librerias = ["Lib1", "Lib2", "Lib3"];
let dependencies = ["dev1", "dev2", "dev3"];

function importsLibs(...libs) {//rest
    console.log(libs);
}


//librerias.forEach(lib => importsLibs(lib));
importsLibs(librerias, dependencies);

function spreadOperator(array) {
    console.log(...array);
    [...array].forEach(number => console.log(number));
}

let miArray = [1, 2, 4, 5];
spreadOperator(miArray);

let obj =  new MyClass("Hilca");
obj.sayHi();