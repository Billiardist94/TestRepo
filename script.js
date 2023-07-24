const userList = [
  {
    userId: 1,
    firstName: "firstname1",
    age: 25,
    eventDate: new Date(new Date(2023, 2, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2023, 2, 1).getTime())),
  },
  {
    userId: 2,
    firstName: "firstname2",
    age: 19,
    eventDate: new Date(new Date(2023, 2, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2023, 2, 1).getTime())),
  },
  {
    userId: 3,
    firstName: "firstname3",
    age: 21,
    eventDate: new Date(new Date(2023, 2, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2023, 2, 1).getTime())),
  },
];


userList.sort((a, b) => a.eventDate - b.eventDate);

console.log("userList: ", userList);
