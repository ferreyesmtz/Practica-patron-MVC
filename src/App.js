

import React, { useState } from "react";
import "./App.css";
import UserSelection from "./views/UserSelection";
import LibraryView from "./views/LibraryView";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Library System</h1>
        {selectedUser ? (
          <LibraryView user={selectedUser} />
        ) : (
          <UserSelection onSelectUser={setSelectedUser} />
        )}
      </header>
    </div>
  );
}

export default App;



/*
import React, { useState } from "react";
import "./App.css";
import UserSelection from "./views/UserSelection";
import LibraryView from "./views/LibraryView";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Library System</h1>
        {selectedUser ? (
          <LibraryView user={selectedUser} />
        ) : (
          <UserSelection onSelectUser={setSelectedUser} />
        )}
      </header>
    </div>
  );
}

export default App;
*/



/*
import React from "react";
import "./App.css";
import LibroList from "./views/LibroList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Libros</h1>
        <LibroList />
      </header>
    </div>
  );
}

export default App;
*/

/*
import React from "react";
import "./App.css";
import ProfesorView from "./views/ProfesorView";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gestión de Laptops para Profesores</h1>
        <ProfesorView />
      </header>
    </div>
  );
}

export default App;
*/