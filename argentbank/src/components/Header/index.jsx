import Logo from "../../assets/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userSlice } from "../../Slices/userSlice";
import { setProfilThunk } from "../../thunkActionsCreator";

function Header() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user.user);
  //const id = useSelector((state) => state.user.id);
  const userAdress = "User/";
  const signOut = () => {
    localStorage.clear();
    dispatch(userSlice.actions.setToken(null));
    dispatch(userSlice.actions.setUser(null));
    dispatch(userSlice.actions.setId(null));
    dispatch(userSlice.actions.setEmail(null));
    dispatch(userSlice.actions.setFirstName(null));
    dispatch(userSlice.actions.setLastName(null));
  };
  const serialisedState = localStorage.getItem("persistantState");
  if (serialisedState !== null) {
    dispatch(userSlice.actions.setToken(serialisedState));
    const setProfilResult = dispatch(setProfilThunk(token));
  }
  /*async function getProfile(serialisedState) {
    const post = await fetch("http://localhost:3001/api/V1/user/profile", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + serialisedState,
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    let userResult = await post.json();
    dispatch(userSlice.actions.setUser(userResult.body.userName));
    dispatch(userSlice.actions.setId(userResult.body.id));
    dispatch(userSlice.actions.setEmail(userResult.body.email));
    dispatch(userSlice.actions.setFirstName(userResult.body.firstName));
    dispatch(userSlice.actions.setLastName(userResult.body.lastName));
  }*/

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
