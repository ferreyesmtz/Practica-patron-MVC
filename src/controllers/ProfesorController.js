import { db } from "../firebaseConfig";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

class ProfesorController {
    // Esta funcion solicita una laptop para un profesor
    static async solicitarLaptop(profesor) {
        try {
         
            const querySnapshot = await getDocs(collection(db, "Laptops"));
            let laptopDisponible = null;
            let laptopId = null;

            // Buscar una laptop disponible
            querySnapshot.forEach((docSnap) => {
                if (docSnap.data().estado === "Disponible") {
                    laptopDisponible = docSnap.data();
                    laptopId = docSnap.id;
                }
            });

            if (!laptopDisponible) {
                return { success: false, message: "No hay laptops disponibles." };
            }

     // Actualizar el estado de la laptop a prestado y asignar el profesor
            const laptopRef = doc(db, "Laptops", laptopId);
            await updateDoc(laptopRef, { 
                estado: "Prestado",
                profesorAsignado: profesor.nombre
            });

            return { success: true, message: `Laptop ${laptopDisponible.modelo} asignada a ${profesor.nombre}.` };
        } catch (error) {
            return { success: false, message: "Error al solicitar laptop." };
        }
    }
}

export default ProfesorController;
