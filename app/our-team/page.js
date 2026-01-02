import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import TeamHero from "../../components/ourTeam/TeamHero.jsx";
import FeaturedPartner from "../../components/ourTeam/FeaturedPartner.jsx";
import TeamGrid from "../../components/ourTeam/TeamGrid.jsx";
import TeamQuote from "../../components/ourTeam/TeamQuote.jsx";
import TeamCulture from "../../components/ourTeam/TeamCulture.jsx";

export const metadata = {
  title: "Our Team - AKT LAW FIRM",
  description: "Meet our experienced team of legal professionals dedicated to your success.",
};

export default function OurTeam() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <TeamHero />
        <FeaturedPartner />
        <TeamGrid />
        <TeamQuote />
        <TeamCulture />
      </main>
      <Footer />
    </div>
  );
}
