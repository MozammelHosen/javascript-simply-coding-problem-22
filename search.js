const porem = "sada sada kala kala ajker amer mon valo nai";
const search = porem.toLowerCase().includes("sadA".toLowerCase());
console.log(search);

console.log(porem.indexOf("kala"));
if (porem.toLowerCase().indexOf("Kala".toLowerCase()) !== -1) {
  console.log("valid user");
} else {
  console.log("Not valid user");
}

// StartWith
console.log(porem.toLowerCase().startsWith("Sada".toLowerCase()));

// EndWith

console.log(porem.toLowerCase().endsWith("Nai".toLowerCase()));