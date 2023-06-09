const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Lütfen etkinlik ürününüzün adını girin!"],
    },
    description:{
        type: String,
        required:[true,"Lütfen etkinlik ürün açıklamanızı giriniz!"],
    },
    category:{
        type: String,
        required:[true,"Lütfen etkinlik ürün kategorinizi giriniz!"],
    },
    start_Date: {
        type: Date,
        required: true,
      },
      Finish_Date: {
        type: Date,
        required: true,
      },
      status: {
        type: String,
        default: "Running",
      },
    tags:{
        type: String,
    },
    originalPrice:{
        type: Number,
    },
    discountPrice:{
        type: Number,
        required: [true,"Lütfen etkinlik ürün fiyatınızı giriniz!"],
    },
    stock:{
        type: Number,
        required: [true,"Lütfen etkinlik ürün stoğunuzu giriniz!"],
    },
    images:[
        {
            type: String,
        },
    ],
    shopId:{
        type: String,
        required: true,
    },
    shop:{
        type: Object,
        required: true,
    },
    sold_out:{
        type: Number,
        default: 0,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model("Event", eventSchema);