import 'services/passport'
import 'database/connection'
import passport from 'passport'
import runMiddleware from 'utils/runMiddleware'
import getCroppedImage from 'utils/getCroppedImage'
import validator from 'services/validator'
import uploadFile from 'services/uploadFile'
import stringRandom from 'utils/stringRandom'

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
      croppedImage = getCroppedImage(req.body.image, req.body.crop, req.body.imageName)
      const uploadData = await uploadFile(croppedImage, `teams/${stringRandom(20)}.jpg`)
      res.send('https://ikdb-dev.s3-us-west-2.amazonaws.com/teams/ZnaGYXtnaOzb2Gqbcbwv.jpg')
      break
    default:
      res.status(404).json({ message: `Method ${method} not found` })
  }
}
