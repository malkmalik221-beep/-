const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// تحميل متغيرات البيئة
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// متغيرات البيئة
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/pos_01';

// اتصال قاعدة البيانات
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Database Connected Successfully'))
.catch(err => console.error('❌ Database Connection Error:', err));

// مسارات الـ API
app.get('/', (req, res) => {
  res.json({
    message: '🎯 POS System API - pos_01',
    version: '1.0.0',
    status: 'Running'
  });
});

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date() });
});

// Routes (سيتم إضافتها لاحقاً)
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/products', require('./routes/products'));
// app.use('/api/sales', require('./routes/sales'));

// معالج الأخطاء
app.use((err, req, res, next) => {
  console.error('❌ Error:', err);
  res.status(500).json({
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err.message : 'An error occurred'
  });
});

// 404 Not Found
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// تشغيل الخادم
app.listen(PORT, () => {
  console.log(`\n🚀 POS Server running on http://localhost:${PORT}`);
  console.log(`📊 Database: ${MONGODB_URI}`);
  console.log(`🔧 Environment: ${process.env.NODE_ENV}\n`);
});

module.exports = app;
