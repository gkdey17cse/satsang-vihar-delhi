import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mission from "../components/Mission";
import Events from "../components/Events";
import Kendras from "../components/Kendras";
import Contact from "../components/Contact";
import Hero from "../components/Hero";

const HomeSPA = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        <Hero />
        <Mission />
        <Events />
        <Kendras />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
export default HomeSPA;
