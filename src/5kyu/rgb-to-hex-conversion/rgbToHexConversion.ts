const rgbToHex = (r: number, g: number, b: number): string => {
  let hexReturn: string = "";
  const rgbArray = [r, g, b];

  for (const rgbValue of rgbArray) {
    hexReturn += convertToHex(rgbValue);
  }
  return hexReturn;
};

const convertToHex = (value: number): string => {
  let hexReturn: string = "";
  if (value > 255) {
    hexReturn += "FF";
  } else if (value <= 0) {
    hexReturn += "00";
  } else {
    let rgbString = "";
    rgbString += digitHexConverter(Math.floor(value / 16));
    rgbString += digitHexConverter(value % 16);
    hexReturn += rgbString;
  }
  return hexReturn;
};
const digitHexConverter = (decValue: number): string => {
  let outputString = "";
  let hexValues = "0123456789ABCDEF".split("");
  outputString += hexValues[decValue];
  return outputString;
};

export default rgbToHex;
