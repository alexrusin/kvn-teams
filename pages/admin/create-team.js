import requireAdmin from 'components/requireAdmin'
import UploadImageForm from 'components/UploadImageForm'
import { useState } from 'react'
import 'react-image-crop/dist/ReactCrop.css'

const CreateTeam = () => {
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [description, setDescription] = useState('')
  const [imageName, setImageName] = useState('')
  const [image, setImage] = useState()
  const initialCrop = { unit: '%', width: 100, aspect: 16 / 9, x: 0, y: 0 }
  const [crop, setCrop] = useState(initialCrop)
  const submitForm = (e) => {
    e.preventDefault()
    console.log(name, city, description, imageName)
  }

  return (
    <div className="container py-8 mx-auto my-auto px-2">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Создать команду
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Здесь Вы можете создать команду
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={submitForm}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Название команды
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="off"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Город
                    </label>
                    <input
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="off"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    О команде
                  </label>
                  <div className="mt-1">
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      id="description"
                      name="description"
                      rows="3"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Здесь Вы можете, если хотите, написать несколько слов о
                    команде
                  </p>
                </div>
                <UploadImageForm
                  image={image}
                  setImage={setImage}
                  crop={crop}
                  setCrop={setCrop}
                  setImageName={setImageName}
                  initialCrop={initialCrop}
                />
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" className="btn-primary">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default requireAdmin(CreateTeam)
