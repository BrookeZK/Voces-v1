import React from 'react';
import '../../CSS/Featured.css';

export default function FeatureNews() {
  const readability = {
    backgroundColor: "rgba(255, 255, 255, 0.5",
    alignSelf: 'center'
  }

  return (
    <div className="newsFeatured">
      <h1>En Las Noticias</h1>
      <div className="newsGrid">
        <div className="news1">
          <h1 style={readability}>Kelly Craft, nominada a Trump como embajadora de la ONU, confirmada por el Senado</h1>
        </div>
        <div className="news2 overflow">
          <h2>Balancines a caballo en la frontera de México, y las sonrisas brillan</h2>
          <h3>El equipo del patio de recreo se insertó a través de los listones de acero en una sección del muro fronterizo en Sunland Park, NM</h3>
          <img  src="https://static01.nyt.com/images/2019/07/30/us/30SEESAW/merlin_158600403_fca7755a-22c9-41de-b485-0c222697a1f3-mediumThreeByTwo210.jpg" width="100%" height="auto" className="image"/>
        </div>
        <div className="news3 overflow">
          <h2>No más separaciones familiares, excepto estas 900</h2>
          <h3>Las separaciones de familias migrantes continúan en cantidades sustanciales, a menudo por razones tan simples como un padre con una multa de tráfico, informó la Unión Americana de Libertades Civiles.</h3>
          <img  src="https://static01.nyt.com/images/2019/07/30/us/30FAMILY-SEPARATIONS/merlin_153075219_9e18180e-b93e-425b-8f6f-223e9bb72db1-mediumThreeByTwo210.jpg" width="100%" height="auto" className="image"/>
        </div>
        <div className="news4 overflow">
          <h1 style={readability}>Agentes del FBI allanan oficinas de la Autoridad de Vivienda de South Bend</h1>
        </div>
        <div className="news5 overflow">
          <h1 style={readability}>Armas a través de las fronteras: California tiene leyes estrictas, pero Nevada no</h1>
        </div>
        <div className="news6 overflow">
          <h2>El gobernador de Puerto Rico nombra a Pedro Pierluisi como su posible sucesor</h2>
          <h3>El gobernador derrocado, Ricardo A. Rosselló, nominó a un secretario de Estado para sucederlo. Pero su confirmación por parte de los legisladores está lejos de ser cierta.</h3>
          <img  src="https://static01.nyt.com/images/2019/07/31/us/00pr-successor/00pr-successor-mediumThreeByTwo210.jpg" width="100%" height="auto" className="image"/>
        </div>
        <div className="news7 overflow">
          <h2>Cómo es vivir en tu auto</h2>
          <h3>Miércoles: una familia anteriormente sin hogar habla sobre el estrés y la ansiedad; El gobernador Gavin Newsom apunta a las declaraciones de impuestos del presidente Trump; y balancines fronterizos.</h3>
          <img  src="https://static01.nyt.com/images/2019/07/31/us/31californiatoday-family/merlin_156756354_0fe46e75-a308-49d3-9776-06bc4f86bb5b-mediumThreeByTwo210.jpg" width="100%" height="auto" className="image"/>
        </div>
        <div className="news8 overflow">
          <h2>Debate Night 2: El desglose 'sobre política'</h2>
          <h3>El senador Cory Booker entró en la carrera de 2020 predicando el evangelio del "amor radical". Bueno, el amor se fue.</h3>
          <img  src="https://static01.nyt.com/images/2019/06/27/us/27onpolitics-pm/92e7e3e15f734ba787cfcdd25335d720-mediumThreeByTwo210.jpg" width="100%" height="auto" className="image"/>
        </div>
        <div className="news9 overflow">
          <h2>Líder supremacista blanco escapa de la cárcel de Arkansas</h2>
          <h3>Está en marcha una cacería humana para Wesley Gullett, quien figura en los documentos de la corte como el presidente del Nuevo Imperio Ario. Se le considera armado y peligroso.</h3>
          <img  src="https://static01.nyt.com/images/2019/07/31/us/31xp-escape/31xp-escape-mediumThreeByTwo210.jpg" width="100%" height="auto" className="image"/>
        </div>
        <div className="news10">
          <h2>>> Ver Más >></h2>
        </div>
      </div>
    </div>
  )
}

// e r
// d r
// d f
// g m
// h m
// h z
// x z
// x c