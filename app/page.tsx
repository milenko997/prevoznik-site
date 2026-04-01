import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import About from "@/components/about";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Hero />
        <About />
      </main>
      <Footer />
    </>
  );
}
