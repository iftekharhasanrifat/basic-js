var student = {id: 121,phone:1245,name:"Abir"};
var student2 = {id:121,phone: 457,name:"Mahi"};

var phonePropName= "phone";
var phoneNum1 = student.phone;
var phoneNum2 = student["phone"];
var phoneNo3 = student[phonePropName];

student2.phone = 65665

console.log(phoneNum1);
console.log(student2);
