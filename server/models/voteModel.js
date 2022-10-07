import mongoose, { Schema } from 'mongoose';


const votingSchema = new Schema({

    user_id:{
        type: mongoose.Schema.Types.ObjectId
    },
    register_no: {
        type: String,
        required: true,
    },
    phone_no: {
        type: String,
        required: true
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