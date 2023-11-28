import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Serie from "./pages/Serie";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && <Modal onClose={closeModal} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:movieId" element={<Movie />} />
        <Route path="serie/:serieId" element={<Serie />} />
      </Routes>
    </>
  );
}

export default App;
