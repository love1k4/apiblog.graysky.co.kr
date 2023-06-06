import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function BlogList() {
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    async function loadPosts(){
      const response = await fetch('https://apiwp.graysky.co.kr/wp-json/wp/v2/posts');
      if(!response.ok){
        return;
      }
      const post = await response.json();
      setPosts(post);
      console.log(post);
    }
    loadPosts('posts');
    console.log(posts)
  },[0]);

  return (
    <div>
    {posts.map((post, index) => (
    <div key={index}>
       <article>
        <div style={{marginBottom: '20px'}}>
          <sub>Post Date : {post.date}</sub>
        </div>
        <div style={{fontSize : '20px', fontWeight:'600', color:'white', marginBottom:'20px'}}
        dangerouslySetInnerHTML={{__html: post.title.rendered}} />
        <div >
          <Link to={`/blogview/${post.id}`}>Read Article....</Link>
        </div>
      </article>
    </div>))}
  </div>
  )
}