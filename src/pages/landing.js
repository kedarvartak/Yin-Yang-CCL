import Associates from '../components/Associates';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import HeroSection from '../components/Hero';
import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';
import VisionMission from '../components/Vision';
import Card from '../components/card-1';
import WhatsApp from '../components/whatsapp';
import Up from '../components/goUP';
import CallButton from '../components/call';
import banner from '../components/assets/banner.jpg'
function Landing() {
  return (
    <div className="App">
      <WhatsApp/>
      <Navbar/>
      <div className="w-full">
        <img 
          src={banner} 
          alt="Banner" 
          className="w-full h-auto object-contain max-h-[400px]"
        />
      </div>
      <HeroSection/>
      <Up/>
      <CallButton/>
      <Card/>
      <VisionMission/>
      <Testimonials/>
      <Associates/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default Landing;
