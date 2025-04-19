import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import App from "./App.jsx";
import {
  BrowserRouter,
  NavLink,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import StatsPage from "./stats.jsx";
import PlayPage from "./play.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<StatsPage />} />
          <Route path="/play" element={<PlayPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

function Layout() {
  return (
    <div>
      <nav>
        <NavLink to="/">Main</NavLink>
        <NavLink to="/play">play</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
