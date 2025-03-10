import { db } from '../firebaseConfig.js';
import { collection, getDocs, addDoc, doc, updateDoc } from "firebase/firestore";

class LibroDAO {
  static async agregarLibro(libro) {
    try {
      const docRef = await addDoc(collection(db, "Libros"), {
        titulo: libro.titulo,
        autor: libro.autor,
        genero: libro.genero,
        estado: libro.estado
      });
      return docRef.id;
    } catch (error) {
      console.error("Error al agregar el libro: ", error);
      throw error;
    }
  }

  static async obtenerLibros() {
    try {
      const querySnapshot = await getDocs(collection(db, "Libros"));
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error("Error al obtener libros: ", error);
      throw error;
    }
  }

  static async devolverLibro(id) {
    try {
      const bookRef = doc(db, "Libros", id);
      await updateDoc(bookRef, { estado: "Disponible", usuario: null });
      return true;
    } catch (error) {
      console.error("Error al devolver libro:", error);
      throw error;
    }
  }
}

export default LibroDAO;