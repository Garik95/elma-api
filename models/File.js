module.exports = (mongoose) => {
    return mongoose.model('File', new mongoose.Schema({
        folder: {
            type: String,
            required: true
        },
        originalName: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        createdAt: {
            type: Number,
            default: new Date()
        },
        createdBy: {
            type: String
        },
        status: {
            type: Number,
            enum: [0, 1],
            default: 1
        }
    }))
}