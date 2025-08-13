import { Fragment, StrictMode } from "react";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router";
import { createRoot } from "react-dom/client";
import "./mystyle.css";
import "./App.css";

import Banner from "./components/Banner.jsx";
import AllPosts from "./components/AllPost.jsx";
import Home from "./components/Home.jsx";
import PostDetail from "./components/PostDetail.jsx";

createRoot(document.getElementById("root")).render(
  <Fragment>
    <Router>
      <header>
        <Banner />
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/posts'>Posts</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/posts' element={<AllPosts />}></Route>
          <Route path='/posts/:posturl' element={<PostDetail />}></Route>
        </Routes>
      </div>
    </Router>
  </Fragment>
);
