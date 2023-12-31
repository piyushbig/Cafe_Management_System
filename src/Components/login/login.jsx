import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/authContext";
import "./login.css";

const Login = () => {
  //   const [inputs, setInputs] = useState({
  //     username: "",
  //     password: "",
  //   });

  //   const [err, setErr] = useState(null);

  //   const navigate = useNavigate();

  //   const handleChange = (e) => {
  //     setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  //   };

  //   const { login } = useContext(AuthContext);

  //   const handleLogin = async (e) => {
  //     e.preventDefault();

  //     try {
  //       await login(inputs);
  //       navigate("/");
  //     } catch (err) {
  //       setErr(err.response.data);
  //     }
  //   };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          {/* <h1>Explore World.</h1>
          <p>
            "Welcome to Our Social Community! We're thrilled to have you here.
            Join our vibrant community and embark on a journey of connection,
            discovery, and engagement.
          </p>
          <span>Don't you have an account?</span> */}
          {/* <Link to="/register">
            <button>Register</button>
          </Link> */}
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <label className="labels">User Role</label>
            {/* <input
              type="text"
              placeholder="Username"
              name="username"
              
            /> */}
            <select id="dropDown">
              <option value="">Choose one</option>
              <option value="Costumer">Admin</option>
              <option value="Costumer">Customer</option>
              <option value="Costumer">Cafe</option>
              <option value="Costumer">Delivery Person</option>
            </select>
            <label className="labels">Email</label>
            <input type="email" placeholder="Email" name="email" />
            <label>Password</label>
            <input type="password" placeholder="Password" name="password" />
            {/* {err && err} */}
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
