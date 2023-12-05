import './App.css';
import Header from './components/Header/Header.js';
import ParticleEffect from './components/ParticleEffect/ParticleEffect.js';
import Title from './components/Title/Title.js';
import Profile from './components/Profile/Profile.js';
import ContactForm from './components/ContactForm/ContactForm.js';
// import Home from './components/Home/Home.js';

function App() {
  return (
    <div className="App">
      <ParticleEffect />
      <Header />
      <Title />
      <Profile />
      <ContactForm />
    </div>
  );
}

export default App;
