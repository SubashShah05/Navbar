// //getline() and write( ) function in c++
// getline() function is used to read string through keyboard.it accepts the string including spaces.

// the syntax is:
// cin.getline(variable,size);

// the write() function is used to display on the screen
// the syntax is:
// cout.write(variable,size);

// #include<iostream>
// using namespace std;
// int main(){
//     char str[20];
//     cout<<"enter the string:";
//     cin.getline(str,20);
//     cout.write(str,10);
//     return 0;
// }

#include <iostream>
using namespace std;

int main() {
    char str[20];
    cout << "Enter the string: ";
    cin.getline(str, 20);  // Correct usage of getline

    cout.write(str, 10);   // Writes up to 10 characters or the length of the string, whichever is smaller
    return 0;
}



function calculateBill(bill) {
  let totalBillAmount = 0;
  let billItems = [];
  
  bill["billItems"].forEach(function(billitem){
    let itemstring =""
    let id =billitem.id;
    let qty =billitem.qty;
    //for(let value of menu){
    //  if(value.id == id){
     //   item =value;
      //  break;
    //  }
  //  }
    
    item =bill.find((value)=> value.id)
    let rate =item.rate;
    let price = item.rate;
if(billItem.discount.isInpercent == true){
  let discount =(billitem.discount.rate * price) /100;
  price -=discount
} 
    else{
      price -= billitem.discount.rate
    }
  })
  let taxtotal =0;
  item.taxes.forEach(taxobj=>{
    if(taxobj.isInpercent == true ){
      let tax = price * taxobj.rate /100;
      taxtotal +=tax
    }
    else{
      taxtotal += taxobj.rate
    }
  })
  price += taxtotal;
  
  
  
  return [totalBillAmount, billItems];
}