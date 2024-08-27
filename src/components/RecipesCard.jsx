import React,{useContext} from "react"
import { RecipeContext } from "../context/RecipeContext";
import { UserContext } from "../context/UserContext";

const RecipesCard = ({recipe})=>{
  const { removeRecipe } = useContext(RecipeContext);
  const { isAuth } = useContext(UserContext)
  return(
    <>
      <div className="container mx-auto px-4 m-5">
        {
          <div key={recipe.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-5">
                  <h5 className="text-xl font-semibold mb-2">{recipe.title}</h5>
                  <p className="text-gray-700 mb-4">{recipe.description}</p>
                  { isAuth ? 
                  <button
                      onClick={() => removeRecipe(recipe.id)}
                      className="bg-red-500 text-white font-bold mx-1 py-2 px-4 rounded"
                  >
                      Eliminar
                  </button>:
                  ''
                  }
              </div>
          </div>
        }
      </div>
    </>
    
  )
}

export default RecipesCard