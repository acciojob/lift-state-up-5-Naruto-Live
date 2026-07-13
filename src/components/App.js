
import React , { useState } from "react";
import Login from "./Login";
import './../styles/App.css';

const App = () => {

  const [isLoggedIn , setIsLoggedIn] = useState(false);

  return (
    <div>
        <Login 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn}
         />
    </div>
  )
}

export default App
