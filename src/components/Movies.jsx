import { Link } from "react-router-dom";
import { formatDate } from "../helpers/formatDate";
import { HiOutlineCalendar } from "react-icons/hi";
import axios from "axios";
import { useEffect, useState } from "react";

import styled from "styled-components";
import tw from "twin.macro";

const Img = styled.img`
  ${tw`rounded-lg transition-all duration-300 hover:brightness-110 hover:scale-105`}
`;

const Hr = styled.hr`
  ${tw`border-0 h-px mb-4 bg-gradient-to-l from-transparent via-violet-400 to-transparent`}
`;

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [comingSoon, setComingSoong] = useState([]);
  const [visible, setVisible] = useState(10);

  useEffect(() => {
    const getMovies = async () => {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=ce19d4644c7d787dd26c825fb8b72580&language=en-US&page=1"
      );

      setMovies(data.results);
    };

    const getComingSoon = async () => {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=ce19d4644c7d787dd26c825fb8b72580&language=en-US&page=1&region=US"
      );

      setComingSoong(data.results.slice(0, 6));
    };

    getMovies();
    getComingSoon();
  }, []);

  const showButton = () => {
    if (visible <= 10) {
      setVisible((prevValue) => prevValue + 10);
    } else {
      setVisible((prevValue) => prevValue - 10);
    }
  };

  return (
    <>
      <div className="w-5/6 mx-auto text-white my-10">
        <div>
          <h2 className="text-3xl mb-2">Trending</h2>
          <Hr />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {movies?.slice(0, visible).map((movie) => (
              <div key={movie.id}>
                <Link to={`movie/${movie.id}`}>
                  <Img
                    src={`${
                      movie.poster_path &&
                      `http://image.tmdb.org/t/p/w780/${movie.poster_path}`
                    }`}
                    alt="image"
                  />
                </Link>
              </div>
            ))}
          </div>

          <button
            className="bg-violet-400 transition-all duration-500 hover:bg-violet-500 uppercase px-4 py-3 mt-5 rounded-lg mx-auto w-full md:w-1/3 flex justify-center"
            onClick={showButton}
          >
            {visible <= 10 ? "Show more" : "Show less"}
          </button>

          <div>
            <h2 className="text-3xl mb-2 mt-10">Coming Soon</h2>
            <Hr />

            <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 gap-4">
              {comingSoon.map((movie) => (
                <div key={movie.id}>
                  <Link to={`movie/${movie.id}`}>
                    <Img
                      src={`${
                        movie.poster_path &&
                        `http://image.tmdb.org/t/p/w780/${movie.poster_path}`
                      }`}
                      alt="Img Coming Soon"
                    />
                  </Link>
                  <div className="font-semibold text-sm mt-3">
                    <p className="line-clamp-1"> {movie.title}</p>
                    <p className="flex items-center gap-1">
                      <HiOutlineCalendar className="text-violet-400" />
                      {formatDate(movie.release_date)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
