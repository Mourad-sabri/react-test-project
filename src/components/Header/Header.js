import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useTheme } from "../../hooks/useTheme";
import DarkIcon from "../../icons/DarkIcon";
import LightIcon from "../../icons/LightIcon";

const Header = () => {
  const { isAuth, logout } = useAuthContext();
  const navigate = useNavigate();
  const { theme, toggle } = useTheme();

  const postLink = (
    <li>
      <Link className="header__link" to="/posts">
        posts
      </Link>
    </li>
  );

  //  handle logout

  const handleClick = () => {
    if (isAuth) {
      logout();
      navigate("/");
      return;
    }
    navigate("/login");
  };

  return (
    <header className="header flex">
      {/* logo */}
      <div className="header__logo flex align-center justify-center">Demo Project</div>
      <div className="grow" />
      {/* navigation */}
      <nav className="header__nav">
        <ul className="flex justify-center align-center">
          <li>
            <Link className="header__link" to="/">
              home
            </Link>
          </li>
          {isAuth ? postLink : null}
          {/* handle login or logout */}
          <li onClick={handleClick} tabIndex={0}>
            {isAuth ? "logout" : "login"}
          </li>
          {/* toggle theme mode */}
          <li onClick={() => toggle()}>{theme === "light" ? <LightIcon /> : <DarkIcon />}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
