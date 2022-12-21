// Login -> Authentication
// Navbar -> Bişiler Ekleriz
// Main Nurse View -> Şu isimli hastanın şu şikayeti var -> Checkbox -> IsGood
// Main Patient View -> Ağrım var, Açım
// Admin View -> Add situation -> IF PATIENT HUNGRY
// Which nurse is related to Patient. -> Database
// Save -> New view -> When patient clicked -> Send to Nurse
// Patient Name, Yatak Numarası, IsComploted -> Şuan ilgileniliyor.

import * as React from 'react';
import Hello from './components/Hello/Hello';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Hello name="TypeScript" />
    </div>
  );
}

export default App;