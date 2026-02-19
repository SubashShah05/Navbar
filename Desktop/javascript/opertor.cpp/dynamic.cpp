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
   };

   int main(){
 Cricketer c1("Virat",25000,55.2);
  Cricketer *c2=new Cricketer("Rohit",18000,47.8);
  cout<<c1.runs<<" "<<c1.name<<endl;
cout<<c2->avg<<" "<<c2->name<<endl;



//   int *ptr=new int(234);
  //cout<<*ptr<<endl; 
   }