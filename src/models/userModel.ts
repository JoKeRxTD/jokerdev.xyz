import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    id: { type: String, required: true },
    discordId: { type: String, required: true },
    global_name: { type: String, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true },
    avatar: { type: String, required: true },
    image: { type: String, required: true },
    email: { type: String, required: true },
    email_verified: { type: Boolean, required: true },
    flags: { type: Number, required: true },
    premium_type: { type: Number, required: true },
    public_flags: { type: Number, required: true },
    banner: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
    posts: { type: Array, required: true },
    apiKeys: { type: Array, required: true },
    accounts: { type: Array, required: true },
    sessions: { type: Array, required: true }
}, { timestamps: true })

const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User