import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {getLocalStorage, setLocalStorage} from '../utils/myLocalStorage'
import {getSessionStorage, setSessionStorage} from '../utils/mySessionStorage'
import { Navigate } from "react-router-dom";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState('')
  const [isAuth,setIsAuth] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if(getSessionStorage('user') != ''){
      setUser(getSessionStorage('user'))
      setIsAuth(true)
    }
  }, []);

  const login = (usuario, password)=>{
    let data = {
      user:usuario,
      password:password,
    }
    let datosSotrage
    if(getLocalStorage('user')){
      datosSotrage = getLocalStorage('user')
    }
    if(datosSotrage.user === usuario && datosSotrage.password === password){
      setUser(data)
      setIsAuth(true)
      setSessionStorage('user',data)
      navigate('/')
    }else{
      alert('Usuario o contraseña incorrectos')
    }
  }

  const logout = ()=>{
    setUser(null)
    setIsAuth(false)
  }

  const register = (data)=>{
    if(data.password1 != data.password2){
      return alert('Las contraseñas deben ser iguales')
    }else if(getLocalStorage('user').user == data.user){
      return alert('Este usuario ya existe')
    }
    else{
      data = {
        user:data.user,
        password:data.password1
      }
      setUser(data)
      setLocalStorage('user',data)
      navigate('/login')
    }
  }
  

  return (
    <UserContext.Provider value={{ user,setUser,login,register,logout,isAuth}}>
      {children}
    </UserContext.Provider>
  )
}
export default UserProvider

export const useAuth =()=> useContext(UserContext)

export const RutaProtegida = ({ children }) => {
  const { isAuth} = useAuth()
  if (isAuth ) {
      return <Navigate to='/'/>
  }
  return children
}