import Project1 from "../../assets/project-1.png";
import Project2 from "../../assets/project-2.png";

const Projects = () => {
  return (
    <section className="relative z-0 bg-primary p-10 sm:p-10 mt-20">
      <div className="container mx-auto relative z-10">
        <h2
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center text-white"
        >
          Projects
        </h2>
        <div className="flex flex-wrap mt-10 justify-center gap-8">
          {/* Product Item */}
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="w-full sm:w-72 p-5 bg-white flex flex-col items-center text-black text-center rounded-lg"
          >
            <img src={Project1} alt="" className="w-72 sm:w-3/5 lg:w-96" />
            <h3 className="mt-4 mb-2 text-lg font-bold">Helvete Records</h3>
            <p className="mt-2 mb-2 text-sm text-justify">
              Helvete Records, established in 1991, is a premier record label
              and retail destination dedicated to delivering the most intense
              and authentic metal music experience.
            </p>
            <a
              href="https://cc2-jcwd2804-dhavi.vercel.app/home"
              className="mt-2 mb-2 bg-primary text-white rounded-md p-2 hover:bg-yellow-400"
            >
              Click Here!
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1100"
            className="w-full sm:w-72 p-5 bg-white flex flex-col items-center text-black text-center rounded-lg"
          >
            <img src={Project2} alt="" className="w-72 sm:w-3/5 lg:w-96" />
            <h3 className="mt-4 mb-2 text-lg font-bold">Café Magnifique</h3>
            <p className="mt-2 mb-2 text-sm text-justify">
              Café Magnifique is a small establishment primarily focused on
              serving coffee and related beverages. Café Magnifique have become
              a cultural hub for social interaction, relaxation, and working
              outside of the home or office.
            </p>
            <a
              href="https://github.com/dhavisiregar/coffee-shop"
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
