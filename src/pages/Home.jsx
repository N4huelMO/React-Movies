import Header from "../components/Header";
import Cards from "../components/Cards";
import Movies from "../components/Movies";
import TvShows from "../components/TvShows";
import Footer from "../components/Footer";
import Headline from "../components/Headline";

const Home = () => {
  return (
    <>
      <Header />
      <Headline />
      <Cards />
      <Movies />
      <TvShows />
      <Footer />
    </>
  );
};

export default Home;
