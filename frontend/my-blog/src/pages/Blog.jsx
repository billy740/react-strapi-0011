import React, { useEffect, useState } from "react";
import { fetchPosts } from "http://localhost:1337/api/posts?populate=*";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };
    getPosts();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Latest Blog Posts</h1>
      {posts.length === 0 ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="border p-4 rounded-lg shadow-lg mb-6">
            <h2 className="text-xl font-bold">{post.Title}</h2>
            <p className="text-gray-600">{post.Excerpt}</p>
            <p className="text-sm text-gray-500">
              Published on: {new Date(post.Publisheddate).toDateString()}
            </p>
            <h3 className="mt-4 font-bold">Content:</h3>
            {post.Content.map((block, index) => (
              <p key={index} className="text-gray-800">{block.children[0].text}</p>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Blog;
