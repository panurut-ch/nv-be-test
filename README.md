`git clone https://github.com/panurut-ch/nv-be-test.git`

`npm install`

`npm run permute`

`npm run odd`

`npm run smile
`

please run all command before run test because a test command will unit test only complied code via npm run

`npm run test`


# Code Structure

nv-be-test

```
├── index.test.ts
├── index.ts
├── indexthree.test.ts
├── indexthree.ts
├── indextwo.test.ts
├── indextwo.ts
├── jest.config.js
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
```

# Formula

ข้อ 1 : Permutations
bigO = O(n!⋅n) เพราะมี recursive (n!) และ loop เช็ค dup (O(n))

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
bigO = O(n^2) คร่าวๆเพราะมี 2 loop ซ้อนกัน

นับ ตัวเลขใน array แล้ว return ว่าเลขอะไรเป็นคี่ odd ด้วย 2 loop และ modulo
ว่าจำนวนที่นับ num หาด้วย 2 ลงตัวหรือไม่ ถ้าไม่ แปลว่าเป็นคี่ odd
ตอนแรกจะใช้ XOR แต่มีความซับซ้อนในแง่ของการเอา bit ของตัวเลขมา XOR กัน


ข้อ 3 : smile

bigO = O(n) เพราะมี loop check if 1 loop (O(n))

รับ input เป็น array ข้อมูลเป็น string เอามา loop หาว่าตรงเงื่อนไขหน้าตา smile เท่าไหร่แล้ว
return result ออกมา
ตอนแรกจะใช้ regex แต่เลือกแบบที่ดูเรียบง่ายด้วย loop และ check if
