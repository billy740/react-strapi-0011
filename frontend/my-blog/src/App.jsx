{/*import React from 'react';
import BlogList from './components/BlogList';

function App() {
  return (
    <div>
      <BlogList />
    </div>
  );
}

export default App;*/}

import React from "react";

import BlogList from './pages/BlogList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";

export default function App () {
  const {loading, error, data} = useFetch('http://localhost:1337/api/posts?populate=*');
  if (loading) return <p>loading...</p>
  if (error) return console.log(error)

  return (
    <Router>
      <Routes>
        {/*<Route path="/blog/:id" element={<Blog posts={data} />} />*/}
        <Route path="/" element={<BlogList posts={data} />} />
      </Routes>
    </Router>
  );
}