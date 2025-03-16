export default (state, action) => {
     switch(action.type){
        case "Add_Movie_to_Watchlist":
            return{
              ...state,
              watchlist: [...state,watchlist, action.payload],
            };
            case "Remove_Movie_From_Watchlist":
                return{
                    ...state,
                    watchlist: state.watchlist.filter((movie) => movie.id !== action.payload),
                };
            case "Add_Movie_to_Watched":
                return{
                    ...state,
                    watchlist: state.watchlist.filter(
                        (movie) => movie.id !== action.payload.id
                    ),
                    watched: [...state.watched, action.payload],
                };
            case "Move_to_Watchlist":
                return{
                    ...state,
                    watched: state.watched.filter(
                        (movie) => movie.id !== action.payload.id
                    ),
                    watchlist: [...state.watchlist, action.payload],
                }
                case "Remove_Movie_From_Watched":
                return{
                    ...state,
                    watched: state.watched.filter((movie) => movie.id !== action.payload),
                };
            default:
                return state;
     }
};