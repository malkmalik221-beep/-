# POS System API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
جميع الطلبات المحمية تتطلب رمز JWT في الـ header:
```
Authorization: Bearer <token>
```

## Endpoints

### Auth (المصادقة)
- `POST /auth/register` - تسجيل مستخدم جديد
- `POST /auth/login` - تسجيل الدخول
- `POST /auth/logout` - تسجيل الخروج

### Products (المنتجات)
- `GET /products` - الحصول على جميع المنتجات
- `GET /products/:id` - الحصول على منتج واحد
- `POST /products` - إضافة منتج جديد
- `PUT /products/:id` - تحديث منتج
- `DELETE /products/:id` - حذف منتج

### Sales (المبيعات)
- `GET /sales` - الحصول على جميع المبيعات
- `GET /sales/:id` - الحصول على مبيعة واحدة
- `POST /sales` - إنشاء مبيعة جديدة
- `PUT /sales/:id` - تحديث مبيعة
- `DELETE /sales/:id` - إلغاء مبيعة

### Users (المستخدمون)
- `GET /users` - الحصول على جميع المستخدمين
- `GET /users/:id` - الحصول على مستخدم واحد
- `PUT /users/:id` - تحديث بيانات المستخدم
- `DELETE /users/:id` - حذف مستخدم

## الأخطاء الشائعة

| Code | Message |
|------|----------|
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Internal Server Error |

## Pagination

الطلبات التي تُرجع قوائم تدعم:
```
?page=1&limit=10&sort=-createdAt
```
