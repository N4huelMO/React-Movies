import { useEffect, useState } from "react";
import axios from "axios";
import { HiOutlineClock, HiStar, HiOutlineCalendar } from "react-icons/hi";
import { formatDate } from "../helpers/formatDate";

import styled from "styled-components";
import tw from "twin.macro";

const Headline2 = styled.h2`
  ${tw`text-3xl md:text-4xl xl:text-7xl 2xl:text-8xl font-semibold mt-36 md:mt-72 2xl:line-clamp-2 w-1/2`}
`;

const ParagraphInfo = styled.h2`
  ${tw`flex items-center gap-1`}
`;

const Headline = () => {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    const getId = async () => {
      const resp = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=ce19d4644c7d787dd26c825fb8b72580&language=en-US&page=1"
      );

      const id = resp.data.results[0].id;

      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=ce19d4644c7d787dd26c825fb8b72580&language=en-US`
      );

      setMovie(data);
    };

    getId();
  }, []);

  const {
    backdrop_path,
    title,
    tagline,
    overview,
    runtime,
    vote_average,
    release_date,
  } = movie;

  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7) , rgba(10, 10,10, 0.8 )  ), url(${`${
            movie && `https://www.themoviedb.org/t/p/original${backdrop_path}`
          }`})`,
        }}
        className="sm:bg-cover bg-cover bg-center bg-no-repeat md:h-[30rem] lg:h-[40rem] xl:h-screen"
      >
        <div className="px-5 md:h-2/3 md:w-5/6 text-white mx-auto flex flex-col justify-center">
          <div>
            <Headline2>{title}</Headline2>
          </div>

          <div className="xl:ml-2 mt-10">
            <h4 className="text-2xl md:text-xl">{tagline}</h4>

            <p className="text-sm md:w-4/5 xl:w-2/5 mt-3 tracking-wide">
              {overview}
            </p>
          </div>

          <div className="ml-2 mt-5 mb-10 flex gap-4 text-sm">
            <ParagraphInfo>
              Rating: <HiStar className="text-violet-400" />
              {vote_average?.toFixed(1)}
            </ParagraphInfo>
            <ParagraphInfo>
              Duration: <HiOutlineClock className="text-violet-400" />
              {runtime} min
            </ParagraphInfo>
            <ParagraphInfo>
              <HiOutlineCalendar className="text-violet-400" />
              {formatDate(release_date)}
            </ParagraphInfo>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headline;
