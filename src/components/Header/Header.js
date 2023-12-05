import HeaderBtn from '../HeaderBtn/HeaderBtn.js';
import './Header.css';

let Header = () => {
  return (
    <header>
      <HeaderBtn contact="Qui suis-je ?"/>
      <HeaderBtn contact="Technologies"/>
      <HeaderBtn contact="Projets"/>
      <HeaderBtn contact="Contactez-moi"/>
    </header>
  )
}

export default Header;
