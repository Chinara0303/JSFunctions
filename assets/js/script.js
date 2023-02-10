// function getNumbers(num){
//     debugger
//     let number = num-1
//     if (number>0) {
//        getNumbers(number)
//     }
//     console.log(num);

// }
// getNumbers(5)
// let sum =0;

// function sumOfNums(num) {
//     for (let i = 0; i <= num; i++) {
//         sum+=i
//     }
//     return sum;
// }
// console.log(sumOfNums(5));

// function sumOfNumbers(num){
//     debugger
//     if(num!=0){
//         return num + sumOfNumbers(num-1);
//     }
//     else{
//         return num;
//     }

// }
// console.log(sumOfNumbers(5));

// let nums = [2, 4, 3, 7, 5, 10];
// nums.forEach((element, index, arr) => {
//     // console.log(nums);

//     nums[index] = element * 2;

// if (element % 2 == 1) {
//     // console.log(element);
//     // console.log(index);
//     // console.log(arr);
// }
// });
// console.log(nums);

// console.log(nums);

// console.log(nums);
//for array
// for (const item of nums) {
//     console.log(item);
// }
//for object
// for (const key in nums) {
//     console.log(nums[key]);
// }

// let stu1 = {
//     firstname: "Chinara",
//     lastname: "Ibadova"
// }
// let stu2 = {
//     firstname: "Chinara",
//     lastname: "Ibadova"
// }
// let students = [stu1, stu2];
// for (const item of students) {
//     if(item.firstname == "Chinara" && item.lastname == "Ibadova"){
//     console.log(item.firstname + " " +item.lastname);
//     }
// }

// for (const key in stu1) {
//     if(key == "firstname" && stu1[key]=="Chinara"){
//         console.log(stu1[key]);
//     }
// }

// for (const stu of students) {
//     for (const key in stu) {
//        console.log(`key:${key} value:${stu[key]}`);
//     }
// }
// let count = 0;
// for (const item of students) {
//     for (const key in item) {
//         if (key=="firstname") {
//             count++;
//         }
//     }
// }
// console.log(count);

// let nums1=[2,4,6,5,3,8];
// let nums2 = nums1;
// nums1[0]=10;
// console.log(nums1);
// let count=0;

//map yeni arr yaradir
// let newArr = nums1.map(n=>{
//     return n*3;
// })
// console.log(newArr);
//

// function evenOfNums(num){
//     return num%2==0
// }
// function oddOfNums(num){
//     return num%2==1
// }
// let evenOfNums = num=>{
//     return num%2==0
// }
// let oddOfNums = num =>{
//     return num%2==1
// }
// let sum = 0;
// function checkNums(arr, callback) {
//     arr.forEach(element => {
//         if (callback(element)) {
//             sum += element;
//         }
//     });
//     console.log(sum);
// }
// let numbers = [2, 3, 5, 6, 78, 99]
// // checkNums(numbers,evenOfNums)
// // checkNums(numbers,oddOfNums)
// checkNums(numbers, n => n % 2 == 0)
// checkNums(numbers, n => n % 2 == 1)

// let stu1 = {
//     id: 1,
//     name: 'Chinara',
//     surname: 'Ibadova',
//     age: 22
// }

// let stu2 = {
//     id: 2,
//     name: 'Konul',
//     surname: 'Ibarahimova',
//     age: 26
// }

// let stu3 = {
//     id: 3,
//     name: 'Roya',
//     surname: 'Meherremova',
//     age: 26
// }
// let students = [stu1, stu2, stu3];
// let showStudentsByAge=(arr,callback) =>{
//     debugger
//     for (const item of arr) {
//         if (callback(item.age)) {
//             return item.name
//         }
//     }
// }
// let res = showStudentsByAge(students, s => s > 20);
// console.log(res);

//  let filteredDatas = students.filter(s=>s.age>20)
// console.log(filteredDatas);
// for (const key in filteredDatas) {
//     console.log(key + " " + filteredDatas[key].name);
// }

// let getSumOfAgesByFilteredDatas=datas=>{
//     let sum=0;
//     datas.forEach(element => {
//        sum+=element.age;
//     });
//     console.log(sum);
// }
// getSumOfAgesByFilteredDatas(filteredDatas)
//  let numbers = [1,3,5,7,2,4,6,10];
//  let filterednumbers = numbers.reduce((total,current)=>total+current)
//  console.log(filterednumbers);





//tasks

//2) Ededin faktorialinin hesablanmasini recursive function ile yazin.

function getFactorialWithRecursiveFunction(num) {
    if (num != 1) {
        return num * getFactorialWithRecursiveFunction(num - 1)
    }
    else {
        return num;
    }
}
//console.log(getFactorialWithRecursiveFunction(5));

//3) Icerisinde name, surname, age, email olan bir nece student objectleriniz var.
// Ashagida elave etdiklerimi functionlar sekilinde yazin, functionlar objectlerden ibaret array qebul edecek.
let stu1 = {
    name: 'Chinara',
    surname: 'Ibadova',
    age: 22,
    email: "chinaraei@code.edu.az"
}
let stu2 = {
    name: 'Konul',
    surname: 'Ibrahimova',
    age: 26,
    email: "konulsi@code.edu.az"
}
let stu3 = {
    name: 'Roya',
    surname: 'Meherremova',
    age: 26,
    email: "roya@ode.edu.az"
}
let stu4 = {
    name: 'Jale',
    surname: 'Abdullayeva',
    age: 18,
    email: "zhala@gmail.az"
}

let students = [stu1, stu2, stu3, stu4];
//1) Yashi 18-25 araliginda olan telebelerin sayi.
function getStudentCountBetweenByAges(arr) {
    let count = 0;
    arr.forEach(element => {
        if (element.age > 18 && element.age < 25) {
            count++;
        }
    });
    console.log(count);
}
// getStudentCountBetweenByAges(students);
//2) Emailinde "c" herfi olan studentlerin sayi.
let getStudentCountContainsLetterInEmail = arr => {
    let count = 0;
    arr.forEach(element => {
        if (element.email.includes("c")) {
            count++;
        }
    });
    console.log(count);
}
// getStudentCountContainsLetterInEmail(students)
//4) Gelen yasha gore hansi ilden olduqugunu gosteren function yazin.
//Meselen 30 gelirse function geriye 1993 qaytarmalidir.
let showHumanAge = number => {
    const date = new Date();
    let currentYear = date.getFullYear();
    if (number > 0) {
        let age = currentYear - number;
        console.log(age);
    }
    else {
        console.log("Please, enter correct format age");
    }
}
// showHumanAge(6)