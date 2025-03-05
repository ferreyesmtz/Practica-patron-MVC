import React, { useState } from "react";
import ProfesorController from "../controllers/ProfesorController";
import Profesor from "../models/Profesor";

const ProfesorView = () => {
    const [message, setMessage] = useState("");


    // Esta funcion maneja el evento de solicitar una laptop por el controlador
    const solicitarLaptop = async () => {
        const profesor = new Profesor("Dr. Santiago", "A01643411");
        const result = await ProfesorController.solicitarLaptop(profesor);
        setMessage(result.message);
    };

    return (
        <div>
            <h2>Profesor - Solicitar Laptop</h2>
            <button onClick={solicitarLaptop}>Solicitar Laptop</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ProfesorView;
