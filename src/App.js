import "./App.css";
import SignIn from "./JS-Components/SignIn";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/signin" element={<SignIn todo="SIGN IN" />} />
        <Route exact path="/signup" element={<SignIn todo="SIGN UP" />} />
      </Routes>
    </div>
  );
}

export default App;
