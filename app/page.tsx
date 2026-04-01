import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Gallery from "@/components/gallery";
import WhyUs from "@/components/whyUs";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
