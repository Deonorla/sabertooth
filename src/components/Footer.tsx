import Button from "./Button";
import Open from "../assets/fluent_open-12-regular.png";
import Xlogo from "../assets/x-twitter-brands-solid.svg";
import Ilogo from "../assets/instagram-brands-solid.svg";
import copyright from "../assets/copyright-regular.svg";
import Sabertoothmini from "../assets/Sabertoothmini.png"

const Footer = () => {
  return (
    <div className="wrapper flex flex-col gap-2">
      <div className="flex flex-col max-md:items-center  gap-5">
        <div className="flex justify-between w-full">
          <div>
            <h1 className="font-bold mb-2">Products</h1>
            <ul>
              <li>
                <a
                  className="hover:text-crimson"
                  href="https://3ysab-rqaaa-aaaan-qaewq-cai.ic0.app/#/"
                  target="_blank"
                >
                  Kawak <img className="inline w-5 h-5" src={Open} alt="" />
                </a>
              </li>
              <li>
                <a
                  className="hover:text-crimson"
                  href="https://cv4ma-4qaaa-aaaal-adntq-cai.icp0.io/"
                  target="_blank"
                >
                  Gamebloc <img className="inline w-5 h-5" src={Open} alt="" />
                </a>
              </li>
              <li>
                <a
                  className="hover:text-crimson"
                  href="https://near-bug-bounty.vercel.app/"
                  target="_blank"
                >
                  Bug Bounty{" "}
                  <img className="inline w-5 h-5" src={Open} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1 id="socials" className="font-bold mb-2">
              Socials
            </h1>
            <ul>
              <li>
                <a
                  className="hover:text-crimson"
                  href="https://www.instagram.com/game_bloc"
                  target="blank"
                >
                  Instagram{" "}
                  <img
                    className="inline w-3 h-3 fill-white"
                    src={Ilogo}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  className="hover:text-crimson"
                  href="https://x.com/game_bloc"
                  target="_blank"
                >
                  Twitter <img className="inline w-3 h-3" src={Xlogo} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold mb-2">Email Us</h1>
            <a
              className="hover:text-crimson"
              href="mailto:contact@sbrtooth.com"
              target="_blank"
            >
              contact@sbrtooth.com
            </a>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <h1 className="font-bold mb-2">Newsletter</h1>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email Address"
              className="mr-4 w-2/3 bg-transparent px-9 py-2 rounded-lg border-2 border-solid border-mgray text-mgray focus:outline-none"
            />
            <Button desc={"Subscribe"} />
          </div>
        </div>
      </div>
      <div>
        <hr className="w-full border-white mt-8 mb-4" />
      </div>
      <div className="flex justify-between text-8xl font-public items-center ">
        <img src={Sabertoothmini} alt="" className="w-20 h-20"/>
        <div>
          <p className="mx-auto text-gray-400 text-sm">
            <span className="font-bold text-white">Sabertooth </span>
            <img
              className="inline w-3 h-3 mb-[2px]"
              src={copyright}
              alt=""
            />{" "}
            2024. All Rights Reserved.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
