// function truncateString(str, num) {
//    if (str.length >= num + 1) {
//       return str.slice(0, num) + "...";
//    } else return str;
// }

// const truncatedString = truncateString("A-", 1);
// // console.log(truncatedString);

// function findLongestWordLength(str) {
//    const words = str.split(" ");
//    let longestLength = 0;
//    for (let i = 0; i < words.length; i++) {
//       const word = words[i];
//       if (word.length > longestLength) {
//          longestLength = word.length;
//       }
//    }
//    return longestLength;
// }
// findLongestWordLength("The quick brown fox jumped over the lazy dog");

// function repeatStringNumTimes(str, num) {
//    if (num < 1) {
//       return "";
//    } else if (num === 1) {
//       return str;
//    } else {
//       return str + repeatStringNumTimes(str, num - 1);
//    }
// }
// repeatStringNumTimes("abc", 3);

// function mutation(arr) {
//    var second = arr[1].toLowerCase();
//    var first = arr[0].toLowerCase();
//    for (var i = 0; i < second.length; i++) {
//       if (first.indexOf(second[i]) < 0) return false;
//    }
//    return true;
// }

// function repeatStringNumTimes(str, num) {
//    let repeatedString = "";
//    {
//       for (let i = num; i >= num; i--) {
//          repeatedString = repeatedString.concat(str);
//       }
//    }
//    // console.log(repeatedString);
//    return repeatedString;
// }

// repeatStringNumTimes("abc", 3);
// // console.log(repeatStringNumTimes);

// // The global variable
// var watchList = [
//    {
//       Title: "Inception",
//       Year: "2010",
//       Rated: "PG-13",
//       Released: "16 Jul 2010",
//       Runtime: "148 min",
//       Genre: "Action, Adventure, Crime",
//       Director: "Christopher Nolan",
//       Writer: "Christopher Nolan",
//       Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
//       Plot:
//          "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       Language: "English, Japanese, French",
//       Country: "USA, UK",
//       Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
//       Poster:
//          "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//       Metascore: "74",
//       imdbRating: "8.8",
//       imdbVotes: "1,446,708",
//       imdbID: "tt1375666",
//       Type: "movie",
//       Response: "True",
//    },
//    {
//       Title: "Interstellar",
//       Year: "2014",
//       Rated: "PG-13",
//       Released: "07 Nov 2014",
//       Runtime: "169 min",
//       Genre: "Adventure, Drama, Sci-Fi",
//       Director: "Christopher Nolan",
//       Writer: "Jonathan Nolan, Christopher Nolan",
//       Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       Plot:
//          "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       Language: "English",
//       Country: "USA, UK",
//       Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
//       Poster:
//          "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//       Metascore: "74",
//       imdbRating: "8.6",
//       imdbVotes: "910,366",
//       imdbID: "tt0816692",
//       Type: "movie",
//       Response: "True",
//    },
//    {
//       Title: "The Dark Knight",
//       Year: "2008",
//       Rated: "PG-13",
//       Released: "18 Jul 2008",
//       Runtime: "152 min",
//       Genre: "Action, Adventure, Crime",
//       Director: "Christopher Nolan",
//       Writer:
//          "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       Plot:
//          "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       Language: "English, Mandarin",
//       Country: "USA, UK",
//       Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
//       Poster:
//          "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//       Metascore: "82",
//       imdbRating: "9.0",
//       imdbVotes: "1,652,832",
//       imdbID: "tt0468569",
//       Type: "movie",
//       Response: "True",
//    },
//    {
//       Title: "Batman Begins",
//       Year: "2005",
//       Rated: "PG-13",
//       Released: "15 Jun 2005",
//       Runtime: "140 min",
//       Genre: "Action, Adventure",
//       Director: "Christopher Nolan",
//       Writer:
//          "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       Plot:
//          "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       Language: "English, Urdu, Mandarin",
//       Country: "USA, UK",
//       Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//       Poster:
//          "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//       Metascore: "70",
//       imdbRating: "8.3",
//       imdbVotes: "972,584",
//       imdbID: "tt0372784",
//       Type: "movie",
//       Response: "True",
//    },
//    {
//       Title: "Avatar",
//       Year: "2009",
//       Rated: "PG-13",
//       Released: "18 Dec 2009",
//       Runtime: "162 min",
//       Genre: "Action, Adventure, Fantasy",
//       Director: "James Cameron",
//       Writer: "James Cameron",
//       Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       Plot:
//          "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       Language: "English, Spanish",
//       Country: "USA, UK",
//       Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
//       Poster:
//          "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//       Metascore: "83",
//       imdbRating: "7.9",
//       imdbVotes: "876,575",
//       imdbID: "tt0499549",
//       Type: "movie",
//       Response: "True",
//    },
// ];

// // Only change code below this line

// const ratings = watchList.map((item) => ({
//    title: item["Title"],
//    rating: item["imdbRating"],
// }));
// // Only change code above this line

// console.log(JSON.stringify(ratings));

// function convertHTML(str) {
//    const htmlEntities = {
//       "&": "&amp;",
//       "<": "&lt;",
//       ">": "&gt;",
//       '"': "&quot;",
//       "'": "&apos;",
//    };
//    return str
//       .split("")
//       .map((entity) => htmlEntities[entity] || entity)
//       .join("");
// }
// convertHTML("Dolce & Gabbana");

// function bouncer(arr) {
//    return arr.filter(Boolean);
// }

// bouncer([7, "ate", "", false, 9]);

// const fbUsers = users
//    .map((user) => {
//       // name * fb name only
//       const newUser = {
//          name: user.name,
//          fbName: getFbNameUsingFP(user),
//       };
//       return newUser;
//    })
//    .filter((user) => {
//       return user.fbName !== "";
//    });

// console.log(fbUsers);

// const squareList = (arr) => {
//    // Only change code below this line
//    const positiveNumbers = arr
//       .filter((number) => {
//          if (Number.isInteger(number)) {
//             return number;
//          }
//       })
//       .filter((number) => {
//          return number >= 0;
//       })
//       .map((number) => {
//          return Math.pow(number, 2); //https://stackoverflow.com/questions/19645186/square-each-number-in-an-array-in-javascript
//       });
//    console.log(positiveNumbers);

//    return (arr = positiveNumbers);
//    // Only change code above this line
// };

// const squareList = (arr) => {
//    // Only change code below this line
//    const positiveNumbers = arr
//       .filter((number) => {
//          if (Number.isInteger(number) && number >= 0) {
//             return number;
//          }
//       })
//       .map((number) => {
//          return Math.pow(number, 2);
//       });
//    console.log(positiveNumbers);
//    return (arr = positiveNumbers);
//    // Only change code above this line
// };
// const squaredIntegers = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);
// console.log(squaredIntegers);

// const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// console.log(squaredIntegers);

// const isEveryUserOnFb = users.every((user) => {
//    const siteNames = user.socialProfiles.map((profile) => {
//       return profile.site;
//    });
//    return siteNames.includes("facebook");
// });

// console.log("Is every user on fb?", isEveryUserOnFb);

function checkPositive(arr) {
   // Only change code below this line
   // const positiveNumbers = arr.every((currentValue) => {
   return arr.every((currentValue) => {
      return currentValue > 0;
   });
   // });
   // return positiveNumbers > 0;

   // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);

function checkPositive(arr) {
   // Only change code below this line
   return arr.some((currentValue) => {
      return currentValue > 0;
   });

   // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);

// let titleCaseArry = [];

function titleCase(str) {
   const titleCaseArry = str.toLowerCase.split(" ");
   titleCaseArry.map((word) => {
      const capWords = word.charAt(0).toUpperCase() + word.slice(1);
      // const finalSentence = capWords.join("");
      // console.log(capWords);
      return capWords.word;
   });
   // console.log(titleCaseArry);
   // return console.log((str = titleCaseArry.join(" "))); //(str = capWords.join(""));
   // return console.log((str = capWords.join("")));
}
// console.log(str);
// titleCase("I'm a little tea pot");

function titleCase(str) {
   const titleCaseArry = str.toLowerCase().split(" ");
   const capWords = titleCaseArry.map((word) => {
      return word[0].toUpperCase() + word.slice(1);
   });

   return capWords.join(" ");
}

titleCase("I'm a little tea pot");
