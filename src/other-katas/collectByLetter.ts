function collectByLetter(inputArray: string[]) {
  const outputDict: Record<string, string[]> = {};
  const alphabet: string = "abcdefghijklmnopqrstuvwxyz";
  for (let word of inputArray) {
    let firstLetter: string = word[0].toLowerCase();
    if (alphabet.includes(firstLetter)) {
      if (outputDict[firstLetter]) {
        outputDict[firstLetter].push(word);
      } else {
        outputDict[firstLetter] = [word];
      }
    }
  }
  return outputDict;
}

export default collectByLetter;

//console.table(collectByLetter(["shall", "i", "compare", "thee", "to", "a", "summer's"]));
