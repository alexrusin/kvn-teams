import 'services/passport'
import 'database/connection'
import passport from 'passport'
import runMiddleware from 'utils/runMiddleware'
import getCroppedImage from 'utils/getCroppedImage'
import validator from 'services/validator'
import { uploadFile, getUrl } from 'services/s3'
import stringRandom from 'utils/stringRandom'
import Team from 'models/team'

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
      const name = req.body.name
      const city = req.body.city.replace('г.', '')
      const existingTeam = await Team.findOne({ name })
      if (existingTeam) {
        return res.status(422).json({
          errors: [
            {
              field: 'name',
              message: 'Такая команда уже существует'
            }
          ],
          message: 'В ваших данных обнаружена ошибка'
        })
      }
      croppedImage = getCroppedImage(req.body.image, req.body.crop, req.body.imageName)
      const path = `teams/${stringRandom(20)}.jpg`
      await uploadFile(croppedImage, path)

      const team = new Team({
        name,
        city,
        images: [{
          url: path
        }]
      })

      await team.save()

      res.send({team})
      break
    default:
      res.status(404).json({ message: `Method ${method} not found` })
  }
}
