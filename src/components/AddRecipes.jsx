
import React, { useState, useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import { useNavigate } from 'react-router-dom';

const AddRecipe = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { addRecipe } = useContext(RecipeContext);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ id: Date.now(), title, description});
    setTitle('');
    setDescription('');
    navigate('/recetas')
  };

  return (
    <div className='flex justify-center'>
    <form onSubmit={handleSubmit} class=" bg-gray-100 rounded-lg p-8 mt-10 flex flex-col">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Crear nueva receta</h2>
      <div class="relative mb-4">
        <label for="full-name" class="leading-7 text-sm text-gray-600">Nombre de la receta</label>
        <input
        type="text"
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Agregar Nombre"
        required
      />
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Descripcion de la receta</label>
        <textarea
        type="text"
        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Agregar descripcion"
        required
      />
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit">Crear</button>
    </form>
    </div>
  );
};

export default AddRecipe;