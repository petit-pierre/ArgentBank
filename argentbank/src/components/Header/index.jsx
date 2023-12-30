import Logo from "../../assets/argentBankLogo.png";
import { NavLink } from "react-router-dom";

function Header() {
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
      </div>
    </nav>
  );
}

export default Header;
