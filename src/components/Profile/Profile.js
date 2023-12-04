import portrait from '../../assets/images/claire-portrait.jpg';
import './Profile.css';

const Profile = () => {
  return (
    <div id="profile" className="profile">
      <h2>Qui suis-je  ?</h2>
      <div className="profile__content">
        <div className="profile__image-portrait">
          <img src={portrait} alt="portrait" id="portrait" className="portrait"/>
        </div>
        <div className="profile__text">
          <p>Salut, moi c'est Claire, et je suis développeuse <span>front-end</span>.</p>
          <p>Française d'origine, je suis devenue franco-canadienne en septembre 2023 après plus de 6 années passées à Montréal, où je suis toujours établie.</p>
          <p>J'ai d'abord travaillé dans le domaine de l'événementiel, avant de me reconvertir dans le développement web suite à la pandémie. </p>
          <p>J'aime pouvoir mettre à profit mon soucis du détail et l'apprentissage constant que </p>
          <p><span>Fun facts :</span>
          <ul>
            <li>
              Je suis une grande fan de musique rock (principalement années 60 et 70) et metal. Mais je suis aussi une grande fan de... Francis Cabrel.
            </li>
            <li>
              Depuis 2009, j'ai assisté à plus de 200 concerts, dont 50 rien qu'en 2023 !
            </li>
            <li>
              Je suis atteinte de <i>tsundoku</i>. J'achète constamment des livres que je n'ai pas le temps de lire (je lis quand même une trentaine de livres par an quand tout va bien).
            </li>
          </ul></p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
