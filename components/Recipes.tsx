import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { BsFileText } from "react-icons/bs";
import { GiKnifeFork } from "react-icons/gi";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import "splide-nextjs/splide/dist/css/themes/splide-default.min.css";
import { Recipe } from "../typs/product";
type Props = {};

const Recipes = (props: Props) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      fetch("http://localhost:3000/api/recipe")
        .then((res) => res.json())
        .then((data) => setRecipes(data));
    })();
  }, []);

  const [open, setOpen] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState<Recipe>({});
  const handleClick = (newrecipe: Recipe) => {
    console.log(newrecipe)
    console.log("newrecipe")
    setCurrentRecipe(newrecipe);
    setOpen(!open);
  };
  // console.log(open);

  return (
    <div className="h-auto w-screen py-32 text-center bg-white overflow-hidden">
      <Modal open={open} setOpen={setOpen} recipe={currentRecipe} />

      <div className="w-[55%] m-auto text-center text-5xl font-austin space-y-5">
        <h2>THE ROYAL RECIPYS</h2>
        <p className="font-roboto text-sm">
          There are many recipys and items that you can enjoy with SHUKRAN Rice
        </p>
      </div>

      <div className="mt-20 ">
        <Splide
          options={{
            drag: "free",
            arrows: false,
            perPage: 4,
            pagination: false,
            marginRight: 200,
            gap: "30rem",
          }}
        >
          {recipes.map((recipe, index) => (
            <SplideSlide
              key={index}
              onClick={() => handleClick(recipe)}
              className=" cursor-pointer"
            >
              <RecipeCard recipe={recipe} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Recipes;

const RecipeCard = (props: { recipe: Recipe }) => {
  const { recipe } = props;
  return (
    <div className="w-[400px] ">
      <div className="h-[450px] w-full overflow-hidden group">
        <img
          src={`${recipe.image}`}
          alt=""
          className="h-full w-full object-cover group-hover:scale-110 duration-300"
        />
      </div>

      <div className=" text-center w-5/6 mx-auto font-austin space-y-3">
        <button className="text-xs font-roboto mt-4">READ MORE</button>
        <h2 className="text-3xl">{recipe.name}</h2>
        <p className="cutoffText	">{recipe.discription}</p>
      </div>
    </div>
  );
};

function Modal(props: { recipe: Recipe; open: Boolean; setOpen: any }) {
  const { recipe, open, setOpen } = props;
  const cancelButtonRef = useRef(false);
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((pre) => !pre);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-90 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="w-[80vw] bg-[#43283A] p-8 mx-auto flex h-[85vh] justify-between rounded-md relative z-50">
                <button
                  className=" text-white text-3xl absolute top-4 right-5 outline-none border-none"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <GiKnifeFork />
                </button>
                <div className=" w-3/6 flex items-center rounded-md overflow-hidden bg-green-200">
                  <img
                    src={`${recipe?.image}`}
                    alt=""
                    className=" h-full w-full object-cover"
                  />
                </div>

                <div className=" w-3/6 h-full text-white text-left ml-10 flex flex-col justify-between">
                  <h1 className=" text-3xl font-austin mb-5">{recipe?.name}</h1>
                  <div className="h-[80%] w-full mx-auto overflow-hidden overflow-y-scroll ">
                    {toggle ? (
                      <ul className=" list-disc space-y-2 ml-4 text-left">
                        {recipe?.ingredients.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className=" list-disc space-y-2 text-left">
                        {recipe?.discription}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-between items-center gap-5">
                    <button
                      className={`w-3/6 h-12 flex justify-center items-center rounded-lg border-2 border-white ${
                        toggle ? "bg-white/20" : " bg-white/50"
                      } backdrop-blur-2xl text-white text-lg`}
                      onClick={handleToggle}
                    >
                      <BsFileText className="mr-2" /> Instructions
                    </button>
                    <button
                      className={`w-3/6 h-12 flex justify-center items-center rounded-lg border-2 border-white ${
                        toggle ? "bg-white/50" : " bg-white/10"
                      } backdrop-blur-2xl text-white text-lg`}
                      onClick={handleToggle}
                    >
                      <img
                        src="/assets/coodk.png"
                        alt=""
                        className="h-full object-cover"
                      />
                      Ingrediants
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
