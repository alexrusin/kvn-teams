import { getAuthUser, signOut } from 'actions'
import NavBar from 'components/NavBar'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import wrapper from 'store'
import 'styles/index.css'

function MyApp ({ Component, pageProps }) {
  const dispatch = useDispatch()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      dispatch(getAuthUser(token))
    } else {
      dispatch(signOut())
    }
  }, [])
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(MyApp)
