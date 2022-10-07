import mongoose, { Schema } from 'mongoose';


const adminInfoSchema = Schema({
   
    admin:{
        type: mongoose.Schema.Types.ObjectId,
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


const AdminInfo = mongoose.model('Admin_Info', adminInfoSchema);

export default AdminInfo;