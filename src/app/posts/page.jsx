import React from 'react';
import { getPosts } from '../services/postAPI';
import Link from 'next/link';



const PostsPage = async() => {
    const postData = await getPosts();
    // console.log(postData);
    
    return (

        <div className='min-h-screen '>
           
            <h1>Posts Page</h1>
            <p>Welcome to the posts page. Here you can find all the latest posts.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
                {postData?.slice(0,15)?.map(({title,body,id}) => (
                    <div key={id} className="border p-4 mb-4">
                        <h2 className="text-xl font-bold">{title}</h2>
                        <p>{body}</p>
                        <button className='mt-2 bg-blue-200 px-4 py-2 rounded'>
                            <Link href={`/posts/${id}`} className="text-blue-700 ">
                            See Details
                            </Link>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostsPage;