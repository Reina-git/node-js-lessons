console.log("every and some");

const users = [
   {
      name: "Mike",
      isActive: true,
      createdAt: 1601234512420,
      socialProfiles: [
         {
            site: "twitter",
            username: "mzetlow",
         },
         {
            site: "facebook",
            username: "fbmikezetlow",
            profilePhoto: {
               sm: "small.jpg",
               lg: "large.jpg",
            },
         },
      ],
   },
   {
      name: "John",
      isActive: true,
      createdAt: 1601234512430,
      socialProfiles: [
         {
            site: "facebook",
            username: "fbjsmith",
            profilePhoto: {
               sm: "small.jpg",
               lg: "large.jpg",
            },
         },
      ],
   },
   {
      name: "Michelle",
      isActive: false,
      createdAt: 1601234512450,
      socialProfiles: [
         {
            site: "twitter",
            username: "michelledoe",
         },
      ],
   },
];
// some is looking for the first true statement and it will return true
// every is looking of the first false statement and it will return false
const isEveryUserOnFb = users.every((user) => {
   const siteNames = user.socialProfiles.map((profile) => {
      return profile.site;
   });
   return siteNames.includes("facebook");
});

console.log("Is every user on fb?", isEveryUserOnFb);

const hasGithubUsers = users.some((user) => {
   // go through all the social profiles
   const siteNames = user.socialProfiles.map((profile) => {
      return profile.site;
   });

   return siteNames.includes("github");
});

console.log("Do we have any github users? ", hasGithubUsers);
