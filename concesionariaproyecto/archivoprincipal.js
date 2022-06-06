let autos = require ('./autos')

const concesionaria = {

   venderAuto : function (patenteABuscar){
       const buscarPatente = autos.find(
           patente => patente === patenteABuscar);
       buscarPatente ? autos.vendido == true :                            autosModulo.vendido == false;
       return buscarAuto;
   },
   autos : autos,
   buscarAuto : function (patenteABuscar){
    const buscarAuto = autos.forEach(function (dato){
        if (patenteABuscar === dato){
            return dato;
         } else {
            return null
         }
    })
 }
};

concesionaria.buscarAuto("SDS234");

/*if (autos.indexOf(patenteABuscar != 1)){
    return dato;
} else {
    return null;
} */