import 'database/connection'
import User from 'models/user'
import validator from 'services/validator'
import runMiddleware from 'utils/runMiddleware'

export default async (req, res) => {
  await runMiddleware(req, res, validator({
    name: 'required|minlength:3',
    email: 'required|email',
    password: 'required|minlength:6'
  }))
  const name = req.body.name
  const email = req.body.email
  const password = req.body.password
  const membership = req.body.membership

  try {
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(422).json({
        errors: [
          {
            field: 'email',
            message: 'this email has been already taken'
          }
        ],
        message: 'Your request has errors'
      })
    }
    const user = new User({
      name,
      email,
      password,
      membership
    })
    await user.save()
    res.json({
      user: { ...user.toJSON(), token: user.generateAuthToken() }
    })
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
}
