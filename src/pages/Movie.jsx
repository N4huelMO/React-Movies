import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { HiOutlineClock, HiStar, HiOutlineCalendar } from "react-icons/hi";
import { formatDate } from "../helpers/formatDate";

import styled from "styled-components";
import tw from "twin.macro";
import Footer from "../components/Footer";

const ParagraphInfo = styled.h2`
  ${tw`flex items-center gap-1`}
`;

const Movie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState("");
  const [casting, setCasting] = useState("");

  useEffect(() => {
    const getMovie = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=ce19d4644c7d787dd26c825fb8b72580&language=en-US`
      );

      setMovie(data);
    };

    const getCast = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=ce19d4644c7d787dd26c825fb8b72580&language=en-US`
      );

      setCasting(data);
    };

    getMovie();
    getCast();
  }, []);

  const {
    backdrop_path,
    title,
    overview,
    runtime,
    vote_average,
    release_date,
    genres,
  } = movie;

  const { cast } = casting;

  return (
    <>
      <Header />

      <div
        className="sm:bg-cover bg-cover bg-center bg-no-repeat h-0 md:h-screen"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7) , rgba(10, 10,10, 0.8 )  ), url(${`${
            movie && `https://www.themoviedb.org/t/p/original${backdrop_path}`
          }`})`,
        }}
      >
        <div className="w-5/6 sm:w-5/6 mx-auto relative top-28 xl:top-40 bg-neutral-900 md:bg-neutral-800 rounded-md md:bg-opacity-70 p-5">
          <div className="flex flex-col items-center md:items-start md:flex-row text-white">
            <img
              src={`${
                movie.poster_path &&
                `http://image.tmdb.org/t/p/w780/${movie.poster_path}`
              }`}
              alt="Movie img"
              className="w-auto md:w-72 xl:w-96 opacity-100 rounded-lg"
            />

            <div className="sm:ml-4 mt-6">
              <h2 className="text-4xl font-semibold">{title}</h2>
              <div className="flex">
                {genres?.map((genre, i) => (
                  <h4 key={genre.id} className="flex mr-1 mt-2">
                    {genre.name}
                    {i === genres.length - 1 ? "" : ","}
                  </h4>
                ))}
              </div>
              <h3 className="md:text-xl mt-2 md:pr-3 ">{overview}</h3>

              <p className="mt-5 font-semibold text-lg">Cast:</p>

              <div className="grid grid-cols-2">
                {cast?.slice(0, 10).map((actors) => (
                  <p key={actors.id}>{actors.name}</p>
                ))}
              </div>

              <div className="mt-5 mb-10 xl:flex gap-4 text-xl">
                <ParagraphInfo>
                  Rating: <HiStar className="text-violet-400" />
                  {vote_average?.toFixed(1)}
                </ParagraphInfo>
                <ParagraphInfo>
                  Duration: <HiOutlineClock className="text-violet-400" />
                  {runtime} min
                </ParagraphInfo>
                <ParagraphInfo>
                  Release Date:
                  <HiOutlineCalendar className="text-violet-400" />
                  {formatDate(release_date)}
                </ParagraphInfo>
              </div>

              <a
                href={`https://www.themoviedb.org/movie/${movieId}`}
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

export default Movie;
