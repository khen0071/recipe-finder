import { useState, useContext } from "react";
import RecipeContext from "../context/RecipeContext";

const SearchComponent = () => {
  const [text, setText] = useState();

  const { recipes, searchRecipes, clearSearch } = useContext(RecipeContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Enter A Recipe");
    } else {
      searchRecipes(text);
      setText("");
    }
  };

  return (
    <>
      <div className="searchContainer">
        <form onSubmit={submitHandler} className="flex space-x-3">
          <label className="relative block w-[200px]">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              className="inputSearch"
              placeholder="Search for recipe..."
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
          <button type="submit" className="searchButton">
            Search
          </button>
        </form>

        {recipes.length > 1 && (
          <button type="submit" className="searchButton" onClick={clearSearch}>
            Clear Search
          </button>
        )}
      </div>
    </>
  );
};

export default SearchComponent;
