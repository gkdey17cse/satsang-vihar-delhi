import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";
import Mission from "../sections/Mission";
import Events from "../sections/Events";
import Kendras from "../sections/Kendras";
import Contact from "../sections/Contact";

const HomeSPA = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
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
