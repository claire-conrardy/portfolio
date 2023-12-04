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
          <p>J'ai d'abord travaillé dans le domaine de l'événementiel, avant de me reconvertir dans le développement web suite à la pandémie.</p>
          <p><span>Fun fact :</span> je suis une grande fan de metal mais aussi de... Francis Cabrel.</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
