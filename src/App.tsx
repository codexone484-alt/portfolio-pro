import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import PrivateWork from '@/components/PrivateWork';
import Services from '@/components/Services';
import WhyWorkWithMe from '@/components/WhyWorkWithMe';
import GitHubSection from '@/components/GitHubSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <PrivateWork />
        <Services />
        <WhyWorkWithMe />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
