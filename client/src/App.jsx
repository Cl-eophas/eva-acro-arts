import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Training from './components/Training';
import Performances from './components/Performances';
import Trailer from './components/Trailer';
import Gallery from './components/Gallery';
import About from './components/About';
import Merchandise from './components/Merchandise';
import Booking from './components/Booking';
import Footer from './components/Footer';
import AdultTraining from './components/AdultTraining';
import CoachingExperience from './components/CoachingExperience';
import MovementGoal from './components/MovementGoal';
import AcroArts from './components/AcroArts';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <SEO />
        <a href="#main" className="skip-link">Skip to main content</a>
        <Navbar />
        <main id="main" className="min-w-0 overflow-x-clip">
          <Hero />
          <Intro />
          <About />
          <AcroArts />
          <Training />
          <AdultTraining />
          <MovementGoal />
          <Performances />
          <CoachingExperience />
          <Trailer />
          <Gallery />
          <Merchandise />
          <Booking />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </ThemeProvider>
    </HelmetProvider>
  );
}
