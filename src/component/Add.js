import React, { useState } from "react";
import ResultCart from "./ResultCart";
import { GlobalContext } from "../context/GlobalState";

const Add = () => {
  const [query, setQuery] = useState("");
  

  // Global context'ten state ve dispatch'i al
  const { state, dispatch } = useContext(GlobalContext);

  function onChange(e) {
    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          dispatch({ type: "SET_RESULTS", payload: data.results });
        } else {
          dispatch({ type: "SET_RESULTS", payload: [] });
        }
      });
  }

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <img
            src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg"
            alt="The Movie Database Banner"
          />
          <div className="titles">
            <h1>Hoş Geldiniz.</h1>
            <h2>Milyonlarca film, TV şovu ve keşfedecek kişi. Şimdi keşfedin.</h2> 
          </div>
          <div className="input-wrapper">
            <input
              value={query}
              type="text"
              onChange={onChange}
              placeholder="Film, dizi, kişi ara..."
            />
          </div>

          {state.results.length > 0 && (
            <ul className="results">
              {state.results.map((movie) => (
                <li key={movie.id}>
                  <ResultCart movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
