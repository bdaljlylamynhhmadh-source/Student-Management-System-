// Student Management and Results Analysis System
// Prepared by: Omnia Hamada

// 1. Create Student Class
class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    // 2. Calculate Average using reduce
    calculateAverage() {
        const total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }

    // Calculate Grade
    getGrade() {
        const average = this.calculateAverage();

        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else if (average >= 50) {
            return "E";
        } else {
            return "F";
        }
    }

    // Final Result using &&
    getResult() {
        const average = this.calculateAverage();

        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}

// 3. Create Students Array
const studentsList = [
    new Student(101, "Ahmed", [45, 48, 42], 90),
    new Student(102, "Mona", [80, 85, 90], 95),
    new Student(103, "Ali", [40, 45, 48], 80),
    new Student(104, "Sara", [30, 35, 40], 70)
];

// 4. Filter Struggling Students
const strugglingStudents = studentsList.filter(student => {
    const average = student.calculateAverage();
    return average >= 40 && average <= 49;
});

// 5. Add 5 Mercy Marks using map
const mercyStudents = strugglingStudents.map(student => {
    return {
        id: student.id,
        name: student.name,
        oldAverage: student.calculateAverage(),
        newAverage: student.calculateAverage() + 5
    };
});

// 6. Calculate Total using reduce
const totalNewAverages = mercyStudents.reduce((sum, student) => {
    return sum + student.newAverage;
}, 0);

// 7. Calculate Mercy Average
const mercyAverage = mercyStudents.length > 0
    ? totalNewAverages / mercyStudents.length
    : 0;

// 8. Print Students Reports
console.log("Prepared by: Omnia Hamada");
console.log("===== STUDENTS REPORT =====");

studentsList.forEach(student => {
    console.log("-------------------------");
    console.log("Student ID:", student.id);
    console.log("Student Name:", student.name);
    console.log("Average:", student.calculateAverage().toFixed(2));
    console.log("Grade:", student.getGrade());
    console.log("Result:", student.getResult());
});

// 9. Print Mercy Committee
console.log("===== MERCY COMMITTEE =====");
console.log("Struggling Students:", mercyStudents);

// 10. Print Mercy Average
console.log("Average After Mercy:", mercyAverage.toFixed(2));

console.log("===== END OF REPORT =====");
