// https://regex101.com/

// ^ search for string at the beginning of a line$ after to search for at the end of a line
//  start and end tokens gm - global multiline

//
// ^[a-zA-Z0-9_][a-zA-Z0-9_\.\+\-]*@[a-zA-Z0-9][a-zA-Z0-9\_\-]+\.[a-zA-Z]{2,}$

const regex = /REGEX/;

const phonePattern = /^\(\d{3}\)\s\d{3}-\d{4}$/;
const userInput = "(517) 555-1234";
const isValidPhone = phonePattern.test(userInput);
// console.log(isValidPhone);

const scrapedHtmlText = "<h1>Hello World</h1><p>This is my first webpage</p>";
const tagPattern = /<.*?>/;
const htmlStrings = scrapedHtmlText.split(tagPattern);
// console.log(
//    htmlStrings.filter((str) => {
//       return str !== "";
//    })
// );

const h1Pattern = /h1/g;
editedHtmlText = scrapedHtmlText.replace(h1Pattern, "p");
// console.log(editedHtmlText);

const sentence = "The quick brown fox jumps over the lazy dog.";
const wordPattern = /fox/;
const firstWordIndex = sentence.search(wordPattern);

console.log(firstWordIndex);
