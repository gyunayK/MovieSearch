import React from "react";
 import { Figure } from "./Style/Card.styled";

function Card({ movie }) {
  return (
    <>
      {
        (movie.Title = movie.Title ? (
          <Figure>
            <h1>{movie.Title}</h1>
            <img src={movie.Poster} alt={movie.Title} />
            <figcaption>
            <h3>Info</h3>
            <p>Year: {movie.Year}</p>
            <p>IMBd rating: {movie.imdbRating}</p>
            <p>Genre: {movie.Genre}</p>
            </figcaption>
          </Figure>
        ) : (
          ""
        ))
      }
    </>
  );
}

export default Card;













// import React from "react";
// import { StyledWrapper, StyledImg } from "./Style/Card.styled";

// function Card({ movie }) {
//   return (
//     <>
//       {
//         (movie.Title = movie.Title ? (
//           <StyledWrapper>
//             <h1>{movie.Title}</h1>
//             <p>Year: {movie.Year}</p>
//             <p>IMBd rating: {movie.imdbRating}</p>
//             <p>Genre: {movie.Genre}</p>
//             <StyledImg src={movie.Poster} alt={movie.Title} />
//           </StyledWrapper>
//         ) : (
//           ""
//         ))
//       }
//     </>
//   );
// }

// export default Card;

