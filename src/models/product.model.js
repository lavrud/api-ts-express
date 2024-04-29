"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ProductSchema = mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"],
    },
    quantity: {
        type: Number,
        required: true,
        default: 0,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    image: {
        type: String,
        required: false,
    },
}, {
    timestamps: true,
});
const Product = mongoose_1.default.model("Product", ProductSchema);
module.exports = Product;
