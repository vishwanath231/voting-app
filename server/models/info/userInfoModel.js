import mongoose, { Schema } from 'mongoose';



const userInfoSchema = Schema({
   
    user:{
        type: mongoose.Schema.Types.ObjectId,
    },
    reg_no:{
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone_no: {
        type: Number,
    },
    gender: {
        type: String,
    },
    birth_date: {
        type: String,
    },
    blood_group: {
        type: String,
    },
    parent_name: {
        type: String,
    },
    community: {
        type: String,
    },
    address: {
        door_no: {
            type: String,
        },
        street: {
            type: String,
        },
        city: {
            type: String,
        },
        taluk: {
            type: String,
        },
        post: {
            type: String,
        },
        district: {
            type: String,
        },
        pincode: {
            type: Number,
        },
    }

},{
    timestamps: true
})


const UserInfo = mongoose.model('User_Info', userInfoSchema);

export default UserInfo;