let data = `{
    "name" : "Subash",
    "age" : 20,
    "is_student" : true,
    "passport_no" : null,
    "p_lang" : ["c","c++","java","python"],

    "address" :{
        "city":"delhi",
        "state": "new delhi",
        "pincode": 1112213
    }

}`

let Dobj = JSON.parse(data); //it convert string into javascript object
console.log(Dobj.address.pincode)