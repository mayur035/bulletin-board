import React from 'react'
import PostAuthor from './postAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButton';

const PostExcerte = (props) => {
    return (
        <article>
            <h3>{props.post.title}</h3>
            <p>{props.post.body.substring(0, 100)}</p>
            <p className='postCredit'>
                <PostAuthor userId={props.post.userId} />
                <TimeAgo timestamp={props.post.date} />
            </p>
            <ReactionButtons post={props.post} />
        </article>
    )
}

export default PostExcerte