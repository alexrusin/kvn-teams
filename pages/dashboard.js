import { useSelector } from "react-redux"

export default function Dashboard() {
    const user = useSelector(({auth}) => auth)
    return (
        <div className="py-20">
            <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
            Welcome to Dashboard {user.membership === 'guest' ? 'Guest' : user.name}!
            </h1>
        </div>
    )
}