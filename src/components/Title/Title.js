import './Title.css';
import scrolldown from '../../assets/icons/scrolldown.svg';

let Title = () => {
  const scrollToFirstElement = () => {
    const firstElement = document.getElementById('profile');
    firstElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="title__container">
      <div className="title__content">
        <h1>&lt; Salut, moi c'est
          <span className="title--headline"> Claire /&gt;</span>
        </h1>
      </div>
      <div className="title__scrolldown" onClick={scrollToFirstElement}>
        <img src={scrolldown} alt="scrolldown" id="scrolldown"/>
      </div>
    </div>
  );
}

export default Title;
