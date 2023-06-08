import React, { useState } from 'react'
import RcCollapse from '../components/aside/RcCollapse';
import "./Aside.scss";
import PostingToHive from '../components/aside/PostingToHive';
import HomeAside from '../components/aside/HomeAside';


function Aside() {

  

  return (
    <div className="aside-layout">
      <HomeAside />
      <PostingToHive />
      <p className='content-policy'>Please be mindful of gamerhive's content <a href=''>policy</a> and practice good <a href=''>thriver</a>.</p>
    </div>
  )
}

export default Aside