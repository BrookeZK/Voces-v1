import React from 'react';
import NavGeneral from '../NavGeneral';
import Footer from '../Footer';
import children from '../../assets/children.jpg';
import '../../CSS/EditorialPage.css';

export default function EditorialPage() {
  return (
    <div className="main-content">
      <div id="content-wrapper">
        <NavGeneral />
        <div className="center-editorial">
          <div className="editorial-content">
            <h1 className="editorial-title edtorial-padding"><em>Trauma en los niños que no saben si sus padres van a regresar</em></h1>
            <h2 className="editorial-subtitle edtorial-padding">Una entrevista con <strong>Kat Kelley</strong>, directora de Iniciativas Estratégicas de Caridades Católicas de Oregon.</h2>
            <img id="hero-image" src={children} alt="children" />
            <p className="img-text">Niños en la escuela. ¿Cómo es no saber adónde están tus padres, ni adónde vas? <span className="img-src">Angie Angeles/El Centinela</span></p>
            <h4 className="editorial-author">Por Rocio Rios</h4>
            <div className="date-share">
              <p>26 Julio, 2019</p>
              <div>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
              </div>
            </div>
          </div>
        </div>
        <div >

        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </div>
  )
}