module.exports = (mongoose) => {
    return mongoose.model('Folder', new mongoose.Schema({
        id: {
            type: Number,
            required: true,
            unique: true
        },
        parent: {
            type: Number,
            default: null
        },
        name: {
            type: String,
            required: true
        }
    }))
}