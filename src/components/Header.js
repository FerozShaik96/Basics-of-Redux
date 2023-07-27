import classes from "./Header.module.css";
import { authActions } from "../Store/Store";
import {  useDispatch, useSelector } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  const showLoggin = useSelector((state) => state.Auth.isAuth);
  const logoutHandler = () => {
    dispatch(authActions.isLogout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {showLoggin && (
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
