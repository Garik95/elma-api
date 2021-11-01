module.exports = (mongoose) => {
    
    folderSchema = new mongoose.Schema({
        parent: {
            type: mongoose.Types.ObjectId,
            default: null
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
            type: mongoose.Types.ObjectId
        },
        updatedAt: {
            type: Number,
            default: new Date()
        },
        updatedBy: {
            type: mongoose.Types.ObjectId
        }
    });

    return mongoose.model('Folder', folderSchema);
}