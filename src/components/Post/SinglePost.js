import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import useFetch from "../../useFetch";
const SinglePost = () => {
  const { id } = useParams();
  const { data: post, error, loading } = useFetch(
    "http://localhost:8000/posts/" + id
  );
  const history = useHistory();
  const handleDelete = () => {
    fetch("http://localhost:8000/posts/" + post.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="mt-5">
        {loading && <p>Loading...</p>}
        {error && (
          <div class="alert alert-danger fade show mt-5" role="alert">
            <strong>{error}</strong>
          </div>
        )}
      <div className="col-md-8">
        <div className="card">
          {post && (
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h3 className="text-primary">{post.title}</h3>
                </div>
                <p className="">{post.body}</p>
              </div>
              <div className="card-footer">
                <Link to="/" className="btn btn-outline-dark btn-sm">
                  Back
                </Link>
                <button
                  className="btn btn-outline-danger btn-sm float-right"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
};

export default SinglePost;
