#include<iostream>
using namespace std;
class Vector{
 public:
 int size;
 int capacity;
 int *arr;

 Vector(){
    size=0;
    capacity=1;
    arr=new int[1];
 }
};

int main(){
}