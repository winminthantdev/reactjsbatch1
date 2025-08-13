import { Fragment, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./mystyle.css";
import App from "./App.jsx";

import Banner from "./components/Banner.jsx";
import PhotoPost from "./components/PhotoPost.jsx";
import AllPosts from "./components/AllPost.jsx";

createRoot(document.getElementById("root")).render(
  <Fragment>
    <header>
      <Banner />
    </header>
    
    <div>
      <h1>Welcome To Our Site</h1>
      <h3>This is my first React Project</h3>
      <AllPosts />
    </div>
  </Fragment>
);
