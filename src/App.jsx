import { useContext } from "react";
import RecipeContext from "./context/RecipeContext";
import SearchComponent from "./components/SearchComponent";
import CardComponent from "./components/CardComponent";
import Spinner from "./components/Spinner";

const App = () => {
  const { recipes, loading } = useContext(RecipeContext);

  return (
    <>
      <div className="mainContainer">
        <div className="mainContent">
          <div className="w-full md:w-1/2 section1">
            <div className="section1Container">
              <h1 className="text-[28px] font-[800] text-darkOrange uppercase text-center">
                {" "}
                Explore Culinary Delights
              </h1>
              <div className="">
                <img
                  src="/hero2.png"
                  alt="hero"
                  className="object-contain md:w-[500px]"
                />
              </div>
              <SearchComponent />
            </div>
          </div>
          <div className="w-full"></div>

          <div className="section2">
            {loading ? (
              <Spinner />
            ) : (
              <div>
                {recipes.length < 1 ? (
                  <>
                    <div className="section2Content">
                      <h1 className="text-[20px] font-[500] text-darkOrange uppercase text-center">
                        Welcome to our delightful
                      </h1>
                      <h1 className="text-[24px] font-[800] text-darkOrange uppercase text-center pb-[20px]">
                        Recipe Finder
                      </h1>
                      <div className="italic">
                        Whether you're seeking weeknight dinner solutions,
                        show-stopping desserts, or simply seeking culinary
                        adventure, our recipe website is your virtual kitchen
                        companion, ready to inspire, educate, and celebrate the
                        art of cooking. Join us in exploring the endless
                        possibilities that food brings to our lives.
                      </div>

                      <h2 className="text-[20px] font-[800] text-darkOrange text-center pt-[20px]">
                        Start Searching Now!
                      </h2>
                    </div>
                  </>
                ) : (
                  <div className="space-y-6">
                    {recipes.map((recipe, index) => (
                      <CardComponent key={index} recipe={recipe} />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
