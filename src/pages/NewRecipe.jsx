import Header from '../components/Header'
import AddRecipes from '../components/AddRecipes'
import { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
const NewRecipe = ()=>{
  const {isAuth} = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    console.log(isAuth)
    if(!isAuth){
      navigate('/')
    }
  })

  return (
    <>
      <Header/>
      <AddRecipes/>  
    </>
  )
}

export default NewRecipe