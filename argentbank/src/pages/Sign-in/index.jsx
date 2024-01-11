import { useRef, useState } from "react";
import { setEmail, setToken, setUser, setId } from "../../actions/logInAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const name = useRef();
  const pass = useRef();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputPassValue, setInputPassValue] = useState("");

  const formNameError = (e) => {
    setInputNameValue(e.target.value);
    const emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
    console.log(inputNameValue);
    if (emailRegExp.test(inputNameValue)) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const formPassError = (e) => {
    setInputPassValue(e.target.value);
    console.log(inputPassValue);
    if (inputPassValue !== "") {
      setError(false);
    } else {
      setError(true);
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    const emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
    const postData = {
      email: name.current.value,
      password: pass.current.value,
    };
    if (emailRegExp.test(name.current.value) && pass.current.value !== "") {
      post(postData);
    } else {
      setError(true);
    }
  };

  async function post(postData) {
    const post = await fetch("http://localhost:3001/api/V1/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(postData),
    });
    let result = await post.json();

    if (result.message !== "User successfully logged in") {
      setError(true);
    } else {
      dispatch(setToken(result.body.token));
      dispatch(setEmail(postData.email));
      getProfile(result);
    }
  }

  async function getProfile(result) {
    const post = await fetch("http://localhost:3001/api/V1/user/profile", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + result.body.token,
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    let userResult = await post.json();
    dispatch(setUser(userResult.body.userName));
    dispatch(setId(userResult.body.id));
    navigate("/User/" + userResult.body.id);
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={(e) => submit(e)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              ref={name}
              type="text"
              id="username"
              onChange={(e) => formNameError(e)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              ref={pass}
              type="password"
              id="password"
              onChange={(e) => formPassError(e)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
          {error && (
            <p className="error">Invalid email format or empty password</p>
          )}
        </form>
      </section>
    </main>
  );
}
export default SignIn;
