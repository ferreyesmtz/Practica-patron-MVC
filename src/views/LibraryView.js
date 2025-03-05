import React, { useEffect, useState } from "react";
import LibroController from "../controllers/LibroController";
import EstudianteController from "../controllers/EstudianteController";

const LibraryView = ({ user }) => {
  
  const [libros, setLibros] = useState([]);
  const [message, setMessage] = useState("");

  // Esta funcion obtiene todos los libros de la base de datos por el controlador
  useEffect(() => {
    const fetchLibros = async () => {
      const librosData = await LibroController.obtenerLibros();
      setLibros(librosData);
    };
    fetchLibros();
  }, []);

  // Esta funcion maneja el evento de pedir un libro por el controlador
  const handleBorrowBook = async (id, titulo) => {
    const result = await EstudianteController.solicitarLibro(user, id, titulo);
    setMessage(result.message);
    setLibros(await LibroController.obtenerLibros());
  };

  // Esta funcion maneja el evento de devolver un libro por el controlador
  const handleReturnBook = async (id) => {
    const result = await EstudianteController.devolverLibro(id);
    setMessage(result.message);
    setLibros(await LibroController.obtenerLibros());
  };

  return (
    <div>
      <h2>Welcome, {user.nombre} ({user.rol})</h2>
      {message && <p>{message}</p>}

      <h3>Available Books</h3>
      <ul>
        {libros.map((libro) => (
          <li key={libro.id}>
            {libro.titulo} - {libro.autor} ({libro.genero}) [{libro.estado}]
            
            {user.rol === "estudiante" && libro.estado === "Disponible" && (
              <button onClick={() => handleBorrowBook(libro.id, libro.titulo)}>Pedir</button>
            )}

            {user.rol === "estudiante" && libro.estado === "Prestado" && libro.usuario === user.nombre && (
              <button onClick={() => handleReturnBook(libro.id)}>Devolver</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LibraryView;
