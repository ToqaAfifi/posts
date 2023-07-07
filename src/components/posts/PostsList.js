import Card from '@mui/material/Card'
import { DataGrid } from '@mui/x-data-grid'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { useNavigate } from 'react-router-dom'
import classes from './PostsList.module.css'

const PostsList = ({ posts, viewDetails, deletePost }) => {
  const navigate = useNavigate()

  const goToPostDetails = postId => {
    navigate(`${postId}`)
  }

  const columns = [
    {
      field: 'id',
      headerName: 'Id',
      width: 100,
      headerAlign: 'center',
      align: 'center',
      headerClassName: classes.headerCell
    },
    {
      field: 'title',
      headerName: 'Post',
      flex: 1,
      renderCell: params => (
        <div className={classes.postCell}>
          <span>{params.row.title}</span>
          <p>{params.row.body}</p>
        </div>
      ),
      headerAlign: 'center',
      headerClassName: classes.headerCell,
      align: 'center'
    },
    {
      field: 'actions',
      headerName: 'Actions',
      renderCell: params => (
        <div className={classes.actionIcons}>
          <RemoveRedEyeIcon
            style={{ color: '#73a2cc' }}
            onClick={() => viewDetails(params.row)}
          />
          <EditIcon
            style={{ color: '#fbc012' }}
            onClick={() => goToPostDetails(params.row.id)}
          />
          <DeleteIcon style={{ color: '#d30000' }} onClick={() => deletePost(params.row.id)} />
        </div>
      ),
      headerAlign: 'center',
      headerClassName: classes.headerCell,
      align: 'center'
    }
  ]

  return (
    <Card style={{ width: '60%', height: 700 }}>
      <DataGrid
        rows={posts}
        getRowHeight={() => 'auto'}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        }}
        pageSizeOptions={[5, 10]}
      />
    </Card>
  )
}

export default PostsList
