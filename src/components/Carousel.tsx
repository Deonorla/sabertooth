// import ProjectCard from "./Project Card";
import KLogo from "../assets/KawakL.png";
import KPic from "../assets/laptop Kawak.png";
import GPic from "../assets/laptop GB.png";
import GLogo from "../assets/GameblocL.png";
import BPic from "../assets/laptop Bugbounty.png";
import BLogo from "../assets/BugbountyL.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Button from "./Button";
import { motion } from "framer-motion";

const Carousel = () => {
  const fromTheBottom = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };
  const ProjectCard = [
    {
      icon: KLogo,
      product: "KAWAK",
      description:
        "Kawak is designed for thinkers, writers, and innovators eager to enhance the way they engage with the world. It's a platform where entry isn’t defined by wealth but by dedication, passion, and the willingness to contribute. Here, every user finds a space to grow, connect, and exchange ideas in an ecosystem that values effort and insight over financial barriers.",
      bdesc: "Explore KAWAK",
      picture: KPic,
      link: "https://3ysab-rqaaa-aaaan-qaewq-cai.ic0.app/#/",
    },
    {
      icon: GLogo,
      product: "GameBloc",
      description:
        "Gamebloc, a decentralized startup,specializes in cutting edge web and mobile solutions tailored for gamers, gaming communities, and game developers. Our platform empowers gamers to host tournaments for their favorite games,and game developers can launch their creations through our innovative tournament system. Level up your gaming experience with Gamebloc!",
      bdesc: "Explore GameBloc",
      picture: GPic,
      link: "https://gamebloc.app/",
    },
    {
      icon: BLogo,
      product: "BugBounty",
      description:
        "Bugbounty is a collaborative platform where developers and companies can post bugs or vulnerabilities in their code or projects, offering bounties as rewards. Skilled ethical hackers and developers can then tackle these issues, providing solutions and enhancing security while earning rewards. This setup creates a win-win: projects become more secure, and solvers are rewarded for their expertise.",
      bdesc: "Explore BugBounty",
      picture: BPic,
      link: "https://near-bug-bounty.vercel.app/",
    },
  ];
  return (
    <div className="wrapper flex flex-col items-center gap-5">
      <div>
        <h5 className="rounded-lg py-1 border-crimson border-2 px-5 inline text-center">
          Our Flagship Creations
        </h5>
      </div>
      <h1 id="projects" className="font-pirulen text-4xl text-center">
        {" "}
        OUR PIONEERING <span className="text-crimson">PROJECTS</span>
      </h1>
      {/* <Swiper
        spaceBetween={50}
        slidesPerView={3}
      > */}
      {ProjectCard.map((card, index) => {
        if (index % 2 === 0 || window.matchMedia("(max-width: 767px)").matches)
          return (
            // <SwiperSlide key={index}>
            <div className="flex flex-col gap-12">
              <div className="flex justify-center">
                {/* <img className="w-56" src={card.icon} alt="" /> */}
              </div>
              <div className="flex flex-col-reverse md:flex-row w-full items-center gap-10 md:justify-between">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={fromTheBottom}
                  transition={{ duration: 1 }}
                >
                  <div className="flex flex-col gap-6 md:w-[337px] lg:w-[450px]">
                    <h1 className="font-pirulen text-4xl">{card.product}</h1>
                    <p className="max-md:text-xl">{card.description}</p>
                    <a href={card.link} target="_blank">
                      <div>
                        <Button desc={card.bdesc} />
                      </div>
                    </a>
                  </div>
                </motion.div>
                <div className="md:w-1/2 max-md:w-[300px]">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fromTheBottom}
                    transition={{ duration: 0.75 }}
                  >
                    <img src={card.picture} alt="" />
                  </motion.div>
                </div>
              </div>
            </div>
          );
        else if (index % 2 === 1)
          return (
            <div className="flex flex-col gap-12">
              <div className="flex justify-center">
                {/* <img className="w-56" src={card.icon} alt="" /> */}
              </div>
              <div className="flex flex-col-reverse md:flex-row w-full items-center gap-10 md:justify-between">
                <div className="md:w-1/2 max-md:w-[300px]">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fromTheBottom}
                    transition={{ duration: 0.75 }}
                  >
                    <img src={card.picture} alt="" />
                  </motion.div>
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={fromTheBottom}
                  transition={{ duration: 1 }}
                >
                  <div className="flex flex-col gap-6 md:w-[337px] lg:w-[450px]">
                    <h1 className="font-pirulen text-4xl">{card.product}</h1>
                    <p className="max-md:text-xl">{card.description}</p>
                    <a href={card.link} target="_blank">
                      <div>
                        <Button desc={card.bdesc} />
                      </div>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default Carousel;
