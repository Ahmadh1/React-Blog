// import Counter from './Counter/Counter';
import useFetch from "../useFetch";
import PostList from "./Post/PostList";
const Home = () => {
  const { data: posts, error, loading } = useFetch(`http://localhost:8000/posts`);
  return (
    <div className="col-8">
      {loading && (
        <div className="mt-5 text-center">
          <h3>Please Wait 🥱</h3>
        </div>
      )}
      {error && (
        <div class="alert alert-danger fade show mt-5" role="alert">
          <strong>{error}</strong>
        </div>
      )}
      {posts && <PostList posts={posts} title="All Posts🤙" />}
      {/* <Counter /> */}
    </div>
  );
};

export default Home;
