import React, { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import RecipesCard from "../components/RecipesCard";
import Header from "../components/Header";
import imgError from "../assets/error.webp";

const RecipeList = () => {
  const { recipes } = useContext(RecipeContext);
  return (
    <>
      <Header />
      <div className="min-h-screen py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            </div>
          {recipes != "" ? (
            recipes.map((recipe) => (
              
              <RecipesCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <img
                src={imgError}
                className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              />
              <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Ups! Todavia no hay recetas
              </h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RecipeList;
