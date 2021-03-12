import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Ahmad");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, body, author };
    setLoading(true);
    //   console.log(post);
    fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(post),
    }).then((res) => {
      setLoading(false);
      console.log("New Post added");
      history.push('/');
    });
  };
  return (
    <div className="mt-5">
      <h2>Create new Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="title">Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="author">Author:</label>
          <select
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="Ahmad">Ahmad</option>
            <option value="Noor">Noor</option>
            <option value="Talha">Talha</option>
          </select>
        </div>
        <div className="form-group">
          <label for="body">Description:</label>
          <textarea
            id="body"
            rows="5"
            className="form-control"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        {!loading && <button className="btn btn-success">Submit</button>}
        {loading && (
          <button className="btn btn-success" disabled>
            Adding new Post....
          </button>
        )}
      </form>
    </div>
  );
};

export default Create;
