
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { QuickContact } from './components/sections/QuickContact';
import { About } from './components/sections/About';
import { DoctorProfile } from './components/sections/DoctorProfile';
import { Services } from './components/sections/Services';
import { LabTests } from './components/sections/LabTests';
import { Facilities } from './components/sections/Facilities';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { PatientJourney } from './components/sections/PatientJourney';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { StickyCallButton } from './components/ui/StickyCallButton';

function App() {
  return (
    <div className="h-[100dvh] w-full font-sans text-gray-800 selection:bg-medical-blue selection:text-white flex flex-col overflow-hidden bg-white">
      <Header />
      <main className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth relative" id="main-scroll-container">
        <Hero />
        <QuickContact />
        <About />
        <WhyChooseUs />
        <DoctorProfile />
        <Services />
        <LabTests />
        <Facilities />
        <PatientJourney />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
      <StickyCallButton />
    </div>
  );
}

export default App;
