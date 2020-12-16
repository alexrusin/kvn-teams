import 'database/connection'
import User from 'models/user'
import validator from 'services/validator'
import runMiddleware from 'utils/runMiddleware'

export default async (req, res) => {
    await runMiddleware(req, res, validator([]))
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    if (!email || !password) {
        return res.status(422).send({error: 'You must provide email and password'})
    }

    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(422).send({error: 'Email is in use'})
        }
        const user = new User({
            name,
            email,
            password
        })
        await user.save()
        res.json({
            user: {...user.toJSON(), token: user.generateAuthToken()}
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}