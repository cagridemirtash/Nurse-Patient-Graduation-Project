
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import {AppProps} from './types/AppProps'


function App({name , secondName = "Default Text"} : AppProps){
  const [user, setUser] = useState("userName");
  
  useEffect(() => {
    console.log("Ben bir kere çalışıyorum")
  }, [])
  return (
    <>
      <Navbar />
      <h1>{name}</h1>
      {secondName && <p>{secondName}</p>}
      {user}
    </>
  );
}

export default App;
