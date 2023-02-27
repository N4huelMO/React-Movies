import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

import styled from "styled-components";
import tw from "twin.macro";

const Icon = styled.div`
  ${tw`cursor-pointer hover:text-violet-500 transition-all duration-500`}
`;

const Footer = () => {
  return (
    <footer className="md:p-8 p-3 text-white w-full bg-neutral-900">
      <div className="flex justify-center sm:justify-between mx-auto md:w-5/6">
        <div className="text-3xl font-semibold my-auto">
          <h2 className="font-kaushan text-4xl hidden sm:block">
            React<span className="text-violet-400"> Movies</span>
          </h2>
        </div>
        <div className="my-auto">
          <nav className="flex lg:gap-10 gap-4 text-violet-400">
            <Icon>
              <BsFacebook size={25} />
            </Icon>

            <Icon>
              <BsTwitter size={25} />
            </Icon>

            <Icon>
              <BsInstagram size={25} />
            </Icon>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
