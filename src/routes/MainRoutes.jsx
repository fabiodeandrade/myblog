import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";



export const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        
      </Routes>
    </Router>
  );
};
