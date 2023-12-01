import './App.css';
import Header from './components/Header/Header.js';
import ParticleEffect from './components/ParticleEffect/ParticleEffect.js';
import Title from './components/Title/Title.js';

function App() {
  return (
    <div className="App">
      <ParticleEffect />
      <Header />
      <Title />
    </div>
  );
}

export default App;
