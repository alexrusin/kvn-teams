export function getError (field, errors) {
  if (!field) {
    return errors.message
  }
  if (!errors.errors) {
    return
  }

  const error = errors.errors.find((err) => err.field === field)
  if (error) {
    return error.message
  }
}

export function clearError (field, errors, setErrors) {
  if (!field) {
    return setErrors({ ...errors, message: '' })
  }

  if (!errors.errors) {
    return
  }

  const filteredErrors = errors.errors.filter((err) => err.field !== field)
  errors.errors = filteredErrors
  setErrors(errors)
}
