import UploadImage from 'components/UploadImageForm/UploadImage'
import CropImage from 'components/UploadImageForm/CropImage'
export default function UploadImageForm ({ image, setImage, crop, setCrop, setImageName, initialCrop }) {
  return (
        <>
        {
           image
             ? <CropImage image={image} crop={crop} setCrop={setCrop} setImage={setImage} initialCrop={initialCrop} />
             : <UploadImage setImage={setImage} setImageName={setImageName}/>
        }
        </>

  )
}
