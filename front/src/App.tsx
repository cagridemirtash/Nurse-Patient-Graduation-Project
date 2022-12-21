
import './App.css';
import Cagri from "../src/component/cagri"
import { useState } from 'react';
// Login -> Authentication
// Navbar -> Bişiler Ekleriz
// Main Nurse View -> Şu isimli hastanın şu şikayeti var -> Checkbox -> IsGood
// Main Patient View -> Ağrım var, Açım, Kakam geldi
// Admin View -> Add situation -> IF PATIENT HUNGRY
// Which nurse is related to Patient. -> Database
// Save -> New view -> When patient clicked -> Send to Nurse
// Patient Name, Yatak Numarası, IsComploted -> Şuan ilgileniliyor.
async function getData() : Promise<any>{
  return fetch('https://localhost:44350/WeatherForecast')
                // the JSON body is taken from the response
                .then(res => res.json())
                .then(res => {
                        // The response has an `any` type, so we need to cast
                        // it to the `User` type, and return it from the promise
                        return res as any
                })
}
function App() {
  // console.log(getData())
  return (
    <>
      <h1>Mustafa Bir Java Geliştiricisidir.</h1>
      <Cagri />
    </>
  );
}

export default App;
