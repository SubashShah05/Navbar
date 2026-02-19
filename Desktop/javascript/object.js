let cars ={
    name:"Tata",
    mailegae:23,
    speed:100

}
// console.log(cars);
// console.log(cars.speed);
// console.log(cars['speed']);
// cars.speed= 120;
// console.log(cars.speed)

for (const key in cars){
    console.log(key,cars[key]);
}