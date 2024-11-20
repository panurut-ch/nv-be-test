export function getPermutations(input: string): string[] {
  const result: string[] = [];

  function permute(current: string, remaining: string) {
    // console.log('remaining 1', remaining)
    // base case ไม่เหลือตัวอักษร
    if (remaining.length === 0) {
      // เพิ่มเข้า result เพื่อเป็นคำตอบ (เช็ค dup ด้วย)
      // console.log('result 1', result)
      if (!result.includes(current)) {
        // console.log('current 1', current)
        result.push(current);
      }
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      permute(
        current + remaining[i],
        remaining.slice(0, i) + remaining.slice(i + 1)
      );
    }
  }

  permute("", input);
  console.log('result: ', result)
  return result;
}

getPermutations("aabbb")