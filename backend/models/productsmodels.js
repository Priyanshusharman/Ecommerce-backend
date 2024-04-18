const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Product name"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please enter description"]
    },
    price: {
        type: Number,
        required: [true, "Enter Price Of Product"]
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }],
    category: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: [true, "Enter Stock"],
        maxLength: [4, "Stock not more than 9999"]
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [{
        name: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        comment: {
            type: String,
            required: true
        }
    }],
    // user: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "User",
    //     required: true,
    //   },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Product", ProductSchema);
