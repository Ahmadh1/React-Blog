import { useParams } from "react-router";
import useFetch from "../../useFetch";
const SinglePost = () => {
  const { id } = useParams();
  const { data: post, error, loading } = useFetch(
    "http://localhost:8000/posts/" + id
  );
  return (
    <div className="mt-5">
      {loading && <p>Loading...</p>}
      <div className="card">
        {error && (
          <div class="alert alert-danger fade show mt-5" role="alert">
            <strong>{error}</strong>
          </div>
        )}
        {post && (
          <div className="card-body">
            <div className="card-title"><h3 className="text-primary">{post.title}</h3></div>
            <p className="">{post.body}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
