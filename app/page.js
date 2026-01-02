import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/home/Hero.jsx";
import WhoWeAre from "../components/home/WhoWeAre.jsx";
import PracticeAreas from "../components/home/PracticeAreas.jsx";
import WhyChooseUs from "../components/home/WhyChooseUs.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import DisclaimerModal from "../components/home/DisclaimerModal.jsx";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhoWeAre />
        <PracticeAreas />
        <WhyChooseUs />
        <Testimonials />
        <DisclaimerModal />
      </main>
      <Footer />
    </div>
  );
}
