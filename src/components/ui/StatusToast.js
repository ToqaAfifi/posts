import { useDispatch, useSelector } from 'react-redux'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Snackbar from '@mui/material/Snackbar'
import { postsActions } from '../../store'

const StatusToast = () => {
  const toast = useSelector(state => state.posts.toast)
  const dispatch = useDispatch()

  return (
    <>
      <Snackbar
        open={!toast.error && toast.message? true : false}
        autoHideDuration={5000}
        sx={{ maxWidth: 600 }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={() =>
          dispatch(postsActions.getToastStatus({ error: false, message: '' }))
        }
      >
        <Alert severity='success'>
          <AlertTitle>Success</AlertTitle>
          {toast.message}
        </Alert>
      </Snackbar>

      <Snackbar
        open={toast.error && toast.message? true : false}
        autoHideDuration={5000}
        sx={{ maxWidth: 600 }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={() =>
          dispatch(postsActions.getToastStatus({ error: false, message: '' }))
        }
      >
        <Alert severity='error'>
          <AlertTitle>Error</AlertTitle>
          {toast.message}
        </Alert>
      </Snackbar>
    </>
  )
}

export default StatusToast
