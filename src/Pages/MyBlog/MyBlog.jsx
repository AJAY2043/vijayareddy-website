// src/Pages/MyBlog.jsx
import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './MyBlog.css';
import blogData from '../../Data/blog.json';

const MyBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Simulating fetching data from the blog.json file
    setBlogs(blogData);
  }, []);

  return (
    <>
      <Navbar />
      <div className="blog-page">
        <h1 className="blog-title">My Blogs</h1>
        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <div key={index} className="blog-card">
              <h2 className="blog-card-title">{blog.title}</h2>
              <p className="blog-card-content">{blog.excerpt}</p>
              <button className="read-more-btn">Read More</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyBlog;
