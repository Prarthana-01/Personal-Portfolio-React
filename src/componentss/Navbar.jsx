import logo from "../assets/Prathlogo2.png";


const Navbar = () => {
  return (
    <nav className="mb-2 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-8 w-8" src={logo} alt="logo" />
          </div>
    </nav>
  );
};

export default Navbar;
