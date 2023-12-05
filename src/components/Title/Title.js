// import { useEffect, useRef } from 'react';
import './Title.css';
import scrolldown from '../../assets/icons/scrolldown.svg';

const Title = () => {
  // const profileRef = useRef(null);

  const downToFirstElement = () => {
    const firstElement = document.getElementById('profile');
    firstElement.scrollIntoView({ behavior: 'smooth' });
  };

  // useEffect(() => {
  //   const gestionScroll = () => {
  //     if (profileRef.current) {
  //       const positionFirstElement = profileRef.current.getBoundingClientRect();

  //       // Vérifier si la première section est visible dans la fenêtre
  //       if (positionFirstElement.top <= window.innerHeight && positionFirstElement.bottom >= 0) {
  //         // Afficher le header
  //         setNavVisibility(true);
  //       } else {
  //         // Masquer le header
  //         setNavVisibility(false);
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", gestionScroll);

  //   return () => {
  //     window.removeEventListener("scroll", gestionScroll);
  //   };
  // }, [setNavVisibility]);

  // useEffect(() => {
  //   // Effet pour isNavVisible
  // }, [isNavVisible]);

  return (
    <div className="title__container">
      <div className="title__content">
        <h1>&lt; Salut, moi c'est
          <span className="title--headline"> Claire /&gt;</span>
        </h1>
      </div>
      <div className="title__scrolldown" onClick={downToFirstElement}>
        <img src={scrolldown} alt="scrolldown" id="scrolldown"/>
      </div>

      {/* Utilise la ref pour obtenir une référence directe à l'élément */}
      <div id="profile">
        {/* Contenu de la première section */}
      </div>
    </div>
  );
}

export default Title;
