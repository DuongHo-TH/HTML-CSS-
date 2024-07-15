var arrNumber = [ 1, 2, 15, 19, 24, 14, 3, 31, 33, 4, 5, 46, 42, 6, 32, 38, 7, 8, 9];

function showSumEven(arr){
    var sum = 0;
for (var i = 0; i< arr.length; i++) {
    if(arr[i] % 2 == 0){
      sum += arr[i];
    }
}
document.getElementById("sumOdd").innerHTML = "Sum EvenNumber : " +sum;
}
function showEven(arr){
    var arrEven = [];
for (var i = 0; i< arr.length; i++) {
    if(arr[i] % 2 == 0){
      arrEven.push(arr[i]);
    }
}
return arrEven;
}
function showOdd(arr){
    var arrOdd = [];
for (var i = 0; i< arr.length; i++) {
    if(arr[i] % 2 != 0){
      arrOdd.push(arr[i]);
    }
}
     return arrOdd;
}

function showSumOdd(arr){
    var sum = 0;
for (var i = 0; i< arr.length; i++) {
    if(arr[i] % 2 != 0){
      sum += arr[i];
    }
}
document.getElementById("sumOdd").innerHTML = "Sum OddNumber : " +sum;
}

function showArray(arr){
    let arrab = [];
    a = prompt("Nhập Giá Trị Của a")
    b = prompt("Nhập Giá Trị của b")
    for( let i = a; i <= Number(b); i++){
        arrab.push(arr[i]);
    }
    document.getElementById("sumOdd").innerHTML ="Number in Array index a -> b : "+arrab;
}
function showinfoArray(arr) {
    document.getElementById("sumOdd").innerHTML ="Các Số Trong Array : " + arr;
}
function selectionSort(arr) {
    let n = arr.length
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    document.getElementById("sumOdd").innerHTML ="Các Số Trong Array : " + arr;
}
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    document.getElementById("sumOdd").innerHTML ="Các Số Trong Array : " + arr;
}


function displayInfo() {
    var fullName = document.getElementById("fullName").value;
    var birthdate = new Date(document.getElementById("birthdate").value);
    var gender = document.getElementById("gender").value;

    var currentDate = new Date();
    var age = currentDate.getFullYear() - birthdate.getFullYear();
    var fullinfor = [{HoTen : fullName, tuoi : age, gioitinh : gender}];
     var inforhtml = fullinfor.map(user =>
         `<p>Họ Tên : ${user.HoTen} </p>
          Tuổi : ${user.tuoi}  Giới Tính : ${user.gioitinh}
         `).join("");
    document.getElementById("sumOdd").innerHTML =inforhtml;
}


 function showUser(){
var users = [
    { id: 1, first_name: "Eamon", last_name: "Harhoff", email: "eharhoff0@imageshack.us", gender: "Male", age: 23, salary: 18888 },
    { id: 2, first_name: "Laney", last_name: "Whittam", email: "lwhittam1@issuu.com", gender: "Female", age: 42, salary: 15018 },
    { id: 3, first_name: "Lynett", last_name: "Twinberrow", email: "ltwinberrow2@gov.uk", gender: "Female", age: 23, salary: 13343 },
    { id: 4, first_name: "Lynett", last_name: "Twinberrow", email: "ltwinberrow2@gov.uk", gender: "Female", age: 21, salary: 13343 },
    { id: 5, first_name: "Lynett", last_name: "Twinberrow", email: "ltwinberrow2@gov.uk", gender: "Male", age: 29, salary: 13343 },
    { id: 6, first_name: "Lynett", last_name: "Twinberrow", email: "ltwinberrow2@gov.uk", gender: "Male", age: 25, salary: 13343 }
];
var youngMaleUsers = users.filter(user => user.gender === "Male" && user.age < 40);
var UsersHtml = youngMaleUsers.map(user => `
    <p>ID: ${user.id}</p>
    <p>Họ và tên: ${user.first_name} ${user.last_name}</p>
    <p>Email: ${user.email}</p>
    <p>Giới tính: ${user.gender}</p>
    <p>Tuổi: ${user.age}</p>
    <p>Lương: ${user.salary}</p>
    <hr>
`).join("");
document.getElementById("showinfor").innerHTML = UsersHtml;
var totalAge = users.reduce((sum, user) => sum + user.age, 0);
var averageAge = totalAge / users.length;
document.getElementById("showinfor").innerHTML += `<p>Trung bình chung độ tuổi của các user: ${averageAge.toFixed(2)}</p>`;
 }