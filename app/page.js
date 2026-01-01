import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import WhoWeAre from "../components/WhoWeAre.jsx";
import PracticeAreas from "../components/PracticeAreas.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import Testimonials from "../components/Testimonials.jsx";

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
      </main>
      <Footer />
    </div>
  );
}
