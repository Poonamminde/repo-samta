import CountTimer from "./components/CountDownTimer/index.js";
import UserInfo from "./components/UserInfo";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Countdowntimer" Component={CountTimer} />
        <Route path="/userinfo" Component={UserInfo} />
      </Routes>
    </div>
  );
}

export default App;
