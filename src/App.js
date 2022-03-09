import React from "react";
import Navigation from "./components/Navigation";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import User from "../src/pages/User";
import Places from "./pages/Places";
import NewUser from "./pages/NewUser";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <Router>
      <Navigation></Navigation>

      <Routes>
        <Route path="/" element={<User></User>}></Route>
        <Route path="/u1/places" element={<Places></Places>}></Route>
        <Route path="/places/new" element={<NewUser></NewUser>}></Route>
        <Route
          path="/auth"
          element={<Navigate replace to="/"></Navigate>}
        ></Route>
        <Route path="/auth" element={<Auth></Auth>}></Route>
        <Route path="/*" element={<h1>No Found Page</h1>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
