import data from "../data/data";

const Cards = () => {
  return (
    <>
      <div className="flex justify-center text-white mt-5 mb-2">
        <h2 className="font-semibold text-3xl md:text-4xl">
          Explore, Discover and Enjoy
        </h2>
      </div>

      <hr className="w-5/6 mx-auto border-0 h-px mb-2 md:mb-1 bg-gradient-to-l from-transparent via-violet-400 to-transparent" />

      <div className="w-5/6 mx-auto md:flex gap-8 text-white">
        {data.map((card) => (
          <div
            key={card.id}
            className="bg-cover bg-top bg-no-repeat card relative h-36 md:h-96 rounded-lg flex-[0.7] my-3 transition-all duration-700 group hover:flex-5"
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <h3 className="absolute font-semibold text-3xl bottom-5 left-5 m-0 md:opacity-0 transition-opacity ease-in duration-500 group-hover:opacity-100">
              {card.title}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
