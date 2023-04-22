import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import { routes } from "./routes/routes.data";
import Layout from "./components/ layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
