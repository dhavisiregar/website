import Project1 from "../../assets/project-1.png";
import Project2 from "../../assets/project-2.png";
import Project3 from "../../assets/project-3.png";
import Project4 from "../../assets/project-4.png";

const Projects = () => {
  return (
    <section className="relative z-0 bg-primary p-5 sm:p-5 mt-20">
      <div className="container mx-auto relative z-10">
        <h2
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center text-white"
        >
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 justify-center">
          {/* Product Item */}
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="p-5 bg-white flex flex-col items-center text-black text-center rounded-lg"
          >
            <img src={Project1} alt="Project 1" className="w-full" />
            <h3 className="mt-4 mb-2 text-lg font-bold">Helvete Records</h3>
            <p className="mt-2 mb-2 text-sm text-justify">
              Helvete Records, established in 1991, is a premier record label
              and retail destination dedicated to delivering the most intense
              and authentic metal music experience.
            </p>
            <a
              href="https://cc2-jcwd2804-dhavi.vercel.app/home"
              className="mt-16 mb-2 bg-primary text-white rounded-md p-2 hover:bg-yellow-400"
            >
              Click Here!
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1100"
            className="p-5 bg-white flex flex-col items-center text-black text-center rounded-lg"
          >
            <img src={Project2} alt="Project 2" className="w-full" />
            <h3 className="mt-4 mb-2 text-lg font-bold">Café Magnifique</h3>
            <p className="mt-2 mb-2 text-sm text-justify">
              Café Magnifique is a small establishment primarily focused on
              serving coffee and related beverages. Café Magnifique have become
              a cultural hub for social interaction, relaxation, and working
              outside of the home or office.
            </p>
            <a
              href="https://github.com/dhavisiregar/coffee-shop"
              className="mt-6 mb-2 bg-primary text-white rounded-md p-2 hover:bg-yellow-400"
            >
              Click Here!
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1500"
            className="p-5 bg-white flex flex-col items-center text-black text-center rounded-lg"
          >
            <img src={Project3} alt="Project 3" className="w-full" />
            <h3 className="mt-4 mb-2 text-lg font-bold">TriDi Frozen Food</h3>
            <p className="mt-2 mb-2 text-sm text-justify">
              At TriDi Frozen Food, we prioritize offering the highest quality
              frozen food products for you. Our mission is to provide delicious,
              convenient, and nutritious options that make meal preparation
              easier for you and your family.
            </p>
            <a
              href="https://tridi-frozen-food.vercel.app/"
              className="mt-6 mb-2 bg-primary text-white rounded-md p-2 hover:bg-yellow-400"
            >
              Click Here!
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1900"
            className="p-5 bg-white flex flex-col items-center text-black text-center rounded-lg"
          >
            <img src={Project4} alt="Project 3" className="w-full" />
            <h3 className="mt-4 mb-2 text-lg font-bold">Dhavi Farma</h3>
            <p className="mt-2 mb-2 text-sm text-justify">
              Welcome to Dhavi Farma, where your health and comfort are our top
              priorities. We are a trusted pharmacy offering a wide range of
              medications, health supplements, and personal care products to
              meet the health needs of you and your family.
            </p>
            <a
              href="https://dhavi-farma.vercel.app/home"
              className="mt-2 mb-2 bg-primary text-white rounded-md p-2 hover:bg-yellow-400"
            >
              Click Here!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
