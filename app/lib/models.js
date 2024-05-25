import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20
    }, email: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20
    },
    password: {
        type: String,
        required: true,
        unique: false,
        min: 3,
        max: 20
    }, img: {
        type: String,
        required: true,
    },
    isadmin: {
        type: Boolean,
        default: false
    }
    , isactive: {
        type: Boolean,
        default: true
    },
    phone: {
        type: String
    }, address: {
        type: string

    }
}, { timestamps: true })

const productschema = new mongoose.Schema({


    title: {
        type: String,
        required: true,
        unique: true,

    }, desc: {
        type: String,
        required: true,

    },
    price: {
        type: Number,
        required: true,
        min: 0
    }, img: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        // default: false
    }
    , stock: {
        type: Number,
        deafult: true
    },
    size: {
        type: String
    },

}, { timestamps: true })
export const User = mongoose.models.User || mongoose.model("User", userschema)
export const Product = mongoose.models.Product || mongoose.model("Product",productschema)