import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { signOut } from 'actions'

export default function useApiClient () {
  const token = useSelector(({ auth }) => auth.token)
  const dispatch = useDispatch()
  const router = useRouter()

  axios.interceptors.request.use(req => {
    req.headers.Authorization = `Bearer ${token}`
    return req
  })

  axios.interceptors.response.use(
    res => res,
    err => {
      if (err.response.status === 401) {
        dispatch(signOut())
        router.push('/')
      }
      throw err
    }
  )

  return axios
}
