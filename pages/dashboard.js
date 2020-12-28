import Image from 'next/image'
import requireAuth from "components/requireAuth"
import { useSelector } from "react-redux"

const  Dashboard = () => {
    const user = useSelector(({auth}) => auth)
    return (
        <div className="flex justify-center">
             <div className="container py-8">
                <h1 className="text-2xl text-center text-gray-700 dark:text-gray-100 pb-2">
                Welcome to Dashboard {user.membership === 'guest' ? 'Guest' : user.name}!
                </h1>
                <div className="flex justify-center">
                    <table>
                        <thead>
                            <tr>
                                <th
                                    className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Name</th>
                                <th
                                    className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Membership</th>
                                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                            </tr>
                        </thead>

                        <tbody className="bg-white">
                            <tr>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <Image className="h-10 w-10 rounded-full"
                                                src="https://www.speakingtigerbooks.com/wp-content/uploads/2018/07/no-avatar.jpg"
                                                width={50}
                                                height={50}
                                                alt={user.name}
                                                />

                                            {/* <img className="h-10 w-10 rounded-full"
                                                src="https://www.speakingtigerbooks.com/wp-content/uploads/2018/07/no-avatar.jpg"
                                                alt={user.name} /> */}
                                        </div>

                                        <div className="ml-4">
                                            <div className="text-sm leading-5 font-medium text-gray-900">{user.name}
                                            </div>
                                            <div className="text-sm leading-5 text-gray-500">{user.email}</div>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
                                <span
                                    className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{user.membership}</span>
                                </td>

                                <td
                                    className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                    <span className="text-indigo-600 hover:text-indigo-900 cursor-pointer">Edit</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default requireAuth(Dashboard)