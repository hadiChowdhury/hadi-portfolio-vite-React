import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Card } from "./components/Cards/Card";
import Contact from "./components/Contact/Contact";
import Credit from "./components/Credit/Credit";
import Education from "./components/Education/Education";
import Certificate from "./components/Certificates/Certificate"
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Card />
      {/* <About/> */}
      <Education />
      <Experience />
      <Certificate/>
      <Contact />
    </div>
  );
}
export default App;
