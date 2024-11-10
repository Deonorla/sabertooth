import Header from "./components/Header";
import Journey from "./components/Journey";
import Main from "./components/Main";
import Values from "./components/Values";
import Footer from "./components/Footer";
import BImg from "./assets/Background Image.png";
import Carousel from "./components/Carousel";
// import Team from "./components/Team";
import { motion } from "framer-motion";

function App() {
  const fromTheLeft = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 },
  };
  const fromTheBottom = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      style={{ backgroundImage: `url(${BImg})` }}
      className=" text-white font-public overflow-hidden"
    >
      <Header />
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fromTheBottom}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Main />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fromTheLeft}
        transition={{ duration: 1 }}
      >
        <Journey />
      </motion.div>
        <Values />
        <Carousel />
       {/* <Team /> */}
      <Footer />
    </div>
  );
}

export default App;
