#include<iostream>
using namespace std;

class Student {
    int rno;
    string name;
    float marks;

public:
    // Default constructor
    Student() {}

    // Parameterized constructor
    Student(int r, string n, float m) {
        rno = r;
        name = n;
        marks = m;
    }

    // Getter for marks
    float getMarks() {
        return marks;
    }

    // Setter for marks
    void setMarks(float m) {
        marks = m;
    }
};

int main() {
    Student s1(76, "Subash", 92.2);
    cout << s1.getMarks() << endl;

    s1.setMarks(98.5);
    cout << s1.getMarks() << endl; // Added to show the updated marks
}
