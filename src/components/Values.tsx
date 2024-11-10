import listIcon from "../assets/game-icons_circle-claws.png";
import Sabertooth from "../assets/Sabertoothvalues.png";
import { motion } from "framer-motion";

const Values = () => {
  const fromTheRight = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="wrapper flex flex-col gap-5 lg:gap-10 md:flex-row items-center md:justify-between">
      <div className="flex flex-col gap-5 md:w-4/5">
        <div>
          <h5 className="rounded-lg py-1 border-crimson border-2 px-5 inline text-center">
            Our Core Values
          </h5>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-pirulen">
            The <span className="text-crimson">SaberTooth</span> Advantage
          </h1>
          <p>
            At Sabertooth, our approach is driven by a few key principles that
            set us apart. Our projects are more than products,they’re the
            building blocks of a new era.
          </p>
          <ul className="text-left">
            <li className="flex items-center">
              <img src={listIcon} alt="" className="w-5 h-5 mr-2 inline" />
              <p>
                <span className="font-bold">Flawlwess Design</span>– Seamless
                and intuitive, our designs redefine the user experience.
              </p>
            </li>
            <li className="flex items-center">
              <img src={listIcon} alt="" className="w-5 h-5 mr-2 inline" />
              <p>
                <span className="font-bold">Peer-to-Peer Innovation</span>– True
                decentralization, with user-first solutions.
              </p>
            </li>
            <li className="flex items-center">
              <img src={listIcon} alt="" className="w-5 h-5 mr-2 inline" />
              <p>
                <span className="font-bold">Community-Driven</span>– We build
                for communities, with every project designed to foster
                engagement and inclusion.
              </p>
            </li>
            <li className="flex items-center">
              <img src={listIcon} alt="" className="w-5 h-5 mr-2 inline" />
              <p>
                <span className="font-bold">Blockchain Excellence</span>-
                Leveraging the latest Web 3 technology to push boundaries
              </p>
            </li>
            <li className="flex items-center">
              <img src={listIcon} alt="" className="w-5 h-5 mr-2 inline" />
              <p>
                <span className="font-bold">Breakthrough Impact</span>–
                Developing industry-first solutions that address real-world
                challenges.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fromTheRight}
          transition={{ duration: 1 }}
        >
          <img
            src={Sabertooth}
            alt=""
            className="max-md:w-[250px] md:max-xl:w-[400px] "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Values;
