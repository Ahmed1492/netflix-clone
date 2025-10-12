import React, { useEffect, useState } from "react";
import back_arrow_icon from "../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjczYjMyMmMwMzhlNDdlN2Q5ZjgzOGRkOGM1ODMzNCIsIm5iZiI6MTcxMjAxMjkxOC43NzMsInN1YiI6IjY2MGIzZTc2ZDZkYmJhMDE2MzZmNmIzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1vgseOrc8Fe3JjKvsXz5J7XJQZuQ3sfBtuIDrE3HFGI",
    },
  };
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        setMovieDetails(res.results[0]);
        console.log(res.results);
      })
      .catch((err) => console.error(err));
  }, [id]);
  return (
    <div className="h-[100vh] flex flex-col items-center px-[4%] justify-center">
      <img
        onClick={() => {
          if (window.history.length > 1) {
            navigate(-1);
          } else {
            navigate("/"); // fallback to home
          }
        }}
        className="absolute w-[50px] top-[20px] left-[20px] cursor-pointer"
        src={back_arrow_icon}
        alt="back_arrow_icon"
      />
      <iframe
        src={`https://www.youtube.com/embed/${movieDetails?.key}`}
        title="trailer"
        allowFullScreen
        width="100%"
        height="90%"
        frameBorder="0"
      ></iframe>
      <div className=" w-full flex items-center justify-between mt-5 text-lg ">
        <p> {movieDetails?.published_at?.slice(0, 10)}</p>
        <p>{movieDetails?.name || "test"}</p>
        <p> {movieDetails?.type}</p>
      </div>
    </div>
  );
};

export default Player;
