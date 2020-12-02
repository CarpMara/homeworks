class Student {
    constructor(firstName, lastName, CNP = [], schoolSubject, grades = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.CNP = CNP;
        this.schoolSubject = schoolSubject;
        this.grades = grades;
    }
    getFullName() {
        const intro = 'His/Her full name is: ';
        return `${intro}${this.firstName} ${this.lastName}`;
    }
    getDetails() {

        let gender = '';

        let age = 0;
        if (this.CNP.length == 13) {
            if (this.CNP[0] == '1' || this.CNP[0] == '5')
                gender = 'male';
            else
                gender = 'female';
            let transform = parseInt(this.CNP[1]) * 10 + parseInt(this.CNP[2]);
            age = (2020 - transform) % 100;
            return `Student gender : ${gender} and she/he has ${age}`;
        } else
            return `wrong CNP`;
    }
    getAverage() {
        var grade;
        var sumGrades = 0;
        var numberOfGrades = this.grades.length;
        for (grade in this.grades)
            sumGrades = sumGrades + this.grades[grade];
        return `Student average is : ${sumGrades/numberOfGrades}.00`;

    }

}

const student1 = new Student('Mara-Alexandra', 'Carp', '1990202999999', 'informatics', [10, 9, 10]);
console.log(student1.getFullName());
console.log(student1.getDetails());
console.log(student1.getAverage());

const student2 = new Student('Josh', 'Smith', '1200902999999', 'english', [8, 7, 6]);
console.log(student2.getFullName());
console.log(student2.getDetails());
console.log(student2.getAverage());


const student3 = new Student('Amanda', 'Smith', '2971002999999', 'french', [9, 9, 7]);
console.log(student3.getFullName());
console.log(student3.getDetails());
console.log(student3.getAverage());