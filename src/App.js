import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Pages/Homepage/Homepage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import MovieReview from "./Pages/MovieReview/MovieReview";
import Tvseries from "./Pages/Series/Series";
import Movies from "./Pages/Movies/Movies";

function App() {
  return (
    <Router>
      <div>
        <Sidebar />
        <Switch>
          <Route path="/" exact>
            <Navbar />
            <Homepage />
          </Route>
          <Route path="/series" component={Tvseries} />
          <Route path="/movies" component={Movies}/>
          {/**<Route path="/:id" component={MovieReview} />**/}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
