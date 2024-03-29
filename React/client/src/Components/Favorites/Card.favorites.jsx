import { Figure, Notfound } from "./Card.styled";
import defaultImage from "@/assets/IMG/No_IMG.png";
import loadingImage from "@/assets/IMG/second.gif";
import Modal from "@/Components/Modal/Modal";

import { MdOutlineFavorite } from "react-icons/md";
import { useState } from "react";

import { genre_ID_Object } from "@/Components/Card/genre_ID";

function Card({ movie, handleRemoveFavorite }) {

  const [showModal, setShowModal] = useState(false);
  const genreLookup = genre_ID_Object.genres.reduce((acc, genre) => {
    acc[genre.id] = genre.name;
    return acc;
  }, {});

  const genreNames = (movie.genre_ids || [])
    .map((id) => genreLookup[id])
    .join(", ");

  return (
    <>
      {movie.length === 0 ? (
        <Figure>
          <img src={loadingImage} alt="loading animation" id="beforeLoad" />
        </Figure>
      ) : movie && movie.title ? (
        <div className="cardFavWrapper">
          <MdOutlineFavorite
            className="card_icon "
            onClick={() => handleRemoveFavorite(movie)}
          />
          <Figure>
            <img
              className="cardL cursor-pointer"
              onClick={() => setShowModal(true)}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                  : defaultImage
              }
              alt={movie.title}
            />
            <figcaption>
              <h3>Info</h3>
              <p>Year: {movie.release_date}</p>
              <p>IMBd rating: {movie.vote_average}</p>
              <p>Genre: {genreNames || "Not available"}</p>
            </figcaption>
          </Figure>
          {showModal && (
              <Modal
                movie={movie}
                showModal={showModal}
                setShowModal={setShowModal}
              />
            )}
        </div>
      ) : (
        <Notfound>Movie Not Found</Notfound>
      )}
    </>
  );
}

export default Card;
