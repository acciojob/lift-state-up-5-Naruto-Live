
import React , { useState } from "react";
import Login from "./Login";
import './../styles/App.css';

const App = () => {

  const [isLoggedIn , setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Parent Component</h1>
        <Login 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn}
         />
    </div>
  )
}

export default App
