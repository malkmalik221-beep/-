const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'الرجاء إدخال اسم المنتج'],
    trim: true
  },
  sku: {
    type: String,
    required: [true, 'الرجاء إدخال رمز المنتج'],
    unique: true,
    trim: true
  },
  category: {
    type: String,
    required: [true, 'الرجاء اختيار الفئة'],
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'الرجاء إدخال السعر'],
    min: [0, 'السعر يجب أن يكون موجباً']
  },
  cost: {
    type: Number,
    min: [0, 'التكلفة يجب أن تكون موجبة']
  },
  quantity: {
    type: Number,
    default: 0,
    min: [0, 'الكمية يجب أن تكون موجبة']
  },
  minStock: {
    type: Number,
    default: 5
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
  image: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);
