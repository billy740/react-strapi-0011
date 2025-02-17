import axios from "axios";

// Set the base URL for the Strapi backend
const API_URL = "http://localhost:1337/api/posts?populate=*";

// Function to fetch blog posts from Strapi using axios
export const fetchPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log("Fetched JSON:", response.data); // Debugging log

    if (!response.data.data) {
      throw new Error("Invalid API response format");
    }

    return response.data.data; // Returns an array of blog posts
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
