import { useState } from "react"
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from "axios"
import { useDispatch } from "react-redux"
import { signIn, signOut } from "actions"

export default function Signin() {

    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const router = useRouter()
	const dispatch = useDispatch()
	
    const submitForm  = (e) => {
        e.preventDefault()
		axios.post('/api/auth/signin', {
			email,
			password
		})
		.then(({data}) => {
			dispatch(signIn(data.user))
			router.push('/dashboard')
		})
		.catch((err) => {
			dispatch(signOut())
			if (err.response) {
				setError('Invalid email or password')
			} else {
				setError('There was an error processing your request')
			}
		})
    }

    return (
        
		<div className="container mx-auto">
			<div className="flex justify-center px-6 my-12">
				<div className="w-full xl:w-3/4 lg:w-11/12 flex">
					<div
						className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
						style={{backgroundImage: 'url("https://source.unsplash.com/K4mSJ7kc0As/600x800")'}}
					></div>
					<div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
						<form
							onKeyDown={() => setError('')}
                            onSubmit={submitForm} 
                            className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                        >
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
									Email
								</label>
								<input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Email"
								/>
							</div>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
									Password
								</label>
								<input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
									className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
									id="password"
									type="password"
									placeholder="***********"
								/>
								{error &&
									<p className="text-xs italic text-red-500">{error}</p>
								}
							</div>
							<div className="mb-6 text-center">
								<button
                                    disabled={!email || !password}
									className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline disabled:opacity-50"
									type="submit"
								>
									Sign In
								</button>
							</div>
							<hr className="mb-6 border-t" />
							<div className="text-center">
								<Link href="/register">
									<a
										className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									>
										Create an Account!
									</a>
								</Link>
								
							</div>
							<div className="text-center">
								<a
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./forgot-password.html"
								>
									Forgot Password?
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
    )
}