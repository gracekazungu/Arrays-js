//1. Find the last element of the following arrays.
// arr1 = [3,7,34,90,12]
let arr1=[3,7,34,90,12];
console.log(arr1.slice(-1))

// arr2 = [true, "green", "where",12,56]
let arr2=[true,"green","where",12,56];
console.log(arr2.slice(-1));

//2. Write a JS program that will join the following array elements into a string
// myPets = ["Cow", "Bird", "Snake", "Dog"];
let myPets=["Cow","Bird","Snake","Dog"];
console.log(myPets.toString());


// Write a JS script to sort the following array items
// var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var arr3=[-5,9,5,3,2,-3,6,8,4,1];
console.log(arr3.sort())

// Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
// var arr = ["apple", "mango", "apple",
//             "orange", "mango", "mango"];
var arr=["apple","mango","apple","orange","mango","mango"];

function rDuplicates(arr) {
    return arr.filter((item, 
        index) => arr.indexOf(item) === index);
}
  console.log(rDuplicates(arr));

//   function rDuplicates(arr) {
//     return [...new Set(arr)];
// }
  // console.log(rDuplicates(arr));
  function Duplicates(arr) {
    return arr.filter((item, 
        index) => arr.indexOf(item) != index);
}
  console.log(Duplicates(arr));




// Write a JS script to search for the following word in the array.
// "way"
// If the word is present, console it else console "the search word was not found"
// let arr5 = ["the", "way", "x", 4];
//  let t=(arr5.indexOf("way",String))
// if (t){
//     console.log(t)
// }else{
// console.log("the search word was not found")
// }
let arr5=["the","way","x",4];
let d=("way")
if (arr5.includes(d)){
  console.log(d)
}else{
  console.log("the search word is not found")
}


// Write a JS script to sort the following string
// let word = "sevink"
let word = "sevink"
let g=(word.split(""));
console.log(g.sort().join());



