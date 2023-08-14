import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'

const PostBlock:React.FC = ():JSX.Element => {
  const posts = useSelector((state:RootState) => state.posts.allPosts)
  const friends = useSelector((state:RootState) => state.user.friends)
  return (
    <div>PostBlock</div>
  )
}

export default PostBlock