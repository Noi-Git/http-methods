import React from 'react'
import {posts} from '../../db.json'
import '../App.css';
import DetailPage from './DetailPage'

const HomePage = () => {
  return (
    <section>
      <div className="container">
        <h1 className="home-header">Welcome to Simple Blog</h1>
      </div>
    </section>
  )
}

export default HomePage