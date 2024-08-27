import Header from "../components/Header"
import React, { useContext, useState,useEffect } from "react"
import { UserContext } from "../context/UserContext"
import { Link, useNavigate } from "react-router-dom"

const Register = () => {
  const [userName, setUserName] = useState('')
  const {isAuth} = useContext(UserContext)
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const { register } = useContext(UserContext)
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault();
    let data = {
      user: userName,
      password1: password1,
      password2: password2,
    }
    register(data)
  }

  useEffect(() => {
    console.log(isAuth)
    if(isAuth){
      navigate('/')
    }
  }, []);

  return(
    <>
    <Header/>
    <form onSubmit={handleSubmit} className="flex justify-center">
      <div className="lg:w-2/8 md:w-1/4 bg-gray-100 rounded-lg p-8 flex flex-col justify-center mt-20">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Registrate</h2>
        <div className="relative mb-4">
          <label for="full-name" className="leading-7 text-sm text-gray-600">Nombre completo</label>
          <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          onChange={(e)=>{setUserName(e.target.value)}}/>
        </div>
        <div className="relative mb-4">
          <label for="password1" className="leading-7 text-sm text-gray-600">Contraseña</label>
          <input type="password" id="password1" name="password1" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          onChange={(e)=>{setPassword1(e.target.value)}}/>
        </div>
        <div className="relative mb-4">
          <label for="password2" className="leading-7 text-sm text-gray-600">Contraseña</label>
          <input type="password" id="password2" name="password2" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          onChange={(e)=>{setPassword2(e.target.value)}}/>
        </div>
        <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Iniciar</button>
        <p className="text-xs text-gray-500 mt-3">Ya tenes cuenta? <Link className="text-indigo-700" to='/login'>Inicia sesion</Link></p>
      </div>
    </form>
    </>
  )
}

export default Register