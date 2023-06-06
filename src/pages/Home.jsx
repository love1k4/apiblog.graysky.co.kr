import React from 'react';
import { Link } from 'react-router-dom';
import BlogList from '../components/BlogList';

export default function Home() {



  return (
    <div>
      <div>
        <img src='/images/blog_home.jpg' width={'1200px'} height={'auto'} alt='BlogHomeImg'/>
      </div>
      <div>
        <BlogList />
      </div>
    </div>
    
  )
}
