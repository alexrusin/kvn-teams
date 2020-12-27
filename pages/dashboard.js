import requireAuth from "components/requireAuth"
import { useSelector } from "react-redux"

const  Dashboard = () => {
    const user = useSelector(({auth}) => auth)
    return (
        <div className="flex justify-center">
             <div className="container py-20">
                <h1 className="text-4xl text-center text-gray-700 dark:text-gray-100">
                Welcome to Dashboard {user.membership === 'guest' ? 'Guest' : user.name}!
                </h1>
            </div>
        </div>
    )
}

export default requireAuth(Dashboard)