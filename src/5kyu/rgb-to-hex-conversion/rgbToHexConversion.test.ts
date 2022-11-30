import rgbToHex from "./rgbToHexConversion";

test("convertToHex converts rgb values to a hexidecimal value", () => {
  expect(rgbToHex(173, 255, 47)).toEqual("ADFF2F");
  expect(rgbToHex(255, 255, 255)).toEqual("FFFFFF");
  expect(rgbToHex(0, 0, 0)).toEqual("000000");
  expect(rgbToHex(1, 1, 1)).toEqual("010101");
});
