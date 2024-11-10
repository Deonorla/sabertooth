import Building from "../assets/Saberbuilding.png";

const Journey = () => {
  return (
    <div className="wrapper flex flex-col gap-5 md:flex-row md:jusity-between md:items-center md:gap-8">
      <div className="md:w-1/2 max-sm:mb-6 flex justify-center">
        <img className="max-md:h-[300px]" src={Building} alt="" />
      </div>
      <div className="flex flex-col gap-5 md:w-1/2 text-center md:text-left">
        <div>
          <h5
            className="rounded-lg py-1 border-crimson border-2 px-5 inline text-center"
          >
            Who we are
          </h5>
        </div>
        <h1 className="text-4xl font-pirulen">
          Our Journey and <span className="text-crimson">Purpose</span>
        </h1>
        <p>
          Sabertooth was born from a passion for leveraging the power of Web 3
          to create solutions that empower communities. Since our inception,
          we’ve developed and launched three transformative projects: Kawak,
          Gamebloc, and Bugbounty. Each one embodies our commitment to
          peer-to-peer innovation and crowd-focused design, from secure crypto
          transactions to community-driven game tournaments and blockchain-based
          security enhancements. We’re here to lead the way toward a more
          connected and decentralized future.
        </p>
      </div>
    </div>
  );
};

export default Journey;
