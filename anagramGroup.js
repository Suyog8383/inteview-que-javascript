let input = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"];
// Output: [["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]

function findValue(input) {
  let result = [];
  let obj = {};
  let nam1 = input.map((item) => item.split("").sort().join(""));

  for (let i = 0; i < input.length; i++) {
    if (obj.hasOwnProperty(nam1[i])) {
      obj[nam1[i]].push(input[i]);
    } else {
      obj[nam1[i]] = [input[i]];
    }
  }
  for (let data in obj) {
    result.push(obj[data]);
  }
  return result;
}
console.log(findValue(input));
