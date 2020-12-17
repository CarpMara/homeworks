import Person from "./Person.js"
export default class Employee extends Person {
    constructor(name, cnp, adress, jAdress, jobAdress) {
        super(name, cnp, adress, jAdress);
        this.jobAdress = jobAdress;
    }

    getAdress() {
        return "Dorobantilor";
    }
    getJAdress() {
        return "Bucuresti";
    }
    getJobAdress() {
        return this.jobAdress;
    }
}