import { signOut } from 'actions'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

export default function Navigation() {
    const membership = useSelector(({auth}) => auth.membership)
    const dispatch = useDispatch()
    const router = useRouter()


    const logoutUser = () => {
        dispatch(signOut())
        router.push('/')
    }
    const displayLogin = () => {
        if(membership === 'guest') {
            return (
                <Link href="/signin">
                    <a className="no-underline btn-blue">
                        Login
                    </a>
                </Link>
            )
        } else {
            return (
                <span
                onClick={() => logoutUser()}
                className="no-underline btn-blue cursor-pointer">
                    Logout
                </span>
            )
        }
    }
    return (
        <nav>
            <ul className="flex items-center justify-between p-8">
                <li>
                    <Link href="/">
                        <a className="text-blue-500 no-underline text-accent-1 dark:text-blue-300">
                        Home
                        </a>
                    </Link>
                </li>
                <ul className="flex items-center justify-between space-x-4">
                    <li>
                        <Link href="/dashboard">
                            <a className="no-underline btn-blue">
                                Dashboard
                            </a>
                        </Link>
                    </li>
                    <li>
                       { displayLogin() }
                    </li>
                </ul>
            </ul>
        </nav>
    )
}