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
            <h1 className="editorial-title edtorial-padding">Trauma en los niños que no saben si sus padres van a regresar</h1>
            <h2 className="editorial-subtitle edtorial-padding"><em>Una entrevista con <strong>Kat Kelley</strong>, directora de Iniciativas Estratégicas de Caridades Católicas de Oregon.</em></h2>
            <img id="hero-image" src={children} alt="children" />
            <p className="img-text">Niños en la escuela. ¿Cómo es no saber adónde están tus padres, ni adónde vas? <span className="img-src">Angie Angeles/El Centinela</span></p>
            <h4 className="editorial-author">Por Rocio Rios</h4>
            <div className="date-share">
              <p>26 Julio, 2019</p>
              <div>
                <p>social media icons</p>
              </div>
            </div>
            <div className="editorial-article">
              <p>La salud mental de la comunidad es una de las prioridades de Caridades Católicas. Este es el tema de la entrevista con El Centinela, Kat Kelley, directora de Iniciativas Estratégicas de Caridades Católicas de Oregon.</p>
              <p className="bold">E.C. Consejería y salud mental. ¿Cuál es la importancia de este servicio para la comunidad y las familias que enfrentan la separación y la deportación?</p>
              <p><strong>Kat Kelley.</strong> ¡Muy importante! Vamos a hacer anuncios de servicio público con el fin de hablar sobre la salud emocional y utilizar una perspectiva culturalmente apropiada. Comunicamos los mensajes bajo el concepto de la Iniciativa de Salud Mental Latina.</p>
              <p>Trabajamos con las familias para hablar, ayudando a sus hijos a entender sobre lo que sucede si mamá o papá no vuelven a casa. Los apoyamos y compartimos cómo crear ese mensaje para los niños. Se llama mensajería familiar con información sobre el trauma.</p>
              <p className="bold">E.C. ¿Cómo se aborda este tema a la luz de la esperanza para las familias?</p>
              <p><strong>Kat Kelley.</strong> Al decirles: “No estás solo, estamos aquí”. La esperanza en este tipo de situación parece apoyar a una comunidad que resiste, para ayudar a construir más resistiencia entre los miembros del núcleo familiar.</p>
              <p className="bold">E.C. Salud mental. ¿Cuáles son los problemas que enfrenta la gente?</p>
              <p><strong>Kat Kelley.</strong>  Algo que estamos viendo en este momento es el aumento de los síntomas de salud mental de enfermedades crónicas como la paranoia, la hipervigilancia, la ansiedad y las señales de alerta que apuntan a condiciones crónicas de salud mental.</p>
              <p className="bold">E.C. ¿Cómo se proporciona el apoyo? ¿Es gratis? ¿Seguimiento? ¿En español?</p>
              <p><strong>Kat Kelley.</strong>  Trabajamos con hispano- hablantes en español y ofrecemos grupos de tratamiento de casos y terapia de trauma. El apoyo es gratis. También proporcionamos terapia y administración de atención terapéutica: terapia personal (cara a cara) ya sea en el hogar o en la oficina. La administración de la atención terapéutica puede tener lugar en entornos comunitarios, como el enfrentamiento en grupos de apoyo de trauma.</p>
              <p className="bold">E.C. Si alguien no sabe acerca de sus servicios, ¿Cómo pueden obtenerlos?</p>
              <p><strong>Kat Kelley.</strong> Ellos pueden llamarnos. También hemos colocado volantes en diferentes lugares, tenemos personas que comparten servicios en forma masiva y tenemos redes sociales, además de otro tipo de comunicación digital.</p>
              <p className="bold">E.C. ¿Hay visitas a domicilio? ¿O no?</p>
              <p><strong>Kat Kelley.</strong> Sí, hacemos visitas a domicilio.</p>
              <p className="bold">E.C. ¿Privacidad? La gente en este momento está aterrorizada y no quiere compartir. </p>
              <p><strong>Kat Kelley.</strong> Los clientes que reciben asesoramiento / atención de trauma no tienen que compartir nada, nada es obligatorio y todo es confidencial.</p>
              <p className="bold">E.C. Indocumentados, ¿Cómo manejan la situación familiar y obtienen su confianza cuando las familias no quieren hablar por miedo? </p>
              <p><strong>Kat Kelley.</strong> Tenemos una relación de largo tiempo con la comunidad latina. Tenemos una participación debido a la forma en que hemos trabajado con ellos durante muchos años y por la forma en que nos conocen en la comunidad. Brindamos servicios bilingües para que las personas se sientan escuchadas y seguras.</p>
              <p className="bold">E.C. Los hispanos no buscan consejeros. ¿Cómo se acercan a la comunidad viendo las diferencias culturales? </p>
              <p><strong>Kat Kelley.</strong> Nos acercamos a la comunidad utilizando un enfoque más orientado a la familia y con un lenguaje de enfoque individual para ayudar a que los clientes se sientan más seguros y entiendan los temas.</p>
              <p>Evitamos el uso de un lenguaje super-técnico cuando hablamos de consejería para ayudar a los clientes a sentirse más seguros. También tenemos muchos consejeros de orígenes culturales iguales o similares, que creemos que ayudan a nuestros clientes a sentirse más seguros.</p>
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