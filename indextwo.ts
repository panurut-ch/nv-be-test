export function getFindOdd(input: number[]): number {
  let result = 0;
  for (const num of input) {
    // console.log('num', num)
    result ^= num; // ใช้ XOR
    // console.log('result', result)
  }
  console.log('result', result)
  return result;
}
