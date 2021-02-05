import { useState } from 'react';
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
      title: "Is Flutter Better or React-Native 🥴",
      body:
        "Quickly integrate installed base products vis-a-vis client-based channels. Credibly administrate multidisciplinary methods of empowerment for high-quality meta-services. ",
      author: "Noor",
    },
  ]);
    return (
      <div>
        {posts.map((post) => (
          <div className="card mt-5 text-white bg-dark" key={post.id}>
            <div className="card-header">
              Written by: <b>{post.author}</b>
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

export default Home;