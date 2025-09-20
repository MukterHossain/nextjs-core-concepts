import PostCard from '@/components/Posts/PostCard';
import { IPost } from '@/type';
import React from 'react';

const PostsPage =async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10", {
        // cache: 'force-cache'
        cache: 'no-store'
        // next:{
        //     revalidate: 30,
        // }
    })
    const posts = await res.json()
    console.log(posts)
    return (
        <div>
            <h1 className='text-xl text-center'>All Posts</h1>
            <div className='grid grid-cols-2 gap-5 w-[90%] mx-auto'>
                {
                    posts?.map((post: IPost) => <PostCard key={post?.id} post={post}></PostCard>)
                }
            </div>
        </div>
    );
};

export default PostsPage;