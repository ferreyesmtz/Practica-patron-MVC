// Clase del profesor


class Profesor {
    constructor(nombre, matricula){

        this.nombre = nombre;
        this.matricula = matricula;
    }

    // no se puede hacer desde usuario?


    solicitarLaptop(){

        console.log("Solicitando laptop");

    }
}

// class Profesor extends Usuario {
//     solicitarLaptop() {
//         console.log("Solicitando laptop");
//     }
// }

export default Profesor;