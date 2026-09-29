# دليل التطوير

## متطلبات التطوير
- Node.js v14 أو أحدث
- MongoDB (محلي أو عن بعد)
- Postman (اختياري - لاختبار API)
- VS Code (موصى به)

## إعداد البيئة

### 1. استنساخ المستودع
```bash
git clone https://github.com/yourusername/pos_01.git
cd pos_01
```

### 2. إعداد Backend
```bash
cd backend
npm install
cp .env.example .env
# عدّل ملف .env حسب احتياجاتك
```

### 3. إعداد Frontend
```bash
cd ../frontend
npm install
```

## التشغيل في بيئة التطوير

### تشغيل Backend
```bash
cd backend
npm run dev
```
الخادم سيعمل على: `http://localhost:5000`

### تشغيل Frontend
```bash
cd frontend
npm start
```
التطبيق سيعمل على: `http://localhost:3000`

## اختبار API

### استخدام Postman
1. استورد ملف `postman_collection.json` (سيتم إضافته)
2. عيّن متغيرات البيئة
3. جرب كل endpoint

## معايير الكود

### تسمية المتغيرات
- استخدم camelCase للمتغيرات والدوال
- استخدم PascalCase للـ Classes والـ Components
- استخدم UPPER_CASE للثوابت

### التعليقات
```javascript
// تعليق عادي

/**
 * وصف الدالة
 * @param {type} paramName - وصف المعامل
 * @returns {type} وصف القيمة المرجعة
 */
```

## Git Workflow

1. إنشاء فرع جديد: `git checkout -b feature/feature-name`
2. إجراء التغييرات
3. إرسال التغييرات: `git commit -m "وصف التغيير"`
4. إرسال الفرع: `git push origin feature/feature-name`
5. إنشاء Pull Request

## استكشاف الأخطاء

### المشكلة: لا يتصل بـ MongoDB
**الحل:**
- تأكد أن MongoDB يعمل
- تحقق من رابط الاتصال في ملف `.env`
- تأكد من صحة بيانات الاتصال

### المشكلة: CORS Error
**الحل:**
- تحقق من `CORS_ORIGIN` في `.env`
- تأكد أن Frontend يرسل الطلبات من الرابط الصحيح

## الموارد الإضافية
- [Express.js Docs](https://expressjs.com/)
- [MongoDB Docs](https://docs.mongodb.com/)
- [React Docs](https://react.dev/)
