//Forof Loop

// const arr = [1, 2, 34, 5];
// for (const chacha420 of arr) {
//   console.log(chacha420);
// }

// const array = "Glenn Maxx";
// for (const chacha421 of array) {
//   console.log(chacha421);
// }

//For in Loop

// const myobj = {
//       obj1 : "Rahul",
//       cpp: "chacha"
// }

// for(const chacha422 in myobj){
//        console.log(`${chacha422} shortcut is for ${myobj[chacha422]}`);
// }

// For each Loop

const arr1 = ["Js", "C++"];

arr2 = arr1.forEach(function (elements) {
  console.log(elements);
});

//Using Arrow Functions
arr1.forEach((item) => {
  console.log(item);
});

arr1.forEach((item, index, arr) => {
  console.log(item, index, arr);
});


const mycoding = [{
    langname: "BhaiLang",
    langfullname : "chapla420"
},

{
    langname:"c",
    langfullname : "chaluji"
}
]

mycoding.forEach((item)=>{
    console.log(item.langname);
})

