
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import css from "./Login.module.css"; // Add your CSS file

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className={css.loginContainer}>
      <h2>Welcome to My DashBoard App</h2>
      <p>Please log in to continue</p>
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  );
};

export default LoginPage;
