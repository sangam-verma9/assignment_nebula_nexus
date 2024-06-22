import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({post}) => {
  return (
    <>

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/post/${post.id}`}>
                <img class="rounded-t-lg" src="https://picsum.photos/400/200" alt="imgage" />
            </Link>
            <div class="p-5">
                <Link to={`/post/${post.id}`}>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                </Link>
                <div className='my-4'>
                    <Link class="mb-3 font-normal text-gray-700 dark:text-gray-400 hover:text-sky-600 hover:underline" to={`https://linkedin.com/in/${post.author}`}>{post.author} </Link>
                </div>
                <Link to={`/post/${post.id}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    
                </Link>
                <span className='text-white mx-4 float-end'> {post.date_published}</span>
            </div>
        </div>


    </>
  )
}

export default Card