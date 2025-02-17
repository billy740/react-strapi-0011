import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:1337/api/posts";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`)
      .then((response) => {
        setPost(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching post details:", error);
      });
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.attributes.Title}</h1>
      <p>{post.attributes.Content}</p>
    </div>
  );
}

export default PostDetails;
