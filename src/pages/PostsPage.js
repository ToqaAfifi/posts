import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sagaActions } from '../store/saga/sagaActions'
import PostsList from '../components/posts/PostsList'
import PageTitle from '../components/ui/PageTitle'
import PostDetailsModal from '../components/post/PostDetailsModal'
import { postsActions } from '../store'
import ConfirmDeleteModal from '../components/ui/ConfirmDeleteModal'

const PostsPage = () => {
  const dispatch = useDispatch()
  const { list, post } = useSelector(state => state.posts)
  const [open, setOpen] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [selectedPost, setSelectedPost] = useState()

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_POSTS_SAGA })
  }, [dispatch])

  const viewDetails = postData => {
    dispatch(postsActions.getPostDetails(postData))
    setOpen(true)
  }

  const handleDeletePost = () => {
    dispatch({ type: sagaActions.DELETE_POST_SAGA, postId: selectedPost })
    setConfirmDelete(false)
  }

  return (
    <div className='container'>
      <PageTitle title='Posts' />
      <PostsList posts={list} viewDetails={viewDetails} deletePost={(postId) => {
        setSelectedPost(postId)
        setConfirmDelete(true)
      }}/>
      {open && (
        <PostDetailsModal
          post={post}
          isOpen={open}
          onClose={() => setOpen(false)}
        />
      )}
      {confirmDelete && (
        <ConfirmDeleteModal
          message='Are you sure you want to delete this post?'
          isOpen={confirmDelete}
          onClose={() => setConfirmDelete(false)}
          onDelete={handleDeletePost}
        />
      )}
    </div>
  )
}

export default PostsPage
