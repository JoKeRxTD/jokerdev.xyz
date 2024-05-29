import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    body: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
    username: { type: String, required: true },
    discordId: { type: String, required: true }
}, { timestamps: true })

const Post = mongoose.models.Post || mongoose.model("Post", postSchema)

export default Post