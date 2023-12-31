//Inheritance
function Person(name, age) {
    this.fullName = name
    this.age = age
}
let rahat = new Person('Rahat Kabir', 25)
console.log(rahat)

let rajib = new Person('Rajib Singh', 26)
console.log(rajib)


let Teacher = function(name, age, subject) {
    Person.call(this, age, name)
    this.subject = subject
}

let rahim = new Teacher('Rahim', 25, 'Javascript')
console.log(rahim)

let Doctor = function(name, age, degree, institution) {
    Person.call(this, name, age)
    this.degree = degree
    this.institution = institution
}
let doctor = new Doctor('Kuddus', 45, 'MBBS', 'CU')
console.log(doctor)

let SeniorTeacher = function(name, age, subject, experience) {
    Teacher.call(this, name, age, subject)
    this.experience = experience
}
let seniorTeacher = new SeniorTeacher('Kuddus', 45, 'Math', 10)
console.log(seniorTeacher)

