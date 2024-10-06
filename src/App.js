
import './App.css';
import HeroSection from './components/Hero';
import Navbar from './components/Navbar';
import VisionMission from './components/Vision';
import Card from './components/card-1';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Card/>
      <VisionMission/>
    </div>
  );
}

export default App;
