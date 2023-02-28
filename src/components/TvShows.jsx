import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";

const TvShows = () => {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    const getTvShows = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/tv/top_rated?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=1`
      );

      setTvShows(data.results);
    };

    getTvShows();
  }, []);

  return (
    <div className="w-5/6 mx-auto text-white my-10">
      <h2 className="text-3xl mb-2">Top Rated Anime & TV Shows</h2>
      <hr className="border-0 h-px mb-2 md:mb-1 bg-gradient-to-l from-transparent via-violet-400 to-transparent" />

      <Swiper
        slidesPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },

          1200: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={10}
        slidesPerGroup={4}
        loop={false}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper pb-10"
      >
        {tvShows.map((serie) => (
          <SwiperSlide key={serie.id}>
            <Link to={`serie/${serie.id}`}>
              <img
                className="rounded-lg object-cover transition-all duration-300 hover:brightness-125 scale-95 hover:scale-100"
                src={`${
                  serie.poster_path &&
                  `http://image.tmdb.org/t/p/w780/${serie.poster_path}`
                }`}
                alt="serieimage"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TvShows;
