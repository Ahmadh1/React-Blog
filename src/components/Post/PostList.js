import { Link } from "react-router-dom";

const PostList = ({ posts, title }) => {
  return (
    <div>
      <h2 className="mt-4 text-center">{title}</h2>
      {posts.map((post) => (
        <div className="card mt-5" key={post.id}>
          <div className="card-header">
            <p className="">
              Author: <b>{post.author}</b>
            </p>
          </div>
          <div className="card-body">
            <Link to={`/posts/${post.id}`}>
              <h4 className="card-title text-dark">{post.title}</h4>
            </Link>
            <div className="dropdown-divider"></div>
            <p>{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
