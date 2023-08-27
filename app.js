
const div = document.querySelector('div')
for (let i = 1; i <=10; i++){
    div.innerHTML += `<br/> sub of ${i} <br/> <br/> `; 
    for(let j =1; j <=10; j++)
    for(let k = 1; k <=10; k++)
div.innerHTML+=(`${i} + ${j} + ${k} = ${i+j+k} <br/> `);
}

const p = document.querySelector('p')
let n = 0;
while (n <= 10) {
  let m = 0;
  while (m <= 10) {
  p.innerHTML+=(`${n} * ${m} = ${n*m} <br/>`);
  m++;
}
  n++;
  }

  for (let o = 0; o <= 12; o++){
    console.log(o);
  }

 const fruits = ["apple" , "mango" , "peach" , "pineapple" , "grapes"]
for (let i = 0; i < fruits.length; i++) {
   //console.log(fruits[i]);
  if(fruits[i] === "mango") {
    console.log("nashpati");
  }
  else{
    console.log(fruits[i]);
  }
 }


const h3 = document.querySelector('h3')
for (y = -1; y <= -1; y++){
  for(q = 1; q <= 10; q++)
  for(r = 1; r <= 10; r++)
  for(s = 0; s <= 10; s++)
  h3.innerHTML +=(`${y} * ${q} * ${r} * ${s} = ${y * q * r * s} <br/>`);
}


let t = 0
while (t <= 10) {
  let u = 1 
  while (u <= 10) {
    let v = 2 
    while (v <= 10) {
      console.log(`${t} * ${u} * ${v} = ${t * u * v}`);
      v++
    }
    u++
  }
  t++
}





























