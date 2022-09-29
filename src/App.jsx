import { Routes, Route } from "react-router-dom";
import "./App.scss";
import "./assets/fonts/starFont.otf";
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";
import PageNotFound from "./views/PageNotFound/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
