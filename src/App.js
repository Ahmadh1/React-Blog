import Navbar from './components/Navbar';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <Home />
          </div>
          <div className="col-4">
            <Sidebar />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
