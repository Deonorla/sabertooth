import PersonelCard from "./Personel Card";
import marv from "../assets/marv.png";
import aje from "../assets/success.png";
import mercy from "../assets/mercy.png";
import deon from "../assets/Deon.png";
import purple from "../assets/purple.png"
import light from "../assets/suyini.png"
import sukuna from "../assets/sukuna.png"
import prime from "../assets/prime.png"
import arrow1 from "../assets/arrow-back.png";
import arrow2 from "../assets/arrow-forward.png";
import { Swiper as SwiperClass } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useState, useCallback } from "react";

const Team = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <div className=" w-screen bg-ember flex flex-col items-center gap-5 mt-16 py-12">
      <div>
        <h5 className="rounded-lg py-1 border-crimson border-2 px-5 inline text-center mt-2">
          Our Team of Innovators
        </h5>
      </div>
      <h1 className="font-pirulen text-4xl text-center ">
        MEET THE MINDS BEHIND <span className="text-crimson">SABERTOOTH</span>
      </h1>
      <p className="text-center text-xl w-11/12">
        Our team is our backbone. Each member brings unique expertise to
        delivering top-notch Web 3 solutions that serve real-world needs. With
        backgrounds in design, development, blockchain, and community
        management, we’re equipped to take on the biggest challenges in the
        industry.
      </p>
      <div className=" flex  md:flex-row gap-7 max-w-[90%] items-center mt-4">
        <button onClick={handlePrevious} className=" h-20 cursor-pointer">
          <img src={arrow1} alt="" className="" />
        </button>
        <Swiper
          onSwiper={setSwiperRef}
          modules={[Autoplay, Pagination]}
          // pagination={{clickable: true,}}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          grabCursor={true}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            <PersonelCard
              image={marv}
              name={"OLAOLUWA MARVELOUS"}
              role={"Backend Developer"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PersonelCard
              image={aje}
              name={"AJE SUCCESS"}
              role={"Blockchain Developer"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PersonelCard
              image={deon}
              name={"OLULEYE EMMANUEL"}
              role={"Frontend Developer"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PersonelCard
              image={light}
              name={"LIGHT"}
              role={"UI/UX Designer"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PersonelCard
              image={mercy}
              name={"MERCY"}
              role={"Social Media Manager"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PersonelCard
              image={sukuna}
              name={"AJE EMMA"}
              role={"Backend Developer"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PersonelCard
              image={prime}
              name={"DAVID PRIME"}
              role={"Community Manager"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PersonelCard
              image={purple}
              name={"PURPLE DNA"}
              role={"Frontend Developer"}
            />
          </SwiperSlide>
        </Swiper>
        <button onClick={handleNext} className=" h-20 cursor-pointer">
          <img src={arrow2} alt="" className="" />
        </button>
      </div>
    </div>
  );
};

export default Team;
