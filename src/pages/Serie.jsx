import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HiStar, HiOutlineCalendar } from "react-icons/hi";
import { formatDate } from "../helpers/formatDate";
import Header from "../components/Header";
import Footer from "../components/Footer";

import styled from "styled-components";
import tw from "twin.macro";

const ParagraphInfo = styled.h2`
  ${tw`flex items-center gap-1`}
`;

const Serie = () => {
  const { serieId } = useParams();
  const [serie, setSerie] = useState("");

  useEffect(() => {
    const getMovie = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/tv/${serieId}?api_key=ce19d4644c7d787dd26c825fb8b72580&language=en-US`
      );

      setSerie(data);
    };

    getMovie();
  }, []);

  const {
    backdrop_path,
    poster_path,
    name,
    overview,
    status,
    vote_average,
    first_air_date,
    genres,
  } = serie;

  return (
    <>
      <Header />

      <div
        className="sm:bg-cover bg-cover bg-center bg-no-repeat h-0 md:h-screen"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7) , rgba(10, 10,10, 0.8 )  ), url(${`${
            serie && `https://www.themoviedb.org/t/p/original${backdrop_path}`
          }`})`,
        }}
      >
        <div className="w-5/6 sm:w-5/6 mx-auto relative top-28 xl:top-40 bg-neutral-900 md:bg-neutral-800 rounded-md md:bg-opacity-70 p-5">
          <div className="flex flex-col items-center md:items-start md:flex-row text-white">
            <img
              src={`${
                serie && `http://image.tmdb.org/t/p/w780/${poster_path}`
              }`}
              alt="Serie img"
              className="w-auto md:w-72 xl:w-96 opacity-100 rounded-lg"
            />

            <div className="sm:ml-4 mt-6">
              <h2 className="text-4xl font-semibold">{name}</h2>
              <div className="flex flex-col sm:flex-row">
                {genres?.map((genre, i) => (
                  <h4 key={genre.id} className="flex mr-1 sm:mt-2">
                    {genre.name}
                    {i === genres.length - 1 ? "" : ","}
                  </h4>
                ))}
              </div>

              <h3 className="md:text-xl mt-2 md:pr-3">{overview}</h3>

              <div className="mt-5 mb-10 xl:flex gap-4 text-xl">
                <ParagraphInfo>
                  Rating: <HiStar className="text-violet-400" />
                  {vote_average?.toFixed(1)}
                </ParagraphInfo>

                <ParagraphInfo>
                  Release Date:
                  <HiOutlineCalendar className="text-violet-400" />
                  {formatDate(first_air_date)}
                </ParagraphInfo>

                <ParagraphInfo>Status: {status}</ParagraphInfo>
              </div>

              <a
                href={`https://www.themoviedb.org/tv/${serieId}`}
                target="_blank"
              >
                <button className="bg-violet-400 transition-all duration-500 hover:bg-violet-500 uppercase px-4 py-3 rounded-lg mx-auto w-full xl:w-1/3">
                  More details
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="relative top-32 md:hidden">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Serie;
