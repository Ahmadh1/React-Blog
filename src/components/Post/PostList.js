const PostList = ({posts, title, handleDelete}) => {
    return (
      <div>
        <h2 className="mt-4 text-center">{title}</h2>
        {posts.map((post) => (
          <div className="card mt-5 text-white bg-dark" key={post.id}>
            <div className="card-header">
                <p className="float-left">
                    Written by: <b>{post.author}</b>
                </p>
                <p className="float-right">
                    <button className="btn btn-danger" onClick={() => handleDelete(post.id)}>
                    &times;
                    </button>
                </p>
            </div>
            <div className="card-body">
              <h4 className="card-title">{post.title}</h4>
              <div className="dropdown-divider"></div>
              <p>{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    );
}

export default PostList;