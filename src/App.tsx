import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login_Page } from "./pages/Login_Page";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Login_Page />} />
      </Routes>
  );
}

export default App;
