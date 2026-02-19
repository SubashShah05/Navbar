#include<iostream>
using namespace std;
template <class T>
T sum(T a, T b){
    return a+b;
}
int main(){
   auto res=sum(2.9,6.0);
    cout<<res;
}
