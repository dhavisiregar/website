import { CiInstagram } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="text-black bg-white sm:grid-cols-2 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {/* header section */}
        <div className="col-span-full">
          <h1 className="py-10 text-4xl md:text-5xl lg:text-7xl font-bold text-center">
            Contact Me!
          </h1>
        </div>

        {/* ig section */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <CiInstagram className="text-3xl md:text-5xl" />
          </div>
          <div>
            <a
              href="https://www.instagram.com/dhavisiregar/"
              className="text-lg md:text-xl"
            >
              @dhavisiregar
            </a>
          </div>
        </div>

        {/* email section */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <MdEmail className="text-3xl md:text-5xl" />
          </div>
          <div>
            <p className="text-xl md:text-xl">sultanmuhammaddhavi@gmail.com</p>
          </div>
        </div>

        {/* linkedin section */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <FaLinkedin className="text-3xl md:text-5xl" />
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/sultan-muhammad-dhavi-5a7125234/"
              className="text-lg md:text-xl"
            >
              Sultan Muhammad Dhavi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
