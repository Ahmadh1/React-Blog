import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <switch>
              <Route path="/">
                <Home />
              </Route>
            </switch>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
