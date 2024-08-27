import React, { createContext, useState, useEffect, useContext } from 'react';
import { UserContext } from './UserContext';

// Crear el contexto de tareas
export const RecipeContext = createContext();

// Proveedor del contexto de tareas
export const RecipeProvider = ({ children }) => {
  const {isAuth} = useContext(UserContext)
  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem('recipes');
    return savedRecipes ? JSON.parse(savedRecipes) : [];
  });

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const removeRecipe = (id) => {
    if(isAuth){
      setRecipes(recipes.filter(recipe => recipe.id !== id));
    }else{
      alert('Debes estar autenticado para eliminar recetas')
    }
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, removeRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};