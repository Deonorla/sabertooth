import Open from "../assets/fluent_open-12-regular.png";
import Xlogo from "../assets/x-twitter-brands-solid.svg";
import Ilogo from "../assets/instagram-brands-solid.svg";
import copyright from "../assets/copyright-regular.svg";
import Sabertoothmini from "../assets/Sabertoothmini.png";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ClipLoader from "react-spinners/ClipLoader";

const Footer = () => {
  const MySwal = withReactContent(Swal);
  const [email, setEmail] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "white",
  };

  const popUp = () => {
    MySwal.fire({
      position: "center",
      icon: "success",
      text: `Email: ${email}`,
      showConfirmButton: true,
      background: "#01070E",
      color: "#fff",
    });
  };

  const errorPopUp = () => {
    MySwal.fire({
      position: "center",
      icon: "error",
      text: "Failed",
      showConfirmButton: true,
      background: "#01070E",
      color: "#fff",
    });
  };

  function isValidEmail(email: any) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const onChange = (e: any) => {
    const newEmail = e.target.value.trim();
    setEmail(newEmail);
    setIsValid(isValidEmail(newEmail));
  };

  const handleSubmit = () => {
    if (email) {
      setLoading(true);
      fetch(`/api/memberAdd?email=${email}`)
        .then((res) => {
          if (res) {
            res.json();
            setLoading(false);
            popUp();
            setEmail("");
          }
        })
        .then((res) => console.log(res))
        .catch((err) => {
          if (err) {
            setLoading(false);
            errorPopUp();
            console.log(err);
          }
        });
    }
  };

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
              onChange={onChange}
              value={email}
            />
            <button
              onClick={() => handleSubmit()}
              className="bg-ratata bg-myGradient md:px-9 px-6 py-2 text-xl rounded-md hover:bg-coral  hover:bg-none"
            >
              {loading ? (
                <ClipLoader
                  color={color}
                  loading={loading}
                  cssOverride={override}
                  size={20}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                <p className="text-[0.65rem] sm:text-[.85rem]">Subscribe</p>
              )}
            </button>
          </div>
          {!isValid && (
            <div className="text-[.8rem] text-center w-full text-[#f73939] my-1 ">
              Invalid address
            </div>
          )}
        </div>
      </div>
      <div>
        <hr className="w-full border-white mt-8 mb-4" />
      </div>
      <div className="flex justify-between text-8xl font-public items-center ">
        <img src={Sabertoothmini} alt="" className="w-20 h-20" />
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
