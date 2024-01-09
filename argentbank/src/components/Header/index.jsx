import Logo from "../../assets/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import { setToken } from "../../actions/logInAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const signOut = () => {
    dispatch(setToken(null));
  };

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
        <NavLink to="/Sign-in" className="main-nav-item">
          <i className="fa fa-user-circle faHeader"></i>
          Sign In
        </NavLink>
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
