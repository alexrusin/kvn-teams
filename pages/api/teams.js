import 'services/passport'
import 'database/connection'
import passport from 'passport'
import runMiddleware from 'utils/runMiddleware'
import getCroppedImage from 'utils/getCroppedImage'
import validator from 'services/validator'
import uploadFile from 'services/uploadFile'

export default async function (req, res) {
  await runMiddleware(req, res, passport.authenticate('jwt', { session: false }))
  await runMiddleware(req, res, validator({
    name: 'required|minlength:3',
    city: 'required|minlength:3',
    image: 'required'
  }))
  const { method } = req
  let croppedImage
  switch (method) {
    case 'POST':
      croppedImage = await getCroppedImage(req.body.image, req.body.crop, req.body.imageName)
      uploadFile(croppedImage, req.body.imageName)
      res.send(croppedImage)
      break
    default:
      res.status(404).json({ message: `Method ${method} not found` })
  }
}
