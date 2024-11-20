`git clone https://github.com/panurut-ch/nv-be-test.git`

`npm install`

`npm start`

`npm run test`

# Formula

ข้อ 1 : Permutations

Total Unique Permutations =  n! / nk!

สูตรคือ การหาการเรียงสับเปลี่ยนปกติคือ n! ในขณะที่ n คือจำนวนของที่ไม่ซ้ำกัน
แต่ถ้ามีของซ้ำกันจะเป็น n! หารด้วย จำนวนของที่ซ้ำที่คูณกันแล้ว nk!
เช่น "aabbb"
a = 2 ตัว

b = 3 ตัว

จำนวนทั้งหมด = 5 ตัว
Total Unique Permutations = 5! / 2! x 3!
= 120 / 12 = 10
result = 10 รูปแบบการเรียงของ "aabbb"

ข้อ 2 : odd

นับ ตัวเลขใน array แล้ว return ว่าเลขอะไรเป็นคี่ odd
