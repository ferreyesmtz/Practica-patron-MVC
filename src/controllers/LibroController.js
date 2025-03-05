import { db } from '../firebaseConfig.js';
import { collection, getDocs, addDoc, doc, updateDoc } from "firebase/firestore";
import Libro from "../models/Libro.js";

class LibroController {
  // Esta funcion agrega un libro a la base de datos
    static async agregarLibro(libro) {
        try {
            const docRef = await addDoc(collection(db, "Libros"), {
                titulo: libro.titulo,
                autor: libro.autor,
                genero: libro.genero,
                estado: libro.estado
            });

            console.log("Se agregó el libro con el ID: ", docRef.id);
        } catch (error) {
            console.error("Error al agregar el libro: ", error);
        }
    }

    // Esta funcion obtiene todos los libros de la base de datos
    static async obtenerLibros() {
        try {
            const querySnapshot = await getDocs(collection(db, "Libros"));
            return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.error("Error al obtener libros: ", error);
            return [];
        }
    }

    // Esta funcion solicita un libro de la biblioteca
  static async devolverLibro(id) {
    try {
      const bookRef = doc(db, "Libros", id);
      await updateDoc(bookRef, { estado: "Disponible", usuario: null });
      console.log("Libro devuelto.");
    } catch (error) {
      console.error("Error al devolver libro:", error);
    }
  }
}

export default LibroController;
