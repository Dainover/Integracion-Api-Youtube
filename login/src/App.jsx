import { useState } from 'react'
import appFirebase from './credenciales'
import {getAuth, onAuthStateChanged} from "firebase/auth"//verifica la utenticacion de un usuario si esta o no 
const auth = getAuth(appFirebase);


import Home from './components/Home'
import Login from './components/Layout/Layout';

function App() {
   const [usuario, setUsuario]= useState(null)


   onAuthStateChanged(auth, (usuarioFirebase) =>{

    if (usuarioFirebase){
      setUsuario(usuarioFirebase)//Le mando que se guarde el usuario
    }
    else{
      setUsuario(null)
    }
   }
    
  )
  return (
   <div>
      {usuario ? <Home  correoUsuario= {usuario.email}/> : <Login/>}
   </div>
  )
}

export default App
