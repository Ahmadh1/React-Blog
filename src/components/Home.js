import { useState } from 'react';
import PostList from './Post/PostList';
const Home = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Welcome to React ✌️",
      body:
        "Quickly integrate installed base products vis-a-vis client-based channels. Credibly administrate multidisciplinary methods of empowerment for high-quality meta-services. ",
      author: "Ahmad",
    },
    {
      id: 2,
      title: "Is Vue Better than React 🤔",
      body:
        "Quickly integrate installed base products vis-a-vis client-based channels. Credibly administrate multidisciplinary methods of empowerment for high-quality meta-services. ",
      author: "Talha",
    },
    {
      id: 3,
      title: "Is Vue-Native Better or React-Native 🥴",
      body:
        "Quickly integrate installed base products vis-a-vis client-based channels. Credibly administrate multidisciplinary methods of empowerment for high-quality meta-services. ",
      author: "Noor",
    },
    {
      id: 4,
      title: "Is Flutter Better or React-Native 😕",
      body:
        "Quickly integrate installed base products vis-a-vis client-based channels. Credibly administrate multidisciplinary methods of empowerment for high-quality meta-services. ",
      author: "Noor",
    },
  ]);
  const handleDelete = (id) => {
    const newPosts = posts.filter(post => post.id !== id);
    setPosts(newPosts);
  };
    return (
      <div>
        <PostList
          posts={posts}
          title="All Posts🤙"
          handleDelete={handleDelete}
        />
      </div>
    );
}

export default Home;