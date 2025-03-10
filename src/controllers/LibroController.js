import LibroDAO from '../dao/LibroDao.js';

class LibroController {
  static async agregarLibro(libro) {
    try {
      const id = await LibroDAO.agregarLibro(libro);
      console.log("Se agregó el libro con el ID: ", id);
    } catch (error) {
      console.error("Error al agregar el libro: ", error);
    }
  }

  static async obtenerLibros() {
    try {
      return await LibroDAO.obtenerLibros();
    } catch (error) {
      console.error("Error al obtener libros: ", error);
      return [];
    }
  }

  static async devolverLibro(id) {
    try {
      await LibroDAO.devolverLibro(id);
      console.log("Libro devuelto.");
    } catch (error) {
      console.error("Error al devolver libro:", error);
    }
  }
}

export default LibroController;
