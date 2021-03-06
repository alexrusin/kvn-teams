export default function UploadImage ({ setImage, setImageName }) {
  const processFile = (files) => {
    if (!files.length) {
      return
    }
    setImageName(files[0].name)
    const reader = new FileReader()
    reader.readAsDataURL(files[0])
    reader.onload = (e) => {
      const src = e.target.result
      setImage(src)
    }
  }
  return (
    <div>
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
              htmlFor="image"
              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <span>Загрузить фото</span>
              <input
                onChange={(e) => processFile(e.target.files)}
                id="image"
                name="image"
                type="file"
                accept="image/*"
                className="sr-only"
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs text-gray-500">PNG, JPG</p>
        </div>
      </div>
    </div>
  )
}
