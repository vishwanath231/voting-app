import mongoose, { Schema } from 'mongoose';


const votingSchema = new Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId
    },
    vote: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

const Vote = mongoose.model("Vote", votingSchema);

export default Vote;