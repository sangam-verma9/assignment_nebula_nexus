import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Search from './components/Search'
import Addblog from './components/Addblog'
import User from './components/User'
import Post from './components/Post'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/addpost" element={<Addblog />} />
        <Route path="/user" element={<User />} />
        <Route path="/post/:id" element={<Post />} />



      </Routes>
    </>
  )
}

export default App