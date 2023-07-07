import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { sagaActions } from '../../store/saga/sagaActions'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import classes from './PostForm.module.css'

const PostForm = ({ post }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  useEffect(() => {
    if (post.title && post.body) {
      setTitle(post.title)
      setBody(post.body)
    }
  }, [post])

  const handleEditPost = () => {
    const postData = {
      id: post.id,
      userId: post.userId,
      title,
      body
    }
    dispatch({ type: sagaActions.EDIT_POST_SAGA, postData })
  }

  const handleCancel = () => {
    navigate('/posts')
  }

  return (
    <Card className={classes.form}>
      <TextField
        id='title'
        label='Title'
        variant='outlined'
        required
        fullWidth
        error={!title}
        helperText={!title && "Please enter post's title"}
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <TextField
        id='body'
        label='Body'
        variant='outlined'
        multiline
        maxRows={4}
        required
        fullWidth
        error={!body}
        helperText={!body && "Please enter post's body"}
        value={body}
        onChange={e => setBody(e.target.value)}
      />

      <div className={classes.actionBtns}>
        <Button variant='outlined' onClick={handleCancel}>
          Cancel
        </Button>
        <Button
          variant='contained'
          onClick={handleEditPost}
          disabled={!title || !body}
        >
          Edit
        </Button>
      </div>
    </Card>
  )
}

export default PostForm
