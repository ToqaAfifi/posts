import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeLayout from './layout/HomeLayout'
import ErrorLayout from './layout/ErrorLayout'
import PostsPage from './pages/PostsPage'
import PostDetailsPage from './pages/PostDetailsPage'
import './App.css'

const router = createBrowserRouter([
  {
    path: '',
    element: <HomeLayout />,
    errorElement: <ErrorLayout />,
    children: [
      { path: '', element: <Navigate to='/posts' /> },
      {
        path: 'posts',
        exact: true,
        element: <PostsPage />,
      },
      {
        path: 'posts/:postId',
        exact: true,
        element: <PostDetailsPage />,
      }
    ]
  }
])

function App () {
  return <RouterProvider router={router} />
}

export default App
