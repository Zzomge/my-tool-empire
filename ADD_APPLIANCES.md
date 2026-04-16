# เพิ่มเครื่องใช้ไฟฟ้าใหม่ (Add New Appliances)

## วิธีที่ 1: ใช้ Script รวม (แนะนำ)

รัน script เดียวทำทุกอย่างให้เลย:

```bash
node add-appliances.js
```

Script นี้จะทำ:
1. ตรวจสอบและลบ duplicates อัตโนมัติ
2. สร้าง appliances ใหม่ตามจำนวนที่ต้องการ
3. อัปเดต sitemap_a.xml
4. แสดงสรุปผล

---

## วิธีที่ 2: ทำทีละขั้นตอน

### ขั้นตอน 1: ตรวจสอบ duplicates
```bash
node check-duplicates.js
```

### ขั้นตอน 2: ลบ duplicates (ถ้ามี)
```bash
node remove-duplicates.js
```

### ขั้นตอน 3: สร้าง appliances ใหม่
```bash
node generate-appliances.js
```

### ขั้นตอน 4: อัปเดต sitemap
```bash
node generate-sitemap.js
```

### ขั้นตอน 5: Commit และ push
```bash
git add app/[slug]/data.json public/sitemap_a.xml
git commit -m "Add new appliances and update sitemap"
git push
```

---

## แก้ไขจำนวน appliances ที่ต้องการ

แก้ไขไฟล์ `generate-appliances.js`:
```javascript
// เปลี่ยนตัวเลข 500 เป็นจำนวนที่ต้องการ
while (generatedCount < 500 && attemptCount < maxAttempts) {
```

หรือแก้ไขไฟล์ `add-appliances.js`:
```javascript
const TARGET_COUNT = 500; // เปลี่ยนตรงนี้
```

---

## ตรวจสอบผล

หลังจากรัน script แล้ว:
- เช็คจำนวน items: `node -e "const data = require('./app/[slug]/data.json'); console.log('Total:', data.length)"`
- เช็ค duplicates: `node check-duplicates.js`
- เช็ค sitemap: เปิด `public/sitemap_a.xml`

---

## ไฟล์สำคัญ

- `check-duplicates.js` - ตรวจสอบ duplicates
- `remove-duplicates.js` - ลบ duplicates
- `generate-appliances.js` - สร้าง appliances ใหม่
- `generate-sitemap.js` - สร้าง sitemap
- `add-appliances.js` - script รวมทำทุกอย่างในทีเดียว

---

## Backup

ระบบจะสร้าง backup อัตโนมัติ:
- `data.json.backup` - ก่อนลบ duplicates
- `data.json.before500` - ก่อนเพิ่ม appliances ใหม่

ถ้าต้องการ restore:
```bash
cp app/[slug]/data.json.backup app/[slug]/data.json
# หรือ
cp app/[slug]/data.json.before500 app/[slug]/data.json
```
