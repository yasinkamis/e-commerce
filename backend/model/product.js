const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Lütfen ürün adınızı giriniz!"],
  },
  description: {
    type: String,
    required: [true, "Lütfen ürün açıklamanızı giriniz!"],
  },
  category: {
    type: String,
    required: [true, "Lütfen ürün kategorinizi giriniz!"],
  },
  tags: {
    type: String,
  },
  originalPrice: {
    type: Number,
  },
  discountPrice: {
    type: Number,
    required: [true, "Lütfen ürün fiyatınızı giriniz!"],
  },
  stock: {
    type: Number,
    required: [true, "Lütfen ürün stoğunuzu giriniz!"],
  },
  images: [
    {
      type: String,
    },
  ],
  reviews: [
    {
      user: {
        type: Object,
      },
      rating: {
        type: Number,
      },
      comment: {
        type: String,
      },
      productId: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  ratings: {
    type: Number,
  },
  shopId: {
    type: String,
    required: true,
  },
  shop: {
    type: Object,
    required: true,
  },
  sold_out: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  rentTime: {
    type: Number,
    required: [true, "Lütfen Kiralama Sürenizi giriniz!"],
  },
});

module.exports = mongoose.model("Product", productSchema);
