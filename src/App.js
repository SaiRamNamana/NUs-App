import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoadingBar from "react-top-loading-bar";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

const App = () => {
  const pagesize = 6;
  const apikey = process.env.REACT_APP_API
  const [progress, setProgress] = useState(0);
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar color="#f11946" progress={progress} height={3}/>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress={setProgress}
                  key="general"
                  pageSize={pagesize}
                  country="in"
                  category="general"
                  apikey={apikey}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News setProgress={setProgress}
                  key="business"
                  pageSize={pagesize}
                  country="in"
                  category="business"
                  apikey={apikey}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={setProgress}
                  key="entertainment"
                  pageSize={pagesize}
                  country="in"
                  category="entertainment"
                  apikey={apikey}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News setProgress={setProgress}
                  key="health"
                  pageSize={pagesize}
                  country="in"
                  category="health"
                  apikey={apikey}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News setProgress={setProgress}
                  key="science"
                  pageSize={pagesize}
                  country="in"
                  category="science"
                  apikey={apikey}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News setProgress={setProgress}
                  key="sports"
                  pageSize={pagesize}
                  country="in"
                  category="sports"
                  apikey={apikey}
                />
              }
            />

            <Route
              exact
              path="/technology"
              element={
                <News setProgress={setProgress}
                  key="technology"
                  pageSize={pagesize}
                  country="in"
                  category="technology"
                  apikey={apikey}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
}
export default App