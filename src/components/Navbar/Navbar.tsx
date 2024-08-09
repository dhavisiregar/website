const Navbar = () => {
  return (
    <div
      data-aos="fade"
      className="fixed w-screen z-10 bg-white text-black shadow-md sm:grid-cols-2"
    >
      <div className="container flex justify-between py-4 sm:py-3">
        {/* logo section */}
        <a href="#home" className="font-bold text-3xl ">
          Logo
        </a>

        {/* navlinks section */}
        <div>
          <ul className="flex items-center gap-10">
            <li>
              <a
                href="#profile"
                className="inline-block hover:text-primary text-xl font-semibold"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="inline-block hover:text-primary text-xl font-semibold"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#technologies"
                className="inline-block hover:text-primary text-xl font-semibold"
              >
                Technologies
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="inline-block hover:text-primary text-xl font-semibold"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
