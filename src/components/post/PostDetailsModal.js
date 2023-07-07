import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  borderTopLeftRadius: 12,
  borderBottomLeftRadius: 12,
  borderTopRightRadius: 12,
  borderBottomRightRadius: 12,
  boxShadow: 24,
  p: 4
}

const PostDetailsModal = ({ post, isOpen, onClose }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography
          id='modal-modal-title'
          variant='h6'
          component='h2'
          className='modalTitle'
        >
          {post.title}
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          {post.body}
        </Typography>
      </Box>
    </Modal>
  )
}

export default PostDetailsModal
