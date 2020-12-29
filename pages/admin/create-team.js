import Image from 'next/image'
import requireAdmin from 'components/requireAdmin'
import { useState } from 'react'
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const CreateTeam = () => {
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState()
  const initialCrop = { unit: '%', width: 100, aspect: 16 / 9, x: 0, y: 0 }
  const [crop, setCrop] = useState(initialCrop)
  const submitForm = (e) => {
    e.preventDefault()
    console.log(name, city, description)
  }

  const processFile = (files) => {
    if(!files.length) {
      return 
    }
    console.log(files[0].name)
    let reader = new FileReader()
    reader.readAsDataURL(files[0])
    reader.onload = e => {
      let src = e.target.result
      setImage(src)
    }
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
                      onChange={e => setName(e.target.value)}
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
                      onChange={e => setCity(e.target.value)}
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
                      onChange={e => setDescription(e.target.value)}
                      id="description"
                      name="description"
                      rows="3"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Здесь Вы можете, если хотите, написать несколько слов о команде
                  </p>
                </div>
                {
                  image ? <div>
                  <div className="flex justify-center">
                    <ReactCrop src={image} crop={crop} onChange={newCrop => setCrop(newCrop)} />
                  </div>
                  <button
                  onClick={() => {
                    setImage(null)
                    setCrop(initialCrop)
                  }}
                  type="button"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Очистить фото
                </button>
                </div>
                  
                  :<div>
                  <label className="block text-sm font-medium text-gray-700">
                    Cover photo
                  </label>
                  <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Загрузить фото</span>
                          <input
                            onChange={e => processFile(e.target.files)}
                            id="file-upload"
                            name="file-upload"
                            type="file" 
                            accept='image/*'
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG
                      </p>
                    </div>
                  </div>
                </div>
                }
                
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default requireAdmin(CreateTeam)