import React from 'react'
import css from './css/Content.module.css'

function PostItemAPI(props) {
    const post = props.post
    return (
        props.savedPosts.map(post => {
            const {id, user, type, tags, webformatURL} = post
            return <div className={css.SearchItem} key={id}>
                <p>Artwork type: {type}</p>
                <p>Artist: {user}</p>
                <img src={webformatURL} alt="random"/>
                <p>Tags: {tags}</p>
            </div>
            }
        )
    )
}

export default PostItemAPI