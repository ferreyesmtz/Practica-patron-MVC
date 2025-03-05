import React, { useEffect, useState } from "react";
import UserController from "../controllers/UserController";

const UserSelection = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);

  // Esta funcion obtiene todos los usuarios de la base de datos por el controlador
  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await UserController.obtenerUsuarios();
      console.log("Usuarios obtenidos desde Firebase:", usersData); 
      setUsers(usersData);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Select User</h2>

      {users.length === 0 ? <p>Loading users...</p> : null}

      {["profesor", "administrador", "estudiante"].map((role) => (
        <div key={role}>
          <h3>{role.charAt(0).toUpperCase() + role.slice(1)}s</h3>
          {users
            .filter(user => user.rol === role)
            .map((user) => (
              <button key={user.id} onClick={() => onSelectUser(user)}>
                {user.nombre}
              </button>
            ))}
        </div>
      ))}
    </div>
  );
};

export default UserSelection;
