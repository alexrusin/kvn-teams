import 'services/passport'
import passport from 'passport'

export default (req, res) => {
    passport.authenticate('local', {session: false})(req, res, (...args) => {
        res.json({
            token: req.user.generateAuthToken()
        })
    })
}