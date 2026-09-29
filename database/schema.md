# Database Schema - نظام نقاط البيع

## المجموعات (Collections)

### 1. Users (المستخدمون)
```json
{
  "_id": ObjectId,
  "name": "string",
  "email": "string (unique)",
  "password": "string (hashed)",
  "role": "admin | cashier | manager",
  "status": "active | inactive",
  "phone": "string",
  "createdAt": Date,
  "updatedAt": Date
}
```

### 2. Products (المنتجات)
```json
{
  "_id": ObjectId,
  "name": "string",
  "sku": "string (unique)",
  "category": "string",
  "description": "string",
  "price": "number",
  "cost": "number",
  "quantity": "number",
  "minStock": "number",
  "status": "active | inactive",
  "image": "string",
  "createdAt": Date,
  "updatedAt": Date
}
```

### 3. Sales (المبيعات)
```json
{
  "_id": ObjectId,
  "invoiceNumber": "string (unique)",
  "cashier": ObjectId (ref: User),
  "items": [
    {
      "product": ObjectId (ref: Product),
      "quantity": "number",
      "price": "number",
      "discount": "number",
      "subtotal": "number"
    }
  ],
  "subtotal": "number",
  "tax": "number",
  "discount": "number",
  "total": "number",
  "paymentMethod": "cash | card | check | other",
  "status": "completed | pending | cancelled",
  "notes": "string",
  "createdAt": Date
}
```

## الفهارس (Indexes)

- Users: `email` (unique)
- Products: `sku` (unique), `category`, `status`
- Sales: `invoiceNumber` (unique), `cashier`, `createdAt`
