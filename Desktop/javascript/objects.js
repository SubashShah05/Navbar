  //Object

  let person ={
    firstname:"subash",
    lastname:"shah"
  };
person.firstname="Krishna";
person.age=32;
// delete person.lastname;


//   //console.log(person.firstname) ;//dot notation
//  // console.log(person["lastname"]);//array notatio n
//   console.log(person);
for(let key in person){
console.log(key + ":" +person[key]);
}