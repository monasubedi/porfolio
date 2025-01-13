import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="main">
        <Hero />
        <About />
        {/* <Service /> */}
        <Work />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
