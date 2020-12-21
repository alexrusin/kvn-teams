import { useState } from "react"

export default function Signin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitForm  = (e) => {
        e.preventDefault()
        console.log(email, password)
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
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="password"
									type="password"
									placeholder="******************"
								/>
								<p className="text-xs italic text-red-500">Please choose a password.</p>
							</div>
							<div className="mb-4">
								<input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
								<label className="text-sm" htmlFor="checkbox_id">
									Remember Me
								</label>
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
								<a
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./register.html"
								>
									Create an Account!
								</a>
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