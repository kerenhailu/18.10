// let MyMap = new Map()
// MyMap.set("myKey","myValue")
// MyMap.set(40,true)
// MyMap.set("keren","hailu")
// console.log(MyMap);

//!נרשום את הקי בפונקצית גיט והיא תיתן לנו את הוליו.
// console.log(MyMap.get("keren"))
// ========================================================

// let fruit = new Map();
// fruit.set("Limon", "Yellow");
// fruit.set("Apple", "Red");
// fruit.set("Grapes", "Green");
// fruit.set("OrangeA", "Orange");
// fruit.set("Banna", "Yellow");
// fruit.set("Blackberry", "purple");
// fruit.set("fruit", "purple");

// console.log(fruit);
// //!הצג את הפירות
// console.log(fruit.keys());
// //!הצג את הצבעים
// console.log(fruit.values());
// //!הצג וליו של קי ספציפי
// console.log(fruit.get("Blackberry"));

// for (let color of fruit.values()) {
//   if (color == "Orange") {
//     console.log(fruit.get(color));
//     console.log(1);
//   }
// }

// let puple = new Map([
//   ["dan", 25],
//   ["gil", 15],
//   ["lior", 23],
//   ["idan", 40],
// ]);
// console.log(puple.keys());
// console.log(puple.values());

// for (const key of puple.keys()) {
//     td1.innerHTML+=`<td>${key}</td>`
//     td2.innerHTML+=`<td>${puple.get(key)}</td>`
// }

// let CategoriesMap=new Map()
// CategoriesMap.set("colors",["red","blue","green","black"])
// CategoriesMap.set("Swimsuit",["T-shirt","jens","skini","undershirt"])
// CategoriesMap.set("fruit",["limon","banna","apple","orange"])
// CategoriesMap.set("girls",["keren","tikva","eden","yafit"])
// console.log(CategoriesMap);

// let CarsMap=new Map()
// CarsMap.set("honda",[Name="honda",Year=2008,color="black",smk=20,000])
// CarsMap.set("mazda",[Name="mazda",Year=2010,color="green",smk=15,888])
// CarsMap.set("fiat",[Name="fiat",Year=2020,color="yellow",smk=77,999])
// console.log(CarsMap);
// console.log(CarsMap.get("mazda"));
// ==========================================================

// 1.	צרו מחלקה של סטודנט, עם שדות שם פרטי, שם משפחה, גיל וממוצע ציונים.
class student {
  fname;
  lname;
  age;
  average;
  constructor(fname, lname, age, average) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.average = average;
  }
}

// 2.	צרו MAP שמכיל 3 סטודנטים, הKEY הוא השם הפרטי של הסטודנט והערך הוא האובייקט.
let student1 = new student("keren", "hailu", 23, 100);
let student2 = new student("eden", "tesma", 25, 85);
let student3 = new student("tikva", "yosef", 26, 99);

let divs = document.getElementsByClassName("divs");
let arrayS = [student1, student2, student3];

let TheStudent = new Map();
arrayS.forEach((element) => {
  TheStudent.set(element.fname, element);
  sec.innerHTML += `<div class="divs" id="${element.fname}">
  ${element.fname}
  </div>`;
});
for (let i = 0; i < divs.length; i++) {
  divs[i].onmouseover = () => {
    // divs[i].style.width="200px"
    console.log(TheStudent.get(divs[i].id));
    divs[i].innerText +=`${TheStudent.get(divs[i].id).lname}`;
  };
  divs[i].onmouseout = () => {
    divs[i].innerText = divs[i].id;
  };
}
console.log(TheStudent);
