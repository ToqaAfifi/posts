import { Outlet } from 'react-router-dom'
import StatusToast from '../components/ui/StatusToast'

const HomeLayout = () => {
  return (
    <div className='layout'>
      <StatusToast />
      <Outlet />
    </div>
  )
}

export default HomeLayout
