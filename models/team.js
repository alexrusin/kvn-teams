import mongoose from 'mongoose'

const Schema = mongoose.Schema

const teamSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 255
    },

    city: {
        type: String,
        required: true,
        trim: true,
        maxLength: 255
    },

    description: {
        type: String,
        trim: true,
        maxLength: 10000
    },
    images: [{
        url: {
            type: String,
            required: true
        }
    }],
    rating: {
        score: {
            type: Number
        },
        total_votes: {
            type: Number
        }
    }
},{
    timestamps: true
})

let Team
try {
    Team = mongoose.model('team')
} catch (error) {
    Team = mongoose.model('team', teamSchema)
}

export default Team