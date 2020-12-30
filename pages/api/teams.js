import 'services/passport'
import passport from 'passport'
import runMiddleware from 'utils/runMiddleware'
import getCroppedImage from 'utils/getCroppedImage'

export default async function (req, res) {
  await runMiddleware(req, res, passport.authenticate('jwt', { session: false }))
  const { method } = req
  let croppedImage
  switch (method) {
    case 'POST':
      croppedImage = await getCroppedImage(req.body.image, req.body.crop, req.body.imageName)
      res.send(croppedImage)
      break
    default:
      res.status(404).json({ message: `Method ${method} not found` })
  }
}
