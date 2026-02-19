#include<iostream>
using namespace std;
class Customer{
    string name;
    int balance,account_number;

    public:

    Customer(string name,int balance,int account_number){
        this->name=name;
        this->balance=balance;
        this->account_number=account_number;
    };
    //deposit

    void  deposit(int amount){
       if(amount>0){
        balance=balance + amount;
        cout<<amount<<" rs is credited successfully"<<endl;
       } 
       else{
        throw "amount should be greater than 0"; 
       }
    }

    //Withdrawl
    void withdrawl(int amount){
        if(amount>0 && amount<=balance){
        balance-=amount;
        cout<<amount<<" rs is debited successfully";
    }
    else if(amount<0){
        throw "amount should be greater than 0";
    }
    else{
        throw "your balance is low";
    }
    }

};

int main(){
    Customer c1("Rohit",5000,10);
    try{
    c1.deposit(100);
    c1.withdrawl(6000);
    }
    catch(const char *e){
        cout<<"Exception Occured:"<<e<<endl;
    }
}
