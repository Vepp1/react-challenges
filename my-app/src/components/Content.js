import React, { Component } from 'react'
import css from './css/Content.module.css'
import {savedPosts} from './../posts.json'
import PostItem from './PostItem'
import Loader from './Loader'

export class Content extends Component {
    constructor(props) {
      super(props)

      this.state = {
        isLoaded: false
      }
    }

    componentDidMount() {
      setTimeout(() => {
        console.log('Render methor called')
        this.setState({
            isLoaded: true
        })
    }, 2000)
    }

  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
        </div>

        {this.state.isLoaded ? 
        (<div className={css.SearchResults}>
            {savedPosts.map(post => {
              return <PostItem key={post.title} post={post} />
              
            })}
        </div>) : 
        (<Loader />)}
        

      </div>
    )
  }
}

export default Content