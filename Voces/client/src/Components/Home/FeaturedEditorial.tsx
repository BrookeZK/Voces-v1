import React from 'react';
import '../../CSS/Featured.css';
import { HashLink as Link } from 'react-router-hash-link';

export default function FeatureEditorial() {

  const style = {
    fontSize: "25px"
  }

  return (
    <div className="editorialFeatured">
      <div className="editorial-feature-content">
        <h1>Trauma en los niños que no saben si sus padres van a regresar</h1>
        <em style={style}>Una entrevista con <strong>Kat Kelley</strong>, directora de Iniciativas Estratégicas de Caridades Católicas de Oregon.</em><br></br><br></br>
        <p style={style} className="hoverEffect"><Link className="link" to='/editorial#nav'><strong>>> Leer Más >></strong></Link></p>
      </div>  
    </div>
  )
}