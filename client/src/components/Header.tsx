import Button from "./Button";
import Sabertoothmain from "../assets/Sabertoothmain.png";

const Header = () => {
  return (
    <div className="flex justify-between text-8xl font-public items-center wrapper mt-6">
      <img src={Sabertoothmain} alt="" className="w-40 md:w-56" />
      <Button desc={"Get in Touch"} to="#socials" />
    </div>
  );
};

export default Header;
