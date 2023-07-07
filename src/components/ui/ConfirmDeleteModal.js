import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderTopLeftRadius: 12,
  borderBottomLeftRadius: 12,
  borderTopRightRadius: 12,
  borderBottomRightRadius: 12,
  boxShadow: 24,
  p: 4
}

const ConfirmDeleteModal = ({ message, isOpen, onClose, onDelete }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style} className='deleteModal'>
        <Typography
          id='modal-modal-title'
          variant='h6'
          component='h2'
          className='modalTitle'
        >
          Delete Message
        </Typography>
        <Typography
          id='modal-modal-description'
          sx={{ mt: 2 }}
          style={{ textAlign: 'center' }}
        >
          {message}
        </Typography>

        <div className='modalActions'>
          <Button variant='contained' onClick={onClose}>
            Cancel
          </Button>
          <Button variant='contained' color='error' onClick={onDelete}>
            Delete
          </Button>
        </div>
      </Box>
    </Modal>
  )
}

export default ConfirmDeleteModal
