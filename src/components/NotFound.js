import { Link } from 'react-router-dom';
import notFound from '../misc/vector-creator.png';
import "../styles/style.css";
const NotFound = () => {
  return (
    <div className="row">
        <div className="col-6 mt-5">
            <h1 className="mt-4">404 Page Not Found!</h1>
            <p>Can't find what Page you're looking for</p>
            <Link to="/">Get back to Home</Link>
        </div>
        <div className="col-6 mt-5">
            <img src={notFound} className="notFound"/>
        </div>
    </div>
  );
};

export default NotFound;
