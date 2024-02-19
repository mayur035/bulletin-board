import React from 'react'
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostList = () => {
    const posts = useSelector(selectAllPosts)

    const renderedPostes = posts.map(post => {return(
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
        </article>
    )})
  return (
    <section>
        <h2>Posts</h2>
        {renderedPostes}
    </section>
  )
}

export default PostList