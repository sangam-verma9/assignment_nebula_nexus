import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios';
import Loading from "./loading/Loading"
import img1 from "../assets/bg1.jpg"

const Home = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);

  const LoadData = async() =>{
    const data= await  axios.get("https://dummyapi.online/api/blogposts")
    // console.log(data)
    setBlog(data.data)
  }
  useEffect(() =>{
    LoadData();
  })
  
  return (
    <>
    <div>
      <img src={img1}  alt="home img" />
      <h1 className='text-center' style={{fontSize:'40px', fontFamily:"cursive"}}>Hello welcome to My Blog </h1>
    </div>
    {/* <div className='text-center'>
      <button onClick={LoadData} className='text-center  bg-sky-400 px-3 py-2 rounded' style={{fontSize:'30px', fontFamily:"monospace"}}>Load blogs</button>
    </div> */}
    <div className="container">
        {loading ? (
        <Loading />
      ) : (
        <>
          <div className="m-7">
            <div className="products grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center gap-4">
              {blog &&
                blog.map((post) => (
                  <Card post={post} key={post.id} />
                ))}
            </div>
          </div>
        </>
      )}
    </div>
    
    </>
  )
}

export default Home