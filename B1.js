// B1
console.log('Hello World')
// B2
console.log("Nguyen Thanh Tu")
// B3
let text = "*";
for (let i = 1; i < 5; i++) {
    console.log(text*5)
}
//B4
let n = 5;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
 
    