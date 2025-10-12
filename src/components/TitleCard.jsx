import React, { useEffect, useRef, useState } from "react";
import card_data from "../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const TitleCard = ({ title, category }) => {
  const cardsRef = useRef();
  const [apiData, setApiData] = useState([]);

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjczYjMyMmMwMzhlNDdlN2Q5ZjgzOGRkOGM1ODMzNCIsIm5iZiI6MTcxMjAxMjkxOC43NzMsInN1YiI6IjY2MGIzZTc2ZDZkYmJhMDE2MzZmNmIzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1vgseOrc8Fe3JjKvsXz5J7XJQZuQ3sfBtuIDrE3HFGI",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res?.results[0]);
        setApiData(res?.results.reverse())
      })
      .catch((err) => console.error(err));
    console.log(apiData);

    // cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="overflow-hidden ">
      <h2 className="text-xl ms-5 font-semibold my-5 ">{title || "NAN"}</h2>

      <div
        ref={cardsRef}
        className="flex items-center gap-6 overflow-scroll hide-scrollbar"
      >
        {apiData.map((item, index) => (
          <Link to={`/player/${item.id}`} className="shrink-0 relative" key={index}>
            <img
              src={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
              alt={item.title}
              className=" w-[18rem]"
            />
            <p className="absolute  px-3 z-10 bottom-1 right-1 font-semibold">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCard;
