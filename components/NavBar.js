import { useState } from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { signOut } from 'actions'

export default function NavBar () {
  const membership = useSelector(({auth}) => auth.membership)
  const dispatch = useDispatch()
  const router = useRouter()

  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(signOut())
    setMenuOpen(false)
    router.push('/')
  }

  return (
    <nav className="flex justify-center bg-gray-900">
      <div className="container flex flex-wrap items-center p-3">
        <Link href="/">
            <a className="inline-flex items-center p-2 mr-4">
            <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 mr-2 text-white fill-current"
            >
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
            </svg>
            <span className="text-xl font-bold tracking-wide text-white uppercase">
                Pet
            </span>
            </a>
        </Link>

        <div className="pt-2 relative mx-auto text-gray-600">
          <input className="pl-10 bg-white h-10 px-5 rounded-full text-sm lg:text-base focus:outline-none"
            type="search" name="search" placeholder="Поиск" />
          <div className="absolute ml-4 top-0 mt-5 mr-4">
            <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966" width="512" height="512">
              <path d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"/>
            </svg>
          </div>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex p-3 ml-auto text-white rounded outline-none hover:bg-gray-900 lg:hidden hover:text-white nav-toggler focus:outline-none"
          data-target="#navigation"
        >
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
        </button>
        <div
          className={`${menuOpen ? '' : 'hidden'} w-full top-navbar lg:inline-flex lg:w-auto`}
          id="navigation"
        >
          <div className="flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
          {
              (membership && membership !== 'guest') &&
              <Link href="/dashboard">
                <a
                className={`items-center justify-center w-full px-3 py-2 rounded lg:inline-flex lg:w-auto hover:bg-gray-900 hover:text-white ${router.pathname === '/dashboard' ? 'text-white' : 'text-gray-400'}`}
                >
                    <span>Панель управления</span>
                </a>
              </Link>
          }

          {
              (membership && membership === 'admin') &&
              <Link href="/admin/create-team">
                <a
                className={`items-center justify-center w-full px-3 py-2 rounded lg:inline-flex lg:w-auto hover:bg-gray-900 hover:text-white ${router.pathname === '/admin/create-team' ? 'text-white' : 'text-gray-400'}`}
                >
                    <span>Создать команду</span>
                </a>
              </Link>
          } 
          
          {
          membership === 'guest'
            ? <Link href="/signin">
            <a
              className="items-center justify-center w-full px-3 py-2 text-gray-400 rounded lg:inline-flex lg:w-auto hover:bg-gray-900 hover:text-white"
            >
              <span>Вход</span>
            </a>
          </Link>
            : <a
            onClick={(e) => handleLogout(e)}
            className="cursor-pointer items-center justify-center w-full px-3 py-2 text-gray-400 rounded lg:inline-flex lg:w-auto hover:bg-gray-900 hover:text-white">
            Выход
          </a>
          }
          </div>
        </div>
      </div>
    </nav>
  )
}