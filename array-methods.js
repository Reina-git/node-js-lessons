// arrays === lists

const days = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
   "Christmas",
   "New Years",
];

const firstDay = days[0];
// console.log(`The first day of this array is ${firstDay}`);

const daysLenght = days.length;
const lastDay = days[daysLenght - 1];

// console.log(`The last day of this array is ${lastDay}`);

const daysArrLength = days.length;
// console.log(`The length of this array of days is ${daysArrLength}`);

const holidays = [
   "New Year's Day",
   "New Year's Eve",
   "Memorial Day",
   "Independence Day",
   "Labor Day",
   "Columbus Day",
   "Thanksgiving",
   "Christmas",
];

const newHolidaysFromHR = [
   ["Veterans Day", 2020, "Megan"],
   ["Washingtons Birthday", 2020, "Megan"],
   ["Another Holiday", 2020, "Megan"],
];

const firstHoliday = holidays[0];
// console.log(`The first day of this array is ${firstHoliday}`);

const favoriteHoliday = "Independence Day";
const indexOfIndependeday = holidays.indexOf(favoriteHoliday);
// console.log(
//    `${favoriteHoliday} is found at the ${indexOfIndependeday} of the holidays arryay.`
// );

const specificHoliday = "Reina's Birthday";

// if (holidays.indexOf(specificHoliday) === -1) {
//    console.log(`No, ${specificHoliday} is not a holiday`);
// } else {
//    console.log(
//       `Yes, ${specificHoliday} is a holiday. It was found at the ${holidays.indexOf(
//          specificHoliday
//       )} index in the list of holidays.`
//    );
// }

if (holidays.includes(specificHoliday)) {
   //    console.log(`No, ${specificHoliday} is not a holiday`);
} else {
   //    console.log(
   //       `Yes, ${specificHoliday} is a holiday. It was found at the ${holidays.indexOf(
   //          specificHoliday
   //       )} index in the list of holidays.`
   //    );
}

const replacableHoliday = "Columbus Day";
const indexOfReplacableHoliday = holidays.indexOf(replacableHoliday);
// console.log(
//    `We are going to replace ${replacableHoliday} at the ${indexOfIndependeday} index of the holiday list.`
// );
//
const newHolidays = [...holidays]; //make an exact copy of holidays. .. means spread out the old array in the new one
// const newHolidays = Array.from(holidays);
newHolidays[indexOfReplacableHoliday] = specificHoliday;

// console.log(`Here's a list of our new holidays:\n `, newHolidays);

// console.log(`Here's a list of our new holidays from HR:\n `, newHolidaysFromHR);

// const allHolidays = newHolidays.concat(newHolidaysFromHR);
// console.log(`Here's a list of ALL holidays:\n`, allHolidays);
const allHolidays = [...newHolidays, ...newHolidaysFromHR];
const allFlatHolidays = allHolidays.flat();
// console.log(`Here's a list of ALL holidays but flat:\n`, allFlatHolidays);

const allUniqHolidays = [...new Set(allFlatHolidays)];
// console.log(`Here's a list of ALL UNIQUE holidays:\n`, allUniqHolidays);

const firstHolidays = allUniqHolidays.slice(0, allUniqHolidays.indexOf(2020));
// console.log(`Here's a list of the first holidays:\n`, firstHolidays);
const secondHolidays = allUniqHolidays.slice(
   allUniqHolidays.indexOf("Washingtons Birthday")
);
console.log(`Here's a list of the second holidays:\n`, secondHolidays);

const allTrimmedHolidays = firstHolidays.concat(secondHolidays);
console.log(
   `At long last, here is the final list of holidays:\n`,
   allTrimmedHolidays
);
