// FIRST CODE OF JAVASCRIPT// INTRODUCTION 
// console.log("HELLO WORLD FROM SHIKHA")
// // VARIABLE//
// let a = "shikha"
// console.log(a)
// // c = 7
// // console.log(c)
// let studentname  = "john"
// console.log(studentname)
// // var: we use var for old codes for now dont need to use.//
// var p = 45
// a = "p"
// console.log(p)
// // let ; when we write fresh code that time we will use let .//
// let b = "reon"
// console.log(b)
// let d = undefined
// let e = null
// // const; those variable which value is unchangable where we will use const .//
// const author = "shikha"
// console.log(author)
// // primitive datatype in Javascript//   nn bb ss u
// let s = null
// let t = 123  //number//
// let u = true //boolean//
// let v = BigInt("547") + BigInt("3")  //bigint//
// let w = "shikha"                       //string//
// let x = Symbol("it is a nice symbol")    //symbol//
// let y = undefined
// console.log(s, t, u, v, w, x, y)
// // non-primitive datatype in Javascript//
// const items = {
//     "shikha" : true,
//     "sona" : false,
//     "simran" : 67,
//     "kajal": undefined
// }
// console.log(items)
// console.log(items["sona"])
// console.log(items["shikha"])
// console.log(items["simran"])
// console.log(items["kajal"])
// // practice set//
// // ADD A STRING AND NUMBER //
// let l = "shikha"
// let q = 4
// console.log(l+q)
// // find variables datatype //
// let o = 123
// let g = "hyujjsx"
// console.log(typeof o)
// console.log(typeof g)
// // make 3 word - meanings dictionary //
// const dict = {
//     anxiety : "stress",
//     leucrative : "beneficial",
//    yakka :"workhard",
// }
// console.log(dict)
// console.log(dict.yakka)
// // operators and expresssions//
// let k = 8
// let m = 2
// console.log("k + m =",k + m)
// console.log("k - m =",k - m)
// console.log("k * m =",k * m)
// console.log("k / m =",k / m)
// console.log("k % m =",k % m)
// console.log("k ** m =",k ** m)
// // logical operator//
// console.log(k>m && k==18)
// console.log(k<m || k==8)
// console.log(k>m != k==28)
// // conditional Expressions//  
// let n =prompt("hey whats your age?");
// n= Number.parseInt(n)//converting the string to the number.
// if(n<0){
//     console.log("this is an invalid age");
// }
// else if(n<9){
//     console.log("you are a kid");
// }
// else if (a<18 && a>=9){
//     console.log("you are a kid you can even think of driving after 18");
// }
// else {
//     console.log("you can drive");
// }
// console.log("yes! you can",(n<18? "not drive":"drive"))
// // practice set chapter 2//
// // qno.1//
// let age = prompt("what is your age?")
// if (age>10 && age<20){
// console.log("your age lies between 10 to 20")
// }
// else{
//     console.log("your age doesn't lies between 10 to 20")
// }
// // qno.2 // using switch method.
// let AGE= prompt("what's your age?")
// switch (AGE){
//     case '12':
//         console.log("your Age is 12")
//         break
//     case '13':
//         console.log("your Age is 13")
//         break
//     case '14':
//         console.log("your Age is 14")
//         break
//     case '15':
//         console.log("your Age is 15")
//         break
//     default:
//         console.log("you Age is not special")
// }
// // ternary operator//
// let num = 19
// let c = num>18? "you can apply for voter id card" :"you can not apply for voter id card"
// console.log(c)
// loops// 
// for loops//
// let sum = 0 
// let n = prompt("enter the value of n")
// n= Number.parseInt(n)
// for (let i=0; i<n; i++){
//     sum+= (i+1)
// }
// console.log("sum of first " + n +  "  natural number is " + sum)
// for in loops//
// let obj = {
//     "shikha":99,
//     "sona":98,
//     "rohn":76,
//     "rim":56,
//     "john":47
// }
// for (let a in obj){
//     console.log("marks of " + a + " are "+ obj[a])
// }
// // for of loops//
// for (let b of "shikha"){
//     console.log(b)
// }
// // while loops//
// let a= prompt("Enter you value of n")
// a= Number.parseInt(a)
// let i = 0;
// while (i<a){
//     console.log(i)
//     i++;
// }
// // do while loops//
// let n= prompt("Enter you value of n")
// n = Number.parseInt(n)
// let ite= 0;
// do{
//     console.log(ite)
//     ite++; 
//  } while (ite<n)
// //  function// arrow function 
// const sum = (p, q)=>{
//     return p + q
// }
// console.log(sum(15,4))
// // arrow function//
// const hello =()=>{
//     console.log("hey how are you . i m fine")
//     return "hii"
// }
// let v = hello();
// console.log(v)
// // practice set //
// // problem No.1//
// let marks = {
//     shikha:90,
//     sona:95,
//     simran:56,
//     john:76
// }
// for (let i=0; i<Object.keys(marks).length;i++){
//     console.log("the marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
// }
// // for in loops// 
// for (let key in marks){
//     console.log("The marks of " + key + " are " + marks[key])
// }
// // problem No.3//
// let cn = 5
// let k 
// while (k!=cn){
//     k= prompt("enter a number")
//     console.log('try again')
// }
// console.log("you have entered a correct number")
// // problem No.3//
// const mean = (a, b, c, d)=>{
//     return (a+b+c+d)/4
// }
// console.log(mean(15,4,6,2))
// // strings//
// let name = "shikha"
// console.log(name.length)
// console.log(name[0])
// console.log(name[1])
// console.log(name[2])
// console.log(name[3])
// console.log(name[4])
// console.log(name[5])
// //strings methods
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.slice(1,4))
// console.log( name.replace("shikha", "sona"))
// let friend = "john"
// console.log(name.concat("  is a friend of ", friend))
// let friend2 = "       reon"
// console.log(friend2.trim())
// // template literals//
// let girl1= "simran"
// let girl2 = "shikha"
// let sentence = `${girl2} is a friend of ${girl1}`
// console.log(sentence)
// // escape sequence character//
// let fruit = "bana\'na"
// console.log(fruit)
// // practice set//
// // qno.1//
// let str = "har\" "
// console.log(str.length)
// // qno.2
// const sent = "the quick brown fox jumps over the lazy dog.";
// const word = "fox2";
// console.log(sent.includes(word))
// console.log(`the word "${word}" ${sent.includes(word)? 'is' : 'is not'}in the sent`);
// // qno.3//
// let str2 = "please give rs 1000"
// let amount = (str2.slice(15))
// console.log(amount)
// // qno.4//
// let fr = "deepika"
// fr[3] = "r"
// console.log(fr)
// // arrays//
// let class_marks_10 = [91, 82, 73, 64, false, " Not present","null"]
// console.log("The length of class_marks_10 is",class_marks_10.length )
// console.log(class_marks_10[0]);
// console.log(class_marks_10[1])
// console.log(class_marks_10[2])
// console.log(class_marks_10[3])
// console.log(class_marks_10[4])
// console.log(class_marks_10[5])
// console.log(class_marks_10[6])
// class_marks_10[7] = 55; //adding a new value to the Array//
// class_marks_10[2] = 42; //changing the new value of an arrays//
// console.log(class_marks_10)
// // arrays method //
// // string method//
// let num = [1,4,6,798,90,"ok"]
// let s = num.toString()
// console.log(s)
// // join method//
// let c = num.join()
// console.log(c)
// // pop method//
// let r = num.pop()
// console.log(r)
// // push method//
// let t = num.push(50)
// console.log(t)
// // shift method//
// let u = num.shift()
// console.log(u)
// // unshift  method//
// let o= num.unshift("start")
// console.log(o)
// // delete operator//
// delete num [2]
// // concat  method//
// let num1 = [23,24,25,26,72]
// let num2 = [72,89,99,110,23]
// let newarray = num1.concat(num2)
// console.log(newarray)
// // sort method//
// num2.sort()
// console.log(num2)
// // join method//
// num.reverse()
// // splice method//
// num.splice(1, 2, 77, 88, 99)
// console.log(num)
// // slice method//
// let newnum = num.slice(2,6)
// console.log(newnum)
// // using loops with arrays//
// // for each loops//
// let val = [3,45,67,89,0]
// val.forEach((Element)=>{
//     console.log(Element * Element)
// })
// // for loops//
// for (let i=0; i<val.length; i++){
//     console.log(val[i])
// }
// // Array From
// let name1 = "shikha"
// let arr = Array.from(name1)
// console.log(arr)
// // for of
// for (let i of num){
//     console.log(i)
// }
// // for in
// for (let item in num){
//     console.log(item)
// }
// // map method
// qno.3
// let Array = [1,10,30,57,89,50]
// let n = Array.filter((x)=>{
//     return x%10 == 0
// })   
// console.log(n)
// qno.4
// let Array = [1,10,30,57,89,50]
// let n = Array.map((x)=>{
//     return x * x
// })   
// console.log(n)
// qno.5
// let Array = [1,2,3,4,5,2]
// let n = Array.reduce((x1, x2)=>{
//     return x1 * x2
// })   
// console.log(n)
// // console object method
// console.log("hello world")
// console.assert("hey")
// console.warn("this is warn")
// obj = {d:1 , e:2, f:3}
// console.table(obj)
// console.info("info")
// console.error("this is an error")
// // console.clear() 
// // alert,prompt & confirm
// alert ["enter the value of a!"]
// let d = prompt("enter a here:")
// d = Number.parseInt(d)
// alert["you entered a type of" + (typeof d)]
// let write = confirm("do you want to write it to the page?")
// if (write){
//     document.write(d)
// }
// else{
//     document.write("please allow me to write")
// }
// BOM ;BROWSER OBJECT MODEL
// DOM Document OBJECT MODEL
// let color = prompt("enter the background color name")
//  document.body.style.background = color
//  practice Set
//  qno.1
// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"
// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
// document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"
// Array.from(document.getElementsByTagName("li")).forEach((Element)=>{
//     Element.style.background = "pink"
// })
// let a= document.getElementsByTagName('div')[0]
// insertion method
// a.innerHTML = a.innerHTML + '<h1> Hello World!<h1>';
// let div = document.createElement('div');
// div.innerHTML = '<h1> Hello World!<h1>';
// a.append(div);
// a.prepend(div);
// a.before(div);
// a.after(div);
// a.replaceWith(div);
// insertAdjacentHTML
// first.insertAdjacentHTML('beforebegin','<div class="test">beforebegin</div>');
// first.insertAdjacentHTML('beforeend','<div class="test">beforeend</div>');
// first.insertAdjacentHTML('afterbegin','<div class="test">afterbegin</div>');
// first.insertAdjacentHTML('afterend','<div class="test">afterend</div>');

// setInterval & setTimeout
// alert("hello")
// setTimeout(function(){
//     alert("i m inside the timeout")
// },1000)

// setInterval(function(){ //set interval show our alert on browser again and again //
//     alert("i m inside the setinterval")
// },5000)
// events
// first.onlick = function(){
//     alert("yes")
// };
// let a = document.getElementsByClassName("container")[0]
// a.onclick =()=>{
// let b = document.getElementsByClassName("container")[0] 
// b.innerHTML = "hello world!"  
// }
// document.getElementById("google").addEventListener("click", function(){
//     window.location = "htttps://www.google.com";
//     window.focus();
// })
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");
let turn0 = true;//playerx, player0
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const ResetGame = ()=>{
    turn0 = true;
    unabledboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if (turn0){//player0
            box.innerText = "0";
            turn0 = false;
        } else{//playerx
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disabledboxes =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const unabledboxes =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = " ";
    }
}
const showWinner = (winner)=>{
    msg.innerText= `congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
}
const checkWinner= ()=>{
    for( let pattern of winPatterns){
            let pos1value = boxes[pattern[0]].innerText;
            let pos2value = boxes[pattern[1]].innerText; 
            let pos3value = boxes[pattern[2]].innerText;
            if(pos1value !="" &&pos2value !=""&&pos3value !="" ){
                if(pos1value === pos2value &&pos2value === pos3value){
                    showWinner(pos1value);
                }
            }
    }
};
newGameBtn.addEventListener("click",ResetGame);
resetBtn.addEventListener("click",ResetGame);