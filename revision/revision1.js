// //Join MEthod
// let myarray = ["Fire", "Air", "Water"];
// console.log(myarray.join());
// console.log(myarray.join(""));
// console.log(myarray.join(``));
// console.log(myarray.join("-"));
// console.log(myarray.join(`-`));
// console.log(typeof myarray);

// // Flat Method
// const arr1 = [1, 2, 3, [4, 5, 6, [7, 8, 9]], [10, 11, 12]];
// const arr2 = arr1.flat(2);
// console.log(arr2);

// //String to convert the array
// let array = ["Bhavik", "pratham"];
// console.log(Array.isArray("Pratham", "Bhavik"));
// console.log(Array.isArray("Bhavik"));
// console.log(Array.from("Bhavik"));

// console.log(Array.from({ name: "Bhavik" }));

// //Arrayof :- To merge all string and then converted to array
// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1, score2, score3));

// // Object

// const myobj = {
//   name: " Bhavik",
//   tata: "Ratan Tata",
//   company: "Tata Motors",
//   employeename: "Chalu Pandey",
// };

// //Accessing the elemnts of objects
// console.log(myobj.company);

// // Making the functions insise the object and accessing it.

// const myobj1 = {
//   student: function student() {
//     regno = 124;
//     Name = ["Bhavik", "Pratham", "Anand"];
//     Age = ["18", "19", "21"];
//   },

//   Professor: function () {
//     Name = "pratham";
//     (age = "29"), "34";
//   },
// };

// // console.log(myobj1.student(Name));

// // Singleton Object
// const x_user = {};
// x_user.name = "Bhavik";
// x_user.id = "Bhavik34";
// x_user.number = "9874521145";

// console.log(x_user.name);

const insta = {
  id: "maxx892",
  instausers: {
    insta1: {
      Name: "gaurav",
      lastname: "Choudhary",
    },
    insta2: {
      Name: "hitesh",
      lastname: "Choudhary",
    },
  },
};


// console.log(Object.keys(insta))
// console.log(Object.values(insta))
// console.log(Object.entries(insta))

// console.log(insta.instausers.insta1.Name);
// console.log(insta.instausers.insta2.lastname);

// Object assign

// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 1: "c", 2: "d" };
// const obj4 = { 1: "x", 2: "y" };

// const obj3 = Object.assign(obj4);
// const obj5 = { ...obj1, ...obj2 };
// console.log(obj3);
// console.log(obj5);

// //Objects in array
// const array1 = [
//   {
//     id: 1,
//     name: "chaluji",
//   },
//   {
//     id: 2,
//     name: "two",
//   },
//   {
//     id: 3,
//     name: "three",
//   },
// ];

// one = array1[1].id;
// two = array1[2].name;
// console.log(one);
// console.log(two);
