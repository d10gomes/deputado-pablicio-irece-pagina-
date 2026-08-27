import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoVsl from "./components/VideoVsl";
import Memoria from "./components/Memoria";
import Bio from "./components/Bio";
import Stats from "./components/Stats";
import Values from "./components/Values";
import Plan from "./components/Plan";
import Authenticity from "./components/Authenticity";
import Articulacao from "./components/Articulacao";
import FinalCta from "./components/FinalCta";
import ParticiparCta from "./components/ParticiparCta";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import StickyMobileCta from "./components/StickyMobileCta";
import Modal from "./components/Modal";
import LeadForm from "./components/LeadForm";
import Reveal from "./components/Reveal";
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
      <div className="min-h-screen pb-[72px] md:pb-0">
        <Header />
        <Hero />

        {/* Vídeo logo após o Hero: primeira coisa relevante que quem chega vê */}
        <Reveal>
          <VideoVsl />
        </Reveal>

        <Reveal>
          <Memoria />
        </Reveal>
        <Reveal>
          <Bio />
        </Reveal>
        <Reveal>
          <Stats />
        </Reveal>
        <Reveal>
          <Values />
        </Reveal>
        <Reveal>
          <Plan />
        </Reveal>
        <Reveal>
          <Authenticity />
        </Reveal>
        <Reveal>
          <Articulacao />
        </Reveal>
        <Reveal>
          <FinalCta />
        </Reveal>
        <Reveal>
          <ParticiparCta />
        </Reveal>

        <Footer />
        <CookieBanner />
        <StickyMobileCta />
        <LeadModal />
      </div>
    </LeadModalProvider>
  );
}

export default App;
