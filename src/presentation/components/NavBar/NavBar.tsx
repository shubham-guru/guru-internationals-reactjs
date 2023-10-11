import logo from "../../../assets/images/logo.png";

const NavBar = () => {
  return (
    <>
      <nav className="bg-gray-100 h-[10vh] lg:h-[14vh] pt-[5px] lg:pt-[0px]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* logo */}
              <div className="flex items-center py-5 px-2">
                  <img src={logo} className="w-[150px]" alt="logo" />
              </div>
             
            </div>
            {/* secondary nav */}
            <div className="flex items-center space-x-1">
              <p
                className="py-2 px-5 cursor-pointer bg-[#101528] hover:bg-[#1a2138] text-white hover:text-white rounded transition duration-300"
              >
                GST: 08CODPG1006F1ZL
              </p>
            </div>
          </div>
        </div>
      </nav>
      {/* content goes here */}
      {/* <div className="py-32 text-center">
        <h2 className="font-extrabold text-4xl">Navbars in Tailwind!</h2>
      </div> */}
    </>
  );
};

export default NavBar;
