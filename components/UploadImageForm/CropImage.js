import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

export default function CropImage ({
  image,
  crop,
  setCrop,
  setImage,
  initialCrop
}) {
  return (
    <div className="flex justify-center">
      <div>
        <div>
          <ReactCrop
            src={image}
            crop={crop}
            onChange={(newCrop, percentCrop) => setCrop(percentCrop)}
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => {
              setImage(null)
              setCrop(initialCrop)
            }}
            type="button"
            className="btn-danger"
          >
            Очистить фото
          </button>
        </div>
      </div>
    </div>
  )
}
