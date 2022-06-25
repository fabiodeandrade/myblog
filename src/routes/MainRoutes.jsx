import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { PostPage } from "../pages/PostPage";



export const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exat path="posts/:url" element={<PostPage />} />        
      </Routes>
    </Router>
  );
};
