import Header from "./components/Header";
import Hero from "./components/Hero";
import Memoria from "./components/Memoria";
import Bio from "./components/Bio";
import Stats from "./components/Stats";
import Values from "./components/Values";
import Plan from "./components/Plan";
import Authenticity from "./components/Authenticity";
import FinalCta from "./components/FinalCta";
import LeadForm from "./components/LeadForm";
import CookieBanner from "./components/CookieBanner";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Memoria />
      <Bio />
      <Stats />
      <Values />
      <Plan />
      <Authenticity />
      <FinalCta />
      <LeadForm />
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;
