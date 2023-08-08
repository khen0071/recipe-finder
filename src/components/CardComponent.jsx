const CardComponent = ({ recipe }) => {
  const { title, ingredients, instructions } = recipe;
  let splitIngredients = ingredients.split("|");

  return (
    <>
      <div className="recipeCard">
        <div className="recipeCardContent">
          <h2 className="recipeCardTitle">{title}</h2>

          <p className="recipeCardp">Ingredients:</p>
          {splitIngredients.map((item, index) => (
            <ul key={index}>
              <li className="recipeCarding">- {item}</li>
            </ul>
          ))}

          <p className="recipeCardp">Cooking Instructions:</p>
          <span className="recipeInstructions">{instructions}</span>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
