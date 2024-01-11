import Logo from "../../assets/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import { setToken, setUser, setId, setEmail } from "../../actions/logInAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const userAdress = "User/" + user;
  const signOut = () => {
    localStorage.clear();
    dispatch(setToken(null));
    dispatch(setUser(null));
    dispatch(setId(null));
    dispatch(setEmail(null));
  };
  const serialisedState = localStorage.getItem("persistantState");
  console.log("valeure" + serialisedState);
  if (serialisedState !== null) {
    dispatch(setToken(serialisedState));
    getProfile(serialisedState);
  }

  async function getProfile(serialisedState) {
    const post = await fetch("http://localhost:3001/api/V1/user/profile", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + serialisedState,
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    let userResult = await post.json();
    dispatch(setUser(userResult.body.userName));
    dispatch(setId(userResult.body.id));
    dispatch(setEmail(userResult.body.email));
  }

  return (
    <nav className="main-nav">
      <NavLink to="./" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {user != null ? (
          <NavLink to={userAdress} className="main-nav-item">
            <i className="fa fa-user-circle faHeader"></i>

            {user}
          </NavLink>
        ) : (
          <NavLink to="/Sign-in" className="main-nav-item">
            <i className="fa fa-user-circle faHeader"></i>
            Sign in
          </NavLink>
        )}
        {token != null ? (
          <NavLink to="/" className="main-nav-item" onClick={signOut}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </NavLink>
        ) : (
          <p></p>
        )}
      </div>
    </nav>
  );
}

export default Header;
