import Image from 'next/image'
import React from 'react'


const PostsImg = ({socialImg}) => {
  return (
    <div>
        <Image src={socialImg} alt='/'/>
    </div>
  )
}

export default PostsImg
