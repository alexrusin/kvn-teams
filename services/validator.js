const errors = []

const validator = (fields) => {
    const validateFields = (req, res, next) => {
        if (!req.body.name) {
            errors.push({
                field: 'name', 
                message: 'required'
            })
        }

        if (errors.length > 0) {
            return res.status(422).json({
                errors,
                message: 'Your request has errors'
            })
        }
      
        next()
    }
    return validateFields
}

export default validator