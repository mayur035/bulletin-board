import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { selectAllPosts ,getPostStatus,getPostError,fetchPosts} from './postsSlice';
import PostsExcerpt from './PostsExcerpt';


const PostList = () => {
    const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostStatus);
    // console.log(postStatus);
    const error = useSelector(getPostError);

    useEffect(()=>{
        if(postStatus === 'idle'){
            dispatch(fetchPosts())
        }
    },[postStatus,dispatch])  

    let content;
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (postStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map((post,index) => <PostsExcerpt key={`${post.id}-${index}`} post={post} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }
    
    return (
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    );
};

export default PostList;
