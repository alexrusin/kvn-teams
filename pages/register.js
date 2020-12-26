import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { signIn } from 'actions'
import { useDispatch } from 'react-redux'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
	const [confirmPasswordError, setConfirmPasswordError] = useState('')
	const [errors, setErrors] = useState({})
	const dispatch = useDispatch()
	const router = useRouter()

    const checkConfirmPassword = (value, compareTo, confirmPasswordField) => {
        setConfirmPasswordError(value !== compareTo ? 'Passwords don\'t match' : '')
        if (confirmPasswordField) {
            setConfirmPassword(value)
        } else {
            setPassword(value)
        }
	}

	const getErrorMessage = (field) => {
		if (!field) {
			return errors.message
		}
		if (!errors.errors) {
			return
		}

		const error = errors.errors.find(err => err.field === field)
		if (error) {
			return error.message
		}
	}

	const clearError = (field) => {
		
		if (!field) {
			return setErrors({...errors, message: ''})
		}


		if (!errors.errors) {
			return
		}

		const filteredErrors = errors.errors.filter((err) => err.field !== field)
		errors.errors = filteredErrors
		setErrors(errors)
	}
	
	const submitForm = (e) => {
		e.preventDefault()

		axios.post('/api/auth/signup', {
			name,
			email,
			password
		})
		.then(({data}) => {
			dispatch(signIn(data.user))
			router.push('/dashboard')
		})
		.catch(error => {
			if (error.response) {
				setErrors(error.response.data)
			}
		})

		
	}

    return (
		<div className="container mx-auto">
			<div className="flex justify-center px-6 my-12">
				<div className="w-full xl:w-3/4 lg:w-11/12 flex">
					<div
                        className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                        style={{backgroundImage: 'url("https://source.unsplash.com/Mv9hjnEUHR4/600x800")'}}
					></div>
					<div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
						<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={(e) => submitForm(e)} onKeyDown={(e) => clearError(e.target.id)}>	
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                                    Name
                                </label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                />
								{getErrorMessage('name') && <p className="text-xs italic text-red-500">{getErrorMessage('name')}</p>}
                            </div>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
									Email
								</label>
								<input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Email"
								/>
								{getErrorMessage('email') && <p className="text-xs italic text-red-500">{getErrorMessage('email')}</p>}
							</div>
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
										Password
									</label>
									<input
                                        value={password}
                                        onChange={(e) => checkConfirmPassword(e.target.value, confirmPassword)}
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="password"
										type="password"
										placeholder="******************"
									/>
									{getErrorMessage('password') && <p className="text-xs italic text-red-500">{getErrorMessage('password')}</p>}
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
										Confirm Password
									</label>
									<input
                                        value={confirmPassword}
                                        onChange={(e) => checkConfirmPassword(e.target.value, password, true)}
										className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border ${confirmPasswordError ? 'border-red-500' : ''} rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
										id="c_password"
										type="password"
										placeholder="******************"
									/>
                                    {confirmPasswordError && <p className="text-xs italic text-red-500">{confirmPasswordError}</p>}
								</div>
							</div>
							<div className="mb-6 text-center">
								<button
									disabled={!name || !email || !password || !confirmPassword}
									className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="submit"
								>
									Register Account
								</button>
							</div>
							<hr className="mb-6 border-t" />
							<div className="text-center">
								<a
									className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="#"
								>
									Forgot Password?
								</a>
							</div>
							<div className="text-center">
                                <Link href="/signin">
                                    <a
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                    >
                                        Already have an account? Login!
                                    </a>
                                </Link>
								
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
    )
}