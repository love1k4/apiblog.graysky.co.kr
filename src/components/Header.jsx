import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav style={{height: '140px'}}>
        <ul>
            <Link style={{color : 'white', fontSize: '20px', fontWeight: 'bold'}} to='/'>WP REST API Blog</Link>
        </ul>
        <ul>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='contact'>Contact</Link></li>
        </ul>
      
    </nav>
  )
}
