import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux/es/hooks/useSelector";
function App() {
  const showCounter = useSelector((state) => state.Auth.isAuth);
  return (
    <>
      <Header />
      {!showCounter && <Auth />}
      {showCounter && <UserProfile />}
      {showCounter && <Counter />}
    </>
  );
}

export default App;
