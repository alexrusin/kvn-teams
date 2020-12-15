import 'database/connection'
import User from 'models/user'

export default async (req, res) => {
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
            email,
            password
        })
        await user.save()
        res.json({token: user.generateAuthToken()})
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}