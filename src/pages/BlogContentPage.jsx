import React from 'react';
import { BlogContent, IndexNavbar } from "../components"

const BlogContentPage = ({blogs}) => {
  console.log(blogs)
  
  return (
    <div>
      <IndexNavbar />
      <BlogContent blogs={blogs}/>       
    </div>
  )
}

export default BlogContentPage