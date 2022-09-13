import React from 'react'
import '../App.css';
import BlogPage from './BlogPage';
import DetailPage from './DetailPage'


const HomePage = () => {
  return (
    <section>
      <div className="container">
        <h1 className="page-header">Welcome to Simple Blog</h1>
        <BlogPage />
      </div>
    </section>
  )
}

export default HomePage