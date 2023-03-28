import React from "react";
import '../styles/Testimonio.css'

function Testimonio(props) {
  return(
    <div className="contenedor-testimonio">
      <img className="image-testimonio" 
        src={require(`../imgs/testimonio-${props.image}.jpg`)} 
          alt="Foto de CJ" />
          <div className="contenendor-text-testimonio">
            <p className="nombre-testimonio">
            <strong>{props.name}</strong>en <strong>{props.country}</strong>
            </p>
            <p className="cargo-testimonio">
            <strong>{props.cargo}</strong> en <strong>{props.enterprise}</strong>.</p>
            <p className="texto-testimonio">"{props.description}"</p>
          </div>
    </div>
  );
}

// SE DEBE TENE INFORMACION DE EXPORTACION PARA USAR UN COMPONENTE POR MEDIO DE EXPORT 
export default Testimonio;