import { Image, createCanvas } from 'canvas'

export default function getCroppedImage (imageSrc, crop, fileName) {
  const image = new Image()
  image.src = imageSrc
  crop.width = image.width * crop.width / 100
  crop.height = image.height * crop.height / 100
  crop.x = image.width * crop.x / 100
  crop.y = image.height * crop.y / 100

  const canvas = createCanvas(crop.width, crop.height)
  const scaleX = image.naturalWidth / image.width
  const scaleY = image.naturalHeight / image.height
  canvas.width = crop.width
  canvas.height = crop.height
  const ctx = canvas.getContext('2d')

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height
  )

  return new Promise((resolve, reject) => {
    canvas.toDataURL('image/jpeg', (err, jpeg) => {
      if (err) {
        reject(new Error('There was an error processing image'))
      }
      resolve(jpeg)
    })
    // canvas.toBlob(blob => {
    //   blob.name = fileName
    //   resolve(blob)
    // }, 'image/jpeg', 1)
  })
}
