
// const div = document.querySelector('div')
// for (let i = 1; i <= 10; i++) {
//   div.innerHTML += `<br/> sub of ${i} <br/> <br/> `;
//   for (let j = 1; j <= 10; j++)
//     for (let k = 1; k <= 10; k++)
//       div.innerHTML += (`${i} + ${j} + ${k} = ${i + j + k} <br/> `);
// }

// const p = document.querySelector('p')
// let n = 0;
// while (n <= 10) {
//   let m = 0;
//   while (m <= 10) {
//     p.innerHTML += (`${n} * ${m} = ${n * m} <br/>`);
//     m++;
//   }
//   n++;
// }

// for (let o = 0; o <= 12; o++) {
//   console.log(o);
// }

// const fruits = ["apple", "mango", "peach", "pineapple", "grapes"]
// for (let i = 0; i < fruits.length; i++) {
//   //console.log(fruits[i]);
//   if (fruits[i] === "mango") {
//     console.log("nashpati");
//   }
//   else {
//     console.log(fruits[i]);
//   }
// }


// const h3 = document.querySelector('h3')
// for (y = -1; y <= -1; y++) {
//   for (q = 1; q <= 10; q++)
//     for (r = 1; r <= 10; r++)
//       for (s = 0; s <= 10; s++)
//         h3.innerHTML += (`${y} * ${q} * ${r} * ${s} = ${y * q * r * s} <br/>`);
// }


// let t = 0
// while (t <= 10) {
//   let u = 1
//   while (u <= 10) {
//     let v = 2
//     while (v <= 10) {
//       console.log(`${t} * ${u} * ${v} = ${t * u * v}`);
//       v++
//     }
//     u++
//   }
//   t++
// }



// if('karachi' === 'Karachi'){
//     console.log('condition ture');
// }
// else{
//     console.log('condition false');
// }
// let name;
// let Name;



// const fruit = prompt('enter your fruit').toLowerCase();
// // const fruit = prompt('enter your fruit').toUpperCase();
// const fruits = ['banana', 'apple', 'orange', 'mosambi', 'papita', 'nashpati'];
// for (let i = 0; i < fruits.length; i++) {
//     if(fruits[i] === fruit){
//         console.log(`${fruit} is available`);
//         break
//     }
//     else{
//         console.log('orange is not available');
//     }
// }


// console.log(myName.toUpperCase() ,myName.toLowerCase());
// console.log(myName.slice(0 , 8))
// console.log(myName[6]);




// // let myName = 'MuHAmmAd ABduLlah KhAn';
// let myName = prompt('enter your sentence');
// // console.log(myName.slice(0 , 1))
// let nameArr = myName.split(' ');
// // console.log(nameArr);
// // console.log(nameArr[1]);
// let result = [];
// for (let i = 0; i < nameArr.length; i++) {
//     console.log(nameArr[i].slice(0 , 1));
//     let firstLetter = nameArr[i].slice(0 , 1).toUpperCase();
//     let lastLetter = nameArr[i].slice(1).toLowerCase();
//     let completeLetter = firstLetter + lastLetter;
//     result.push(completeLetter);
// }

// console.log(result.join(' '));


function submt() {
  const text = document.getElementById("text").value
  const para = document.getElementById("para")

  let mynames = text.split(' ');
  //console.log(mynames);
let result = []
  for (i = 0; i < mynames.length; i++) {
    let firstLetter = mynames[i].slice(0,1).toUpperCase();
    let lastLetter = mynames[i].slice(1).toLowerCase();
    let a = firstLetter + lastLetter;
    result.push(a)
    console.log(result.join(' '));
    para.innerHTML=result.join(' ')

  }
}
function clears() {
  const para = document.getElementById("para")
  para.innerHTML=(' ')
}

function submts() {

const text = document.getElementById('texts').value;
const email = document.getElementById('email').value;
const number = document.getElementById('number').value;
const password = document.getElementById('password').value;
const para = document.getElementById('parag');

 para.innerHTML =  text + '<br/>' + email + '<br/>' + number + '<br/>' + password;
}
function clearss() {
   document.getElementById('texts').value = ' ';
  document.getElementById('email').value = ' ';
  document.getElementById('number').value = ' ';
 document.getElementById('password').value = ' ';
  document.getElementById('parag');
para.innerHTML = ' '
}















































