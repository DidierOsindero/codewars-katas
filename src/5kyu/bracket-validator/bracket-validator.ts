export const bracketValidator = (inputString: string): boolean => {
  const splitStr = inputString.split("");
  const stack: string[] = [];
  const openBrackets = "({[";
  const closeBrackets = ")}]";

  const brackets: { [key: string]: string } = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  for (const char of splitStr) {
    if (openBrackets.includes(char)) {
      stack.push(char);
    } else if (closeBrackets.includes(char)) {
      const topOfStack = stack.pop();
      if (topOfStack !== brackets[char]) {
        return false;
      }
    }
  }
  return true;
};

console.log(bracketValidator("()"));
