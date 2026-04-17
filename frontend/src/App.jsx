import { usePortfolio } from './hooks/usePortfolio';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

export default function App() {
  const { data, loading, error } = usePortfolio();

  if (loading) return <Loader />;

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="text-center">
          <p className="text-red-400 mb-2">Could not load portfolio data.</p>
          <p className="text-muted text-sm">Make sure the backend is running on port 3001.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg text-white">
      <Navbar />
      <main>
        <Hero data={data.hero} />
        <About hero={data.hero} education={data.education} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Experience experience={data.experience} />
        <Contact hero={data.hero} />
      </main>
      <Footer hero={data.hero} />
    </div>
  );
}
