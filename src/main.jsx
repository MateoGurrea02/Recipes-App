import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import RecipeList from "./pages/RecipeList";
import NewRecipe from "./pages/NewRecipe";
import { RecipeProvider } from "./context/RecipeContext";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserProvider from "./context/UserContext";
import { RutaProtegida } from "./context/UserContext";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/recetas",
    element: <RecipeList />,
  },
  {
    path: "/nueva-receta",
    element: <NewRecipe/>,
  },
  {
    path: '/login',
    element:<RutaProtegida><Login/></RutaProtegida>
  },
  {
    path: '/register',
    element:<RutaProtegida><Register/></RutaProtegida>
  },
]


ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <UserProvider>
      <RecipeProvider>
        <Routes>
          {
            routes.map(route => (
              <Route
              path={route.path}
              element={route.element}
              key={route.path}
              />))
          }
        </Routes>
      </RecipeProvider>
    </UserProvider>
  </Router>
);
