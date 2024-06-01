import "./Login.css";
import { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    /* Animation for login button */
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 500);

    /* Send POST request to backend endpoint */
    navigate(`/Dashboard`);
  };

  const loginButton = isClicked ? "Login-button clicked" : "Login-button";

  return (
    <div className="wrapper-login">
      <div className="login-page">
        <div className="Login-container">
          <div className="logo-container"></div>

          <div className="Input-container">
            <div className="Input-container-det">
              {" "}
              Username
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="Input-container-det">
              {" "}
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className={loginButton} onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
