import { useState, useEffect } from 'react';
import PostList from './Post/PostList';
const Home = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() =>{
      fetch(`http://localhost:8000/posts`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setPosts(data);
          setLoading(false);
        });
    }, 2000);
  }, []);
    return (
      <div>
        {loading && (
          <div className="mt-5 text-center">
            <h3>Please Wait 🥱</h3>
          </div>
        )}
        {posts && <PostList posts={posts} title="All Posts🤙" />}
      </div>
    );
}

export default Home;