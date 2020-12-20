import validator from 'validator'

let errors = []

const validations = {
    required(field, value) {
        if (!value) {
            errors.push({
                field, 
                message: `${field} is required`
            })
        }
    },
    
    minlength(field, value, minlength) {
        if (!value) {
            return
        }
        if (value.length < parseInt(minlength)) {
            errors.push({
                field, 
                message: `${field} should be at least ${minlength} characters`
            })
        }
    },

    email(field, value) {
        if (!value) {
            return
        }

        if (!validator.isEmail(value)) {
            errors.push({
                field, 
                message: `${field} should be a valid email`
            })
        }
    }
}

export default (fields) => {
    errors = []
    const validateFields = (req, res, next) => {
        
        for (const property in fields) {
            const validationRules = fields[property].split('|')
            validationRules.forEach((rule) => {
                let [validationRule, argument] = rule.split(':')
                    validations[validationRule](property, req.body[property], argument)
                
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