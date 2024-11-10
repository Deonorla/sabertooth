import PersonelCard from "./Personel Card";
import marv from '../assets/marv.png'
import aje from '../assets/success.png'
import mercy from '../assets/mercy.png'
import deon from '../assets/Deon.png'

const Team = () => {
  return (
    <div className = " w-screen bg-ember flex flex-col items-center gap-5 mt-16 py-12">
      <div>
        <h5 className="rounded-lg py-1 border-crimson border-2 px-5 inline text-center mt-2">
          Our Team of Innovators
        </h5>
      </div>
      <h1 className="font-pirulen text-4xl text-center ">
        MEET THE MINDS BEHIND <span className="text-crimson">SABERTOOTH</span>
      </h1>
      <p className="text-center text-base w-11/12">Our team is our backbone. Each member brings unique expertise to delivering top-notch Web 3 solutions that serve real-world needs. With backgrounds in design, development, blockchain, and community management, we’re equipped to take on the biggest challenges in the industry.</p>
      <div className=" flex flex-col md:flex-row gap-7">
        <PersonelCard image={marv} name={'OLAOLUWA MARVELOUS'} role={'Backend Developer'} />
        <PersonelCard image={aje} name={'AJE SUCCESS'} role={'Blockchain Developer'} />
        <PersonelCard image={mercy} name={'OLAOLUWA MERCY'} role={'Community Manager'} />
        <PersonelCard image={deon} name={'OLULEYE EMMANUEL'} role={'Frontend Developer'} />
      </div>
    </div>
  );
};

export default Team;
