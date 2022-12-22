
import './App.css';
import Navbar from './components/Navbar/Navbar'

interface AppProps {
  name : string;
  secondName?: string;
}

function App({name , secondName = "Default Text"} : AppProps){
  return (
    <>
      <Navbar />
      <h1>{name}</h1>
      {secondName && <p>{secondName}</p>}
    </>
  );
}

export default App;
