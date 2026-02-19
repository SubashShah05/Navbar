#include <iostream>
#include <string>
using namespace std;

// Base class: Person
class Person {
    protected:
        string name;
        int age;
        string address;

    public:
        // Constructor to initialize Person's details
        Person(string personName, int personAge, string personAddress) {
            name = personName;
            age = personAge;
            address = personAddress;
        }

        // Virtual function to be overridden in derived classes
        virtual string showDetail() = 0;  // Pure virtual function making Person an abstract class
};

// Derived class: Student
class Student : public Person {
    private:
        string studentID;

    public:
        // Constructor to initialize both Person and Student details
        Student(string studentName, int studentAge, string studentAddress, string id)
            : Person(studentName, studentAge, studentAddress) {
            studentID = id;
        }

        // Method to display student's details
        string showDetail() override {
            return "Student Details:\nName: " + name + "\nAge: " + to_string(age) + "\nAddress: " + address + "\nStudent ID: " + studentID;
        }
};

// Derived class: Teacher
class Teacher : public Person {
    private:
        double salary;

    public:
        // Constructor to initialize both Person and Teacher details
        Teacher(string teacherName, int teacherAge, string teacherAddress, double teacherSalary)
            : Person(teacherName, teacherAge, teacherAddress) {
            salary = teacherSalary;
        }

        // Method to display teacher's details
        string showDetail() override {
            return "Teacher Details:\nName: " + name + "\nAge: " + to_string(age) + "\nAddress: " + address + "\nSalary: $" + to_string(salary);
        }
};

// Main function
int main() {
    // Create a Student object
    Student student("Alice Smith", 20, "456 College St", "S12345");
    cout << student.showDetail() << endl << endl;

    // Create a Teacher object
    Teacher teacher("Bob Johnson", 45, "789 School Ave", 55000);
    cout << teacher.showDetail() << endl;

    return 0;
}
#include <iostream>
#include <string>
using namespace std;

// Base class: Person
class Person {
    protected:
        string name;
        int age;
        string address;

    public:
        // Constructor to initialize Person's details
        Person(string personName, int personAge, string personAddress) {
            name = personName;
            age = personAge;
            address = personAddress;
        }

        // Virtual function to be overridden in derived classes
        virtual string showDetail() = 0;  // Pure virtual function making Person an abstract class
};

// Derived class: Student
class Student : public Person {
    private:
        string studentID;

    public:
        // Constructor to initialize both Person and Student details
        Student(string studentName, int studentAge, string studentAddress, string id)
            : Person(studentName, studentAge, studentAddress) {
            studentID = id;
        }

        // Method to display student's details
        string showDetail() override {
            return "Student Details:\nName: " + name + "\nAge: " + to_string(age) + "\nAddress: " + address + "\nStudent ID: " + studentID;
        }
};

// Derived class: Teacher
class Teacher : public Person {
    private:
        double salary;

    public:
        // Constructor to initialize both Person and Teacher details
        Teacher(string teacherName, int teacherAge, string teacherAddress, double teacherSalary)
            : Person(teacherName, teacherAge, teacherAddress) {
            salary = teacherSalary;
        }

        // Method to display teacher's details
        string showDetail() override {
            return "Teacher Details:\nName: " + name + "\nAge: " + to_string(age) + "\nAddress: " + address + "\nSalary: $" + to_string(salary);
        }
};

// Main function
int main() {
    // Create a Student object
    Student student("Alice Smith", 20, "456 College St", "S12345");
    cout << student.showDetail() << endl << endl;

    // Create a Teacher object
    Teacher teacher("Bob Johnson", 45, "789 School Ave", 55000);
    cout << teacher.showDetail() << endl;

    return 0;
}

// create a base class person with protected members name, age address   derive two class stuedent and teacher from person student has additonal attribute studentid,teacher has attribute salary ,string showdetail() in student lass and teacher class to show detai in main and expalian in code