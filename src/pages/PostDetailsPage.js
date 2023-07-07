import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sagaActions } from '../store/saga/sagaActions'
import { useParams } from 'react-router-dom'
import PageTitle from '../components/ui/PageTitle'
import PostForm from '../components/post/PostForm'

const PostDetailsPage = () => {
  const dispatch = useDispatch()
  const { postId } = useParams()
  const postData = useSelector(state => state.posts.post)

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_POST_SAGA, postId })
  }, [dispatch, postId])

  return (
    <div className='container'>
      <PageTitle title='Post Details' />
      <PostForm post={postData} />
    </div>
  )
}

export default PostDetailsPage
