// // // arithmatic operation 
// // let a = 5
// // let b = 4
// // console.log("a  = ", a , " & b =" ,b)
// // console.log("a + b = ", a + b)
// // console.log("a - b = ", a - b)
// // console.log("a * b = ", a * b)
// // console.log("a / b = ", a / b)
// // console.log("a % b = ", a % b)
// // console.log("a ** b = ", a ** b)
// // //unary operator
// // let a = 5
// // let b = 4
// // console.log("a  = ", a , " & b =" ,b)
// // console.log("a-- =",a--)
// // console.log("a =",a)
// // // assignment operator
// // let a = 5
// // let b = 4
// // a -= 3
// // console.log("a =", a)
// // a += 3
// // console.log("a =", a)
// // a *= 3
// // console.log("a =", a)
// // a /= 3
// // console.log("a =", a)
// // a %= 3
// // console.log("a =", a)
// // // comparison operator
// // // logical operator
// // let a = 6
// // let b = 5
// // let cond1 = a > b
// // let cond2 = a === 6 
// // console.log("cond1 && cond2 =", cond1 && cond2)
// // // conditional statement
// // let age = 25
// // if (age >= 18) {
// //     console.log("you can vote")
// // }
// // if (age < 18){
// //     console.log("you cannot vote")
// // }
// // let mode = "dark"
// // let color 
// // if (mode === "dark") {
// //     color = "black" 
// // }
// // else{
// //     color = "white"
// // }
// // console.log(color)
// // // odd and even
// // let num = 10
// // if (num%2===0) {
// //     console.log(num, "is even")
// // }
// // else{
// //     console.log(num,"is odd")
// // }
// // practice question
// // let num = prompt("enter a number")
// // if (num % 5===0){
// //     console.log(num, "is a multiple of 5")
// // }else{
// //     console.log(num, "is not a multiple of 5")
// // }
// // // practice question 2
// // let score = 97
// // let grade
// // if (score >= 90 && score <= 100){
// //     grade = "A"
// // }else if (score >= 70 && score <= 89) {
// //     grade = "B"
// // }else if (score>=60 && score<=69){
// //     grade = "C"
// // }else if (score>=50 && score<=59){
// //     grade = "D"
// // }else if (score>=0 && score<=49){
// //     grade = "F"
// // }
// // console.log("according to your scores, your grade was:", grade)
// // print 1 to 5
// for (let count =1; count<=5;count++){
//     console.log("shikha")
// }
// // calculate sum of 1 to 5
// let sum = 0
// for (let i=1; i<=5; i++){
//    sum = sum + i
// }
// console.log("sum =",sum)
// // using while loop
// let j = 1
// while(j <= 10){
//     console.log("shikha")
//     j++
// }
// let i = 1
// do {
//     console.log("i =", i)
//     i++
// }while(i<=5)
// // for-of loop 
// let str = "apnacollege"
// let size =0
// for (let i of str){
//     console.log("i =",i)
//     size++
// }
// console.log("string size =", size)
// // for-in loop
// let student={
//     name :"shikha",
//     age:18,
//     cgpa:7.5,
//     ispass:true,
// }
// for (let key in student){
//     console.log("key=", key,"value=",student[key])
// }
// // practice question 1
// num =0
// for (let num=0;num<=100;num++ ){
//     if(num%2===0)
//     console.log("num=",num)
// }
// // practice qs2
// let gamenum = 2
// let usernum = prompt("guess the game number:")
// while (usernum != gamenum){
//     usernum = prompt("you entered wrong number.guess again:")
// }
// console.log("congratulations you entered right number:")
// // template literals
// // let string = "apna college"
// //     console.log(string.length)
//     // let str= str.toLowerCase()
//     // console.log(str)
// // let newstr= str.toUpperCase()
// // console.log(newstr)
// // let  sr = "     apna  college   js      "
// // console .log(sr)
// let string = "hello"
// console.log(string.slice(0))
// console.log(string.slice(2))
// console.log(string.slice())
// let str1="shikha"
// let str2="jha"
// let result = str1.concat(str2)
// console.log(result)
// let s = "hello"
// console.log(s.replace("h","m"))
// let st = "hello"
// console.log(st.charAt(3))
// let fullName = prompt("enter your name:")
// let username = "@" + fullName + fullName.length
// console.log(username)
// // arrays
// let marks = [97,85,67,75,54,43,39]
// let Sum = 0
// for (let val of  marks ){
//     Sum+=val
// }
// let avr = Sum / marks.length
// console.log(`average marks of the class =${avr}`)
// // console.log(marks)
// // console.log(marks.length)
// // for loop 
// let cities = ["pune","delhi","mumbai","hydrabad","gurgaon","lucknow"]
// for (let city of cities){
//     console.log(city.toUpperCase)
// }
// // for-of loop 
// let items = [25, 645, 300, 900, 50]
// for (let i = 0; i< items.length; i++){
//     let offer = items[i]/10
//     items[i] -= offer
// }
// console.log(items)
// let fooditems = ["potato","apple","tomato","onion"]
// // fooditems.push("chips","burger","paneer")
// console.log(fooditems)
// let deleteditem = fooditems.pop()
// console.log(fooditems)
// console.log("deleted",deleteditem)
// console.log(fooditems.toString())
// // concat method
// let marvalHeroes=["thor","spiderman","ironman"]
// // marvalHeroes.unshift("antman")
// let val =  marvalHeroes.shift()
// console.log("deleted",val)
// let dcHeroes= ["batman","superman"]
// let heroes = marvalHeroes.concat(dcHeroes)
// console.log(heroes)
// // slice method
// let Heroes=["thor","spiderman","ironman"]
// console.log(Heroes)
// console.log(Heroes.slice(1))
// // splice
// let array = [1,2,3,4,5,6,7,8]
// console.log(array)
// array.splice(3,1,10)

// let companies =["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
// // companies.shift()
// // companies.splice(2,1,"OLA")
// companies.push("Amazon")
// functions & methods
// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if ( 
//          char === "a"||
//          char === "e"||
//          char === "i"||
//          char === "o"||
//          char === "u" 
//         ) {
//             count++;
//         }
//     }

// console.log(count);
// function method
const countVow = (str)=>{
    let count = 0;
    for (const char of str) {
        if ( 
         char === "a"||
         char === "e"||
         char === "i"||
         char === "o"||
         char === "u" 
        ) {
            count++;
        }
    }

return count;
}
// practice qs
// let nums = [1,2,3,4,5,67,68,69,] 
// nums .forEach((num) => {
//   console.log(num*num)  
// });
// call-back function
let nums = [62,57,74]
let calcsqr = ((num) => {
    console.log(num*num)  
  }); 
  nums .forEach(calcsqr)
// map method
let number = [13,12,11,10,9]
number.map((val) =>{
console.log(val)
} )
let calcsquare = ((num) => {
    console.log(number*number)  
  }); 
// filter method
let arr = [1,2,3,4,5,6,7,8]
let evenArr = arr.filter((val)=>{
   return val %2 === 0 
})
console.log(evenArr)
// reduce method
let array = [1,2,3,4,5]
const output = arr.reduce((res,cur)=>{
    return res + cur
})
console.log(output)
// practice questions 
let n = prompt("enter a number :")
let ar = []
for (let i=1; i<=n; i++){
    ar[i-1] =i;
}
console.log(ar)
let sum = ar.reduce((res,cur)=>{
    return res + cur
})
console.log("sum=",sum)
let factorial = ar.reduce((res,cur)=>{
    return res * cur
})
console.log("factorial=",factorial)