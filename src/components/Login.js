import React from "react";
const Login = ({ isLoggedIn , setIsLoggedIn }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  if(isLoggedIn) {
    return <p>You are logged in!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
        <label for="name">Username:</label>
        <input id="name" type="text" placeholder="Username"/>

      <br /><br />

        <label for="pass">Password:</label>
        <input id="pass" type="password" placeholder="Password"/>

      <br /><br />

      <button type="submit">
        Login
      </button>

    </form>
  );
};

export default Login;