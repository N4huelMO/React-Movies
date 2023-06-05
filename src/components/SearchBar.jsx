import { BiSearch } from "react-icons/bi";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const getSearch = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/search/multi?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&query=${search}&page=1&include_adult=false`
      );

      setFilter(data.results);
    };

    getSearch();
  }, [search]);

  const paramsLength = Object.keys(useParams()).length;

  return (
    <>
      <div
        className={`w-4/6 mx-auto ${
          paramsLength == 0 ? "lg:flex" : "hidden"
        } flex-col items-center my-auto`}
      >
        <div className="relative flex justify-center items-center w-full">
          <form className="flex items-center w-full h-12 rounded-full bg-white overflow-hidden">
            <div className="flex w-full h-full">
              <div className="flex justify-center items-center h-full w-12 text-gray-300">
                <BiSearch className="w-7 h-7" />
              </div>
              <input
                className="h-full w-full outline-none focus:outline-0 text-sm font-normal text-gray-700"
                type="text"
                placeholder="Search for a movie, tv shows or anime.."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
          </form>

          <div className="text-black top-12 absolute cursor-pointer w-[calc(100%_-_3rem)]">
            {filter.map((movie) => (
              <Link
                key={movie.id}
                to={`${
                  movie.media_type === "tv"
                    ? `/series/${movie.id}`
                    : `/movie/${movie.id}`
                }`}
              >
                <p className="px-2 py-1 bg-gray-100 hover:bg-gray-200 border-b-2 last:border-b-0">
                  {movie.title ?? movie.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
