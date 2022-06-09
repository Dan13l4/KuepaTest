import './App.css';
import React, {useState} from 'react';
import NavBar from './components/Navbar';
import Main from './components/Main';

function App() {

  const [inactive, setInactive] = useState(false);

  return (
    <div>
      <NavBar onCollapse={(inactive)=>{setInactive(inactive)}} />
      <Main/>
    </div>
  );
}

export default App;
