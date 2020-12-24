import { signIn } from 'actions'
import Navigation from 'components/Navigation'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import wrapper from 'store'
import 'styles/index.css'


function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(signIn({token: localStorage.getItem('token')}))
  }, [])
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(MyApp)
