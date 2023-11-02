import "./App.css";
import Layout from "./pages/layout";
import Search from "./pages/search";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Houses from "./pages/houses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
