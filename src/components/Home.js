import { useState, useEffect } from 'react';
// import Counter from './Counter/Counter';
import PostList from './Post/PostList';
const Home = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() =>{
      fetch(`http://localhost:8000/posts`)
        .then((res) => {
          if (!res.ok) {
            throw Error('Something went wrong with Server :( ');
          }
          return res.json();
        })
        .then((data) => {
          setPosts(data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          // console.log(err.message);
          setLoading(false);
          setError(err.message);
        })
    }, 2000);
  }, []);
    return (
      <div>
        {loading && (
          <div className="mt-5 text-center">
            <h3>Please Wait 🥱</h3>
          </div>
        )}
        { error && <div class="alert alert-danger fade show mt-5" role="alert">
          <strong>{ error }</strong>
        </div> }
        {posts && <PostList posts={posts} title="All Posts🤙" />}
        {/* <Counter /> */}
      </div>
    );
}

export default Home;