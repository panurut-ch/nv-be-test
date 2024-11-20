export function getFindOdd(input: number[]): number {
  // แบบใช้ 2 loop , mod ด้วย 2
  for (const num of input) {
    let count = 0;
    // นับ num ว่ามีกี่ครั้ง
    for (const n of input) {
      if (n === num) {
        count++;
      }
    }
    // เช็ค odd ด้วย modulo
    if (count % 2 !== 0) {
      console.log('num', num)
      return num;
    }
  }
  return 0;
  // แบบใช้ XOR
  // let result = 0;
  // for (const num of input) {
  //   // console.log('num', num)
  //   result ^= num; // ใช้ XOR
  //   // console.log('result', result)
  // }
  // console.log('result', result)
  // return result;
}
