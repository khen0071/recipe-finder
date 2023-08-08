import { createContext, useReducer } from "react";
import RecipeReducer from "./RecipeReducer";

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const initialState = {
    recipes: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(RecipeReducer, initialState);

  const searchRecipes = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      query: text,
    });
    const url = import.meta.env.VITE_RECIPE_URL;
    const url_headers = {
      "X-RapidAPI-Key": "7a650e0016mshd7fa71d9fd386f9p16d78fjsn71e964cbed3d",
      "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
    };

    const res = await fetch(`${url}?${params}`, { headers: url_headers });
    const data = await res.json();
    dispatch({
      type: "GET_RECIPES",
      payload: data,
    });
  };

  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  const clearSearch = () =>
    dispatch({
      type: "CLEAR_USERS",
    });

  return (
    <RecipeContext.Provider
      value={{
        ...state,
        searchRecipes,
        clearSearch,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeContext;
