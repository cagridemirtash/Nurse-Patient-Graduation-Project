import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import {AppProps} from './types/AppProps'
import Button from '@mui/material/Button'

function App(){
  const [user, setUser] = useState("userName");
  
  useEffect(() => {
    console.log("Ben bir kere çalışıyorum")
    setUser("Cagri");
  }, [])
  return (
    <>
      <Navbar />
      {user}
    </>
  );
}

export default App;
