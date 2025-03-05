import { db } from "../firebaseConfig";
import { addDoc, collection, getDocs } from "firebase/firestore";
import User from "../models/User.js";

class UserController {
  static async obtenerUsuarios() {
    try {
      const querySnapshot = await getDocs(collection(db, "Usuarios"));
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      return [];
    }
  }

  static async agregarUsuario(name, matricula) {
    try {
      const newUser = new User(name, matricula);
      const docRef = await addDoc(collection(db, "User"), { ...newUser });
      return { id: docRef.id, ...newUser}
    } catch (error) {
      console.error("No se puedo agregar al usuario");
      return null;
    }
  }
}

export default UserController;
