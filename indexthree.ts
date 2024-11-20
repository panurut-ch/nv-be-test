export function countSmileFace(input: string[]): number {
  let count = 0;

  for (const face of input) {
    // หา smile face
    if (
      face === ":)" ||
      face === ":D" ||
      face === ";)" ||
      face === ";D" ||
      face === ":-)" ||
      face === ":-D" ||
      face === ";-)" ||
      face === ";-D" ||
      face === ":~)" ||
      face === ":~D" ||
      face === ";~)" ||
      face === ";~D"
    ) {
      count++;
    }
  }
  // ใช้ regax หา smile face
  // const smileRegex = /^[:;][-~]?[)D]$/;
  // นับเฉพาะค่าที่ตรง regax
  // return input.filter((face) => smileRegex.test(face)).length;
  console.log("count", count);
  return count;
}
