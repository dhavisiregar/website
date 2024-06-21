import Image from "../../assets/developer.png";

const Hero = () => {
  return (
    <div className="relative z-[-1] bg-primary">
      <div className="container mx-auto py-16 sm:py-0 px-4 sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          {/* text content section */}
          <div className="space-y-5 sm:space-y-7 text-white order-2 mx-10 sm:order-1 text-center sm:text-left">
            <h1 data-aos="fade-up" className="text-4xl sm:text-7xl font-bold">
              Hello!
            </h1>
            <h2
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-2xl sm:text-5xl"
            >
              I'm Dhavi Siregar, a Web Developer.
            </h2>
          </div>

          {/* image section */}
          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            className="relative z-30 order-1 sm:order-2"
          >
            <img
              src={Image}
              alt="laptop"
              className="object-cover w-72 h-72 sm:w-full sm:h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
