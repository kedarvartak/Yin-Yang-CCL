import Associates from '../components/Associates';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import HeroSection from '../components/Hero';
import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';
import VisionMission from '../components/Vision';
import Card from '../components/card-1';

function Landing() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Card/>
      <VisionMission/>
      <Testimonials/>
      <FAQ/>
      <Associates/>
      <Footer/>
    </div>
  );
}

export default Landing;
