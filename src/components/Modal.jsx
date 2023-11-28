import React from "react";

const Modal = ({ onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50 modal-container`}
    >
      <div className="bg-white p-6 rounded z-50 text-xl w-11/12 sm:w-auto">
        <p className="">I redeveloped this project using Next.js</p>

        <div className="flex gap-1">
          <p>You can see it </p>
          <a
            href={"https://reactmovies-nextjs.vercel.app/"}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase text-violet-700 underline"
          >
            here
          </a>
        </div>

        <button
          onClick={onClose}
          className="bg-violet-500 hover:bg-violet-700 transition-all text-white px-4 py-2 mt-4 rounded w-full uppercase text-base"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
