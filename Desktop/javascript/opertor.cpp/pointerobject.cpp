#include<iostream>
using namespace std;
class Cricketer{
    public:
    string name;
    int runs;
    float avg;
    Cricketer(string name,int runs,float avg){
        this->name=name;
        this->runs=runs;
        this->avg=avg;
    }
    void change(Cricketer *c){
        //(*c).avg=77.2;
        c->avg=49;

    }
};

int main(){
   Cricketer c1("Virat",25000,55.2);
//    cout<<c1.avg<<endl;
//    c1.change(&c1);
//    cout<<c1.avg<<endl;
  // Cricketer c2("Rohit",18000,47.8);
   //Cricketer *p=&c1;
  // cout<<c1.runs<<endl; 
 // cout<<(*p).runs<<endl;  //c1.runs
 // (*p).avg=77.5;  //c1.avg=77.5
  cout<<c1.avg<<endl;

//    int x=4;
//    cout<<&x<<endl;
//    int *p=&x;
//    cout<<p<<endl;
//    cout<<*p<<endl;
//    *p=100; //x=100; 
//    cout<<x<<endl;
}