const name = "      Reina Uhler        ";

const trimmedName = name.trim();
// console.log(`The trimmed name is ${trimmedName}.`);

const startTrimmedName = name.trimStart(); // can also use trimLeft()
// console.log(`The left/start trimmed name is ${startTrimmedName}`);

const endTrimmedName = name.trimEnd(); // can also use trimRight()
// console.log(`The right/end trimmed name is ${endTrimmedName}`);

// console.log(`hello ${name}`);

const nameLenth = name.length;
// console.log(`The lenth of ${name} is ${nameLenth}.`);

const upperCasedName = name.toUpperCase();
// console.log(`HEY ${upperCasedName}!`);

const lowerCasedName = name.toLowerCase();
// console.log(`shhhh...... hi {lowerCasedName}...`);

const email = "Mike@gmail.com";
const lowerCasedEmail = email.toLowerCase();
// console.log(`Normalized email address: ${lowerCasedEmail}`);

let birthday = "8/27/1982";

const indexOfMonth = birthday.indexOf(`8`);
// console.log(`The string "8" is found at the ${indexOfMonth} of ${birthday}.`);

const firstChar = birthday[0];
// console.log(`The first char if ${birthday} is ${firstChar}.`);

const indexOfFirstSlash = birthday.indexOf(`/`);
// console.log(
//    `The first slash in ${birthday} is found at the ${indexOfFirstSlash} index`
// );

const indexOfSecondSlash = birthday.indexOf(`/`, 3);
// console.log(
//    `The second slash in ${birthday} id found at ${indexOfSecondSlash} index.`
// );

const indexOfLastSlash = birthday.lastIndexOf("/");
// console.log(
//    `The last  slash in ${birthday} is found at the ${indexOfLastSlash} index.`
// );

const indexOfSecondToLastSlash = birthday.lastIndexOf("/", 3);
// console.log(
//    `The last  slash in ${birthday} is found at the ${indexOfSecondToLastSlash} index.`
// );

const indexOfDash = birthday.indexOf(`-`);
// console.log(`The dash is in ${birthday} is found at the ${indexOfDash} index.`);

const charToSearchFor = "-";

// if (indexOfDash > 0) {
//    console.log(`${birthday} has at least 1 dash in it.`);
// } else {
//    console.log(`${birthday} does not have at least 1 dash in it.`);
// }

// if (birthday.indexOf(charToSearchFor) > 0) {
//    console.log(`${birthday} has this character in it: ${charToSearchFor}`);
// } else {
//    console.log(
//       `${birthday} does not have this character in it: ${charToSearchFor}`
//    );
// }

const strToSearchFor = "Reina";
const indexOfStr = birthday.indexOf(strToSearchFor);
// console.log(
//    `The string of ${strToSearchFor} in ${birthday} is found at the ${indexOfDash} index.`
// );
// if (birthday.indexOf(strToSearchFor) === -1) {
//    console.log(
//       `${birthday} does not have this string in it: ${strToSearchFor}`
//    );
// } else {
//    console.log(`${birthday} has this string in it: ${strToSearchFor}`);
// }

//lastIndexOf as well returns -1 if something is not found.  It just searches left to right

// Slice

birthday = `8/27/1981`;

const delimiter = `/`;
const indexOfMOnthDayDelimiter = birthday.indexOf(delimiter);
const indexOfDayYearDelimiter = birthday.indexOf(delimiter, 3);
const indexOfDayYearDelimiterLast = birthday.lastIndexOf(delimiter);
const month = birthday.slice(0, indexOfMOnthDayDelimiter);
const day = birthday.slice(
   indexOfMOnthDayDelimiter + 1,
   indexOfDayYearDelimiter
);
const year = birthday.slice(indexOfDayYearDelimiter + 1);
console.log(`THe month in birthday is ${month}. `);
// console.log(` The day is birthday is ${day}`);
// console.log(` The year in ${birthday} is ${year}`);

// Includes always needs an if statment  looking for -1 meaning the search did not find the thing that is being looked for

yearToSearchFor = `1981`;
// if (birthday.includes(yearToSearchFor)) {
//    console.log(
//       `The birthday ${birthday} includes the string: ${yearToSearchFor}`
//    );
// } else {
//    console.log(
//       `The birthday ${birthday} does not include the string: ${yearToSearchFor}.`
//    );
// }
