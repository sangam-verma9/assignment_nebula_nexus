import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
const Post = () => {
    const { id } = useParams();
    const [post, setpost] = useState({})
    const getData = async () => {
        const res = await axios.get(`https://dummyapi.online/api/blogposts`)
        let data=res.data;
        data=data[id];
        console.log(data)
        setpost(data)
    }
    useEffect(() => {
        getData();
    },[id])
    
  return (
    
    <>
        <div className="container m-8">
            <div className=' font-bold' style={{fontSize:"30px"}}>
                <h1 className='items-center hover:text-sky-500'>{post.title}</h1>
            </div>
            <div>
                <img src="https://picsum.photos/1200/400" alt="blog img" />
            </div>
            
            <div>
                <p className='px-8' style={{fontSize:"20px"}}>
                    {post.content}
                </p>
            </div>
            <div className='p-4 m-2'>
                <p><Link to={`https://linkedin.com/${post.author}`} className=' hover:text-sky-600 hover:underline'>{post.author}</Link></p>
                <span className=' float-right'>{post.date_published}</span>
            </div>
            <div className=' flex mx-auto ' style={{fontSize:"30px"}}>
                <Link className='hover:text-blue-700 ' to={"https://facebook.com/share/post"}>
                    <FaFacebook className='mx-3' />
                </Link>
                <Link className='hover:text-red-700' to={"https://instagram.com/share/post"}>
                    <FaSquareInstagram  className='mx-3'/>
                </Link>
                <Link className='' to={"https://twitter.com/share/post"}>
                    <FaSquareXTwitter  className='mx-3' />
                </Link>
                <Link className='hover:text-green-600' to={"https://web.whatsapp.com/share/post"}>
                    <FaWhatsappSquare className='mx-3'/>
                </Link>
            </div>
        </div>

        
    </>
  )
}

export default Post