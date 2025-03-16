import { createContext, useEffect, useReducer } from "react";

//!create context
export const GlobalContext = createContext();

const initialState = {
    watchlist: localStorage.getItem("watchlist") 
      ? JSON.parse(localStorage. getItem("watchlist"))
      : [],
      watched: localStorage.getItem("watched") 
      ? JSON.parse(localStorage. getItem("watched"))
      : [],
     
};

//! provider components
export const GlobalProvider = (props) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
       localStorage.setItem("watchlist", JSON.stringify(state.watchlist))
       localStorage.setItem("watched", JSON.stringify(state.watched))
    }, [state])

    const addMovieToWatchlist = (movie) => {
        dispatch({type: "Add_Movie_to_Watchlist", payload: movie });
    }

    const removeMovieFromWatchlist = (id) => {
        dispatch({type: "Remove_Movie_From_Watchlist", payload: id});
    }

    const addMovieToWatched = (movie) => {
        dispatch({type: "Add_Movie_to_Watched", payload:movie});
    }

    const moveToWatchlist = (movie) => {
        dispatch({type: "Move_to_Watchlist", payload:movie});
    }
    const removeMovieFromWatched = (id) => {
        dispatch({type: "Remove_Movie_From_Watched", payload: id});
    }

    return(
        <GlobalContext.Provider value={{
           watchlist: state.watchlist,
           watched: state.watched,
           addMovieToWatchlist,
           removeMovieFromWatchlist,
           addMovieToWatched,
           moveToWatchlist,
           removeMovieFromWatched,
        }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}