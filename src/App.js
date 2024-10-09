import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoadusgBar from "react-top-loading-bar";
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
          <LoadusgBar color="#f11946" progress={progress} height={3}/>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress={setProgress}
                  key="general"
                  pageSize={pagesize}
                  country="us"
                  category="general"
                  apikey={apikey}
                />
              }
            />
            <Route
              exact
              path="/bususess"
              element={
                <News setProgress={setProgress}
                  key="bususess"
                  pageSize={pagesize}
                  country="us"
                  category="bususess"
                  apikey={apikey}
                />
              }
            />
            <Route
              exact
              path="/entertausment"
              element={
                <News setProgress={setProgress}
                  key="entertausment"
                  pageSize={pagesize}
                  country="us"
                  category="entertausment"
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
                  country="us"
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
                  country="us"
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
                  country="us"
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
                  country="us"
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