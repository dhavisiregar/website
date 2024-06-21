import Hero from "../../assets/foto-removebg-preview2-fotor-20240603142636.png";

const Profile = () => {
  return (
    <div className="bg-white p-5 grid grid-cols-1 md:grid-cols-3 gap-10 text-black">
      <div className="text-center col-span-1 md:col-span-3">
        <h1
          data-aos="fade-up"
          className="py-8 tracking-wider text-4xl md:text-7xl font-bold text-center"
        >
          Profile
        </h1>
      </div>

      {/* about me section */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="px-3 m-auto gap-5 col-span-1 md:col-span-1"
      >
        <div>
          <h2 className="font-bold text-3xl md:text-5xl">About Me</h2>
        </div>
        <div>
          <p className="text-lg md:text-xl text-justify">
            Enthusiastic and dedicated Full-Stack Web Development student with a
            keen interest in building innovative digital solutions. Currently
            honing my skills in both front-end and back-end technologies,
            including HTML, CSS, JavaScript, Node.js, and more. Eager to
            leverage my educational background and hands-on experience gained
            from various projects to contribute to dynamic teams and create
            impactful web applications. Passionate about learning new
            technologies and solving complex problems, I am committed to
            continuous growth and development in the field of web development.
          </p>
        </div>
      </div>

      {/* image section */}
      <div
        data-aos="zoom-in"
        data-aos-delay="500"
        className="w-fit m-auto col-span-1 md:col-span-1"
      >
        <img
          src={Hero}
          alt="foto"
          className="w-48 h-48 md:w-96 md:h-96 object-cover rounded-full"
        />
      </div>

      {/* details section */}
      <div
        data-aos="fade-up"
        data-aos-delay="700"
        className="m-auto gap-5 text-left col-span-1 md:col-span-1"
      >
        <div>
          <h1 className="font-bold text-3xl md:text-5xl">Details</h1>
        </div>
        <div>
          <p className="text-lg md:text-xl text-left">
            <span className="font-bold">Name: </span>
            <br />
            Dhavi Siregar <br />
            <span className="font-bold">Age: </span>
            <br />
            22 years old <br />
            <span className="font-bold">Address: </span>
            <br />
            Jakarta, Indonesia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
