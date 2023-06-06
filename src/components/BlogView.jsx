import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function BlogView(props) {
  const [ loader, setLoader ] = useState(true);
  const [ data, setData ] = useState([]);
  const {postId} = useParams();

  useEffect(() => {
    fetch(`https://apiwp.graysky.co.kr/wp-json/wp/v2/posts/${postId}`)
    .then((response) => response.json())
    .then((data) =>{
      setData(data);
      setLoader(false);
    })
  },[postId]);
  
  if (loader) return <div className='container'><p>Loading....</p></div>;
  
  return( 
        <article>
          <div key={postId}>
          <div style={{fontSize:'30px', fontWeight: 'bold', color:'white', marginBottom:'60px'}} dangerouslySetInnerHTML={{__html: data.title.rendered}} /><p />
          <div dangerouslySetInnerHTML={{__html: data.content.rendered}} /><p />
          Posted Date : {data.date}
          </div>
        </article>
      );
    }