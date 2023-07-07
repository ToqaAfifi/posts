import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const ErrorLayout = () => {
  return (
    <div className='errorLayout'>
      <h1>404 Not Found</h1>
      <Button variant='contained' component={Link} to='/'>
        Back to Home
      </Button>
    </div>
  )
}

export default ErrorLayout
