import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiGithubFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";

const Technologies = () => {
  return (
    <div className="relative z-0 bg-white p-5 sm:p-5">
      <div className="container mx-auto relative z-10">
        <h2
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center text-black"
        >
          Technologies
        </h2>
        <div className="flex flex-wrap my-14 items-center justify-center gap-4">
          <div
            data-aos="flip-left"
            data-aos-delay="700"
            className="rounded-2xl border-4 border-black p-4"
          >
            <RiReactjsLine className="text-5xl text-cyan-400" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-delay="700"
            className="rounded-2xl border-4 border-black p-4"
          >
            <TbBrandNextjs className="text-5xl text-black" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-delay="700"
            className="rounded-2xl border-4 border-black p-4"
          >
            <BiLogoTailwindCss className="text-5xl text-cyan-400" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-delay="1100"
            className="rounded-2xl border-4 border-black p-4"
          >
            <BiLogoJavascript className="text-5xl text-yellow-500" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-delay="1100"
            className="rounded-2xl border-4 border-black p-4"
          >
            <BiLogoTypescript className="text-5xl text-blue-700" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-delay="1100"
            className="rounded-2xl border-4 border-black p-4"
          >
            <SiExpress className="text-5xl text-black" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-delay="1500"
            className="rounded-2xl border-4 border-black p-4"
          >
            <FaNodeJs className="text-5xl text-green-500" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-delay="1500"
            className="rounded-2xl border-4 border-black p-4"
          >
            <GrMysql className="text-5xl text-blue-400" />
          </div>
          <div
            data-aos="flip-left"
            data-aos-delay="1500"
            className="rounded-2xl border-4 border-black p-4"
          >
            <RiGithubFill className="text-5xl text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
