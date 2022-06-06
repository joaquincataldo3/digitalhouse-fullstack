/*
 function haciendoCuentas (numero1){
    let acumulador = 0;
    if (numero1 >= 0){
        for (i = 0; i <= 5; i++){
            acumulador = acumulador + numero1;
        }
    }
    return acumulador;
}

module.exports = haciendoCuentas;

function haciendoArrays(unArray2){
    if (unArray2.length >= 3){
        for (i = 0; i <= 2; i++){
            unArray2.pop()
        }
    } else (
        console.log("No hay suficientes elementos para quitar")
    )
    return unArray2
}

module.exports = haciendoArrays;

const nombres = ["joaquin", "diego", "gael", "andrea"]
module.exports = nombres;

const nombresJson = JSON.stringify(nombres);
module.exports = nombresJson;

const nombresString = JSON.parse(nombresJson);
module.exports = nombresString;


let corredor = {
    nombre : "Jaquin",
    calorias : 300,
    total : function (vueltas){
        let totalCalorias = this.calorias * vueltas;
        return totalCalorias
    }
}

console.log
console.log("este es " + corredor.nombre + "." + "Tiene 23 años y quemó" + corredor.total(5)) + " calorias";
*/
function constructoraAutos (marca, modelo, año){
    this.marca = marca;
    this.modelo = modelo;
    this.año = año
    this.retorno = function(){
        return "Este es un " + marca + " " + modelo + " del año " + año
    }
}

let Volkswagen = new constructoraAutos("BMW", "Serie 3", "2022");
console.log(Volkswagen.retorno());

let personaBoliche = {
    name : "Carlitos",
    edad : 17,
    tieneDNI : true,
    puedePasar : function (){
        if (this.edad >= 18 && this.tieneDNI){
            return "podes pasar capo"
        } else {
            return "te vas"
        }
    }
} 

function PasaBoliche (name, age, hasDNI){
    this.name = name;
    this.age = age;
    this.hasDNI = hasDNI;
    this.puedePasar = function (){
        if (this.age >= 18 && hasDNI){
            return "todo más que piola, pasá"
        } else {
            return "no pasas capo, disculpá"
    }
}
}

let personaBoliche1 = new PasaBoliche("Joaquin", 17, true);
let personaBoliche2 = new PasaBoliche("Carlitos", 18, false);
let personaBoliche3 = new PasaBoliche("Rama", 18, true);

console.log(personaBoliche1.puedePasar());
console.log(personaBoliche2.puedePasar());
console.log(personaBoliche3.puedePasar()); 
