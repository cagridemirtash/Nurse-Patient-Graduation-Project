import { useEffect, useState } from "react";
import "./App.css";
import AdminPage from "./containers/Admin";
import Navbar from "./components/Navbar/Navbar";
import { AppProps } from "./types/AppProps";
import Button from "@mui/material/Button";

function App() {
  const [user, setUser] = useState("userName");

  useEffect(() => {
    setUser("Cagri");
  }, []);
  return (
    <>
      <AdminPage />
    </>
  );
}

export default App;
