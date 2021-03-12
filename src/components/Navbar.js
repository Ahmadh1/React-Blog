import { Link } from "react-router-dom";
import Logo from '../misc/react.svg';
const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={Logo} alt="React Blog" width="45px" />
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/create" className="nav-link">
                  Add new
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;