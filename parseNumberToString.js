function parseNumberToString(json, key) {
  let reg = `"${key}":[^\\d"]*(\\d+)`;
  reg = new RegExp(reg, 'g');
  return json.replace(reg, `"${key}": "$1"`);
}

var o = '[{"name": 13134},{"age": 13, "name": 798445645},{"sex": "male", "name": "14848"}]';
var out = parseNumberToString(o, 'name');

console.log(out);
