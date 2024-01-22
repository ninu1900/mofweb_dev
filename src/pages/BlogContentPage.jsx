import React from 'react';
import { BlogContent, IndexNavbar2 } from "../components"

const BlogContentPage = ({blogs}) => {
  console.log(blogs)
  
  return (
    <div>
      <IndexNavbar2 />
      <BlogContent blogs={blogs}/>       
    </div>
  )
}

export default BlogContentPage