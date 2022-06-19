import "./App.css";
import SignUp from "./JS-Components/SignUp";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/signin" element={<SignUp todo="SIGN IN" />} />
        <Route exact path="/signup" element={<SignUp todo="SIGN UP" />} />
      </Routes>
    </div>
  );
}

export default App;
