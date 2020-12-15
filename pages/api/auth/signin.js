import 'services/passport'
import passport from 'passport'
import runMiddleware from 'utils/runMiddleware'

const handler = async (req, res) => {

    await runMiddleware(req, res, passport.authenticate('local', {session: false}))

    res.json({
        token: req.user.generateAuthToken()
    })
}

export default handler