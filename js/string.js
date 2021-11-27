//*toLowerCase() toUpperCase
//*indexOf()
//*includes()
//*endsWith()
//*replace() replaceAll()
//*slice()

const jsFileName = "script.js";
console.log(jsFileName.endsWith(".js"));  // true
const cssFileName = "styles.css";
console.log(cssFileName.endsWith(".js")); // false

const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
console.log(minifiedJsFileName);          // "script.min.js"
const cssFileNames = "styles.css, about.css, portfolio.css";
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
console.log(minifiedCssFileNames);        // "styles.min.css, about.min.css, portfolio.min.css"

const productName = "Repair droid";
console.log(productName.slice(0, 4));                  // "Repa"
console.log(productName.slice(3, 9));                  // "air dr"
console.log(productName.slice(0, productName.length)); // "Repair droid"
console.log(productName.slice(7, productName.length)); // "droid"