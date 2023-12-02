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
        <p>Salut, moi c'est Claire.</p>
        <p>Cela fait maintenant 6 ans 1/2 que j'habite à Montréal</p>
      </div>
    </div>
  );
}

export default Profile;
