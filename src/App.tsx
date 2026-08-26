import Header from "./components/Header";
import Hero from "./components/Hero";
import Memoria from "./components/Memoria";
import VideoVsl from "./components/VideoVsl";
import Bio from "./components/Bio";
import Stats from "./components/Stats";
import Values from "./components/Values";
import Plan from "./components/Plan";
import Authenticity from "./components/Authenticity";
import FinalCta from "./components/FinalCta";
import ParticiparCta from "./components/ParticiparCta";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import Modal from "./components/Modal";
import LeadForm from "./components/LeadForm";
import { LeadModalProvider, useLeadModal } from "./context/LeadModalContext";

function LeadModal() {
  const { open, closeModal } = useLeadModal();
  return (
    <Modal open={open} onClose={closeModal}>
      <LeadForm onDone={closeModal} />
    </Modal>
  );
}

function App() {
  return (
    <LeadModalProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Memoria />
        <VideoVsl />
        <Bio />
        <Stats />
        <Values />
        <Plan />
        <Authenticity />
        <FinalCta />
        <ParticiparCta />
        <Footer />
        <CookieBanner />
        <LeadModal />
      </div>
    </LeadModalProvider>
  );
}

export default App;
