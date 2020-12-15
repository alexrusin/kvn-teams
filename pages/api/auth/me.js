import 'services/passport'
import passport from 'passport'
import runMiddleware from 'utils/runMiddleware'

const handler = async (req, res) => {

    await runMiddleware(req, res, passport.authenticate('jwt', {session: false}))

    res.json({
        user: req.user
    })
}

export default handler