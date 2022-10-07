import mongoose, { Schema } from 'mongoose';


const nominationSchema = new Schema({

    profile:{
        type: String
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    dob:{
        type: String,
        required: true
    },
    mobile_no:{
        type: String,
        required: true
    },
    address: {
        door_no: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        taluk: {
            type: String,
            required: true
        },
        post: {
            type: String,
            required: true
        },
        district: {
            type: String,
            required: true
        },
        pincode: {
            type: Number,
            required: true
        },
    },
    logo:{
        type: String,
    },
    party_name:{
        type: String,
        required: true
    },
    profile_cloudinary_id:{
        type: String,
    },
    logo_cloudinary_id:{
        type: String,
    }
},{
    timestamps: true
})


const Nomination = mongoose.model("Nomination", nominationSchema);

export default Nomination;