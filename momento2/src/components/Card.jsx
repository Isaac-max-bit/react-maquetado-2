import React from "react";
import Button from './Button.jsx';
const Card = () => {
    return (

        <div className="card">
            <input className="input-card" type="Text" placeholder="Correo" />
         
           
            <Button/>   

            <h3 className="enlace-card">Buscar Producto</h3>
        </div>

    );
}

export default Card;