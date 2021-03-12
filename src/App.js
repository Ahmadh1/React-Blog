import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Create from "./components/Create";
import SinglePost from "./components/Post/SinglePost";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/create">
                  <Create />
                </Route>
                <Route path="/posts/:id">
                  <SinglePost />
                </Route>
              </Switch>
            </div>
            <div className="col-md-4"></div>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
