import { useState } from "react";
import SearchBar from "./SearchBar";
import { useParams, useNavigate } from "react-router-dom";

const Header = () => {
  const [headerBg, setHeaderBg] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 55) {
      setHeaderBg(true);
    } else {
      setHeaderBg(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  const paramsLength = Object.keys(useParams()).length;
  const navigate = useNavigate();

  const start = (e) => {
    if (e == 0) {
      window.scrollTo(0, 0);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <header
        className={`p-8 text-white w-full transition-all duration-500 ${
          headerBg ? "fixed bg-neutral-900 z-10" : "absolute"
        }`}
      >
        <div className="flex items-center justify-between font-semibold mx-auto md:w-5/6">
          <div className="my-auto">
            <h2
              className="font-kaushan text-4xl md:text-3xl lg:text-4xl cursor-pointer"
              onClick={() => {
                start(paramsLength);
              }}
            >
              React<span className="text-violet-400"> Movies</span>
            </h2>
          </div>

          <div className="grow flex justify-center items-center">
            <SearchBar />
          </div>

          <div className="my-auto">
            <a href="https://www.themoviedb.org/" target="_blank">
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="TMBD Logo"
                width="100"
              />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
