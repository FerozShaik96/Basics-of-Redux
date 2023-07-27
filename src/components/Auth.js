import classes from "./Auth.module.css";
import { authActions } from "../Store/Store";
import { useDispatch } from "react-redux";
const Auth = () => {
  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.isLoggin());
    document.querySelector(".form").reset();
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler} className="form">
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
