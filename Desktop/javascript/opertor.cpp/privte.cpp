#include<iostream>
using namespace std;

class Student {
private:
    int rno;       // Roll number - kept private
    string name;   // Name - kept private
    float marks;   // Marks - kept private

public:
    // Default constructor
    Student() {}

    // Parameterized constructor
    Student(int r, string n, float m) {
        rno = r;
        name = n;
        marks = m;
    }

    // Getter for marks - public
    float getMarks() {
        return marks;
    }

    // Setter for marks - public
    void setMarks(float m) {
        marks = m;
    }

    // Optional: You can add a method to display student details, if needed
    void displayInfo() {
        cout << "Roll No: " << rno << ", Name: " << name << ", Marks: " << marks << endl;
    }
};

int main() {
    // Creating a student object using the parameterized constructor
    Student s1(76, "Subash", 92.2);

    // Accessing and displaying the marks using the getter method
    cout << "Marks: " << s1.getMarks() << endl;

    // Modifying the marks using the setter method
    s1.setMarks(98.5);

    // Displaying the updated marks
    cout << "Updated Marks: " << s1.getMarks() << endl;

    // Optional: Displaying the full student info (if you use displayInfo method)
    s1.displayInfo();
}
