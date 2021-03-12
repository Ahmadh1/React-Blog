import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container py-5 mt-5">
      <div className="row">
        <div className="col-12 col-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="d-block mb-2"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
            <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
            <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
            <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
            <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
            <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
          </svg>
          <small className="d-block mb-3 text-muted">&copy; 2021</small>
        </div>
        <div className="col-6 col-md">
          <h5>Features</h5>
          <ul className="list-unstyled text-small">
            <li>
              <Link className="text-muted">Cool stuff</Link>
            </li>
            <li>
              <Link className="text-muted">Random feature</Link>
            </li>
            <li>
              <Link className="text-muted">Team feature</Link>
            </li>
            <li>
              <Link className="text-muted">Stuff for developers</Link>
            </li>
            <li>
              <Link className="text-muted">Another one</Link>
            </li>
            <li>
              <Link className="text-muted">Last time</Link>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li>
              <Link className="text-muted">Resource</Link>
            </li>
            <li>
              <Link className="text-muted">Resource name</Link>
            </li>
            <li>
              <Link className="text-muted">Another resource</Link>
            </li>
            <li>
              <Link className="text-muted">Final resource</Link>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li>
              <Link className="text-muted">Business</Link>
            </li>
            <li>
              <Link className="text-muted">Education</Link>
            </li>
            <li>
              <Link className="text-muted">Government</Link>
            </li>
            <li>
              <Link className="text-muted">Gaming</Link>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li>
              <Link className="text-muted">Team</Link>
            </li>
            <li>
              <Link className="text-muted">Locations</Link>
            </li>
            <li>
              <Link className="text-muted">Privacy</Link>
            </li>
            <li>
              <Link className="text-muted">Terms</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
