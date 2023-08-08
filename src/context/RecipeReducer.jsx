const RecipeReducer = (state, action) => {
  switch (action.type) {
    case "GET_RECIPES":
      return { ...state, recipes: action.payload, loading: false };
    case "SET_LOADING":
      return { ...state, loading: true };
    case "CLEAR_USERS":
      return { ...state, recipes: [] };
    default:
      return state;
  }
};

export default RecipeReducer;
