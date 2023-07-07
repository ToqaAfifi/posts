import { call, takeEvery, put } from 'redux-saga/effects'
import Axios from 'axios'
import {
  deletePost,
  getPostDetails,
  getPostsList,
  getToastStatus
} from '../slices/postsSlice'
import { sagaActions } from './sagaActions'

let callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data
  })
}

export function* fetchPostsListSaga () {
  try {
    let result = yield call(() =>
      callAPI({ url: 'https://jsonplaceholder.typicode.com/posts' })
    )
    yield put(getPostsList(result.data))
  } catch (e) {
    yield put(
      getToastStatus({
        error: true,
        message:
          'An error occurred while fetching the posts. Please try again later.'
      })
    )
  }
}

export function* fetchPostDetailsSaga ({ postId }) {
  try {
    let result = yield call(() =>
      callAPI({ url: `https://jsonplaceholder.typicode.com/posts/${postId}` })
    )
    yield put(getPostDetails(result.data))
  } catch (e) {
    yield put(
      getToastStatus({
        error: true,
        message:
          'An error occurred while fetching the post details. Please try again later.'
      })
    )
  }
}

export function* editPostDetailsSaga ({ postData }) {
  try {
    let result = yield call(() =>
      callAPI({
        url: `https://jsonplaceholder.typicode.com/posts/${postData.id}`,
        method: 'PUT',
        data: postData
      })
    )
    if (result.status === 200) {
      yield put(
        getToastStatus({ error: false, message: 'Post updated successfully' })
      )
    }
  } catch (e) {
    yield put(
      getToastStatus({
        error: true,
        message:
          'An error occurred while updating the post. Please try again later.'
      })
    )
  }
}

export function* deletePostSaga ({ postId }) {
  try {
    let result = yield call(() =>
      callAPI({
        url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
        method: 'DELETE'
      })
    )
    if (result.status === 200) {
      yield put(deletePost(postId))
      yield put(
        getToastStatus({ error: false, message: 'Post deleted successfully' })
      )
    }
  } catch (e) {
    yield put(
      getToastStatus({
        error: true,
        message:
          'An error occurred while deleting the post. Please try again later.'
      })
    )
  }
}

export default function* rootSaga () {
  yield takeEvery(sagaActions.FETCH_POSTS_SAGA, fetchPostsListSaga)
  yield takeEvery(sagaActions.FETCH_POST_SAGA, fetchPostDetailsSaga)
  yield takeEvery(sagaActions.EDIT_POST_SAGA, editPostDetailsSaga)
  yield takeEvery(sagaActions.DELETE_POST_SAGA, deletePostSaga)
}
