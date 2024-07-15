
function displayInfo(){
 var fullname = document.getElementById("name").value;
var birth = new Date(document.getElementById("birthday").value);
var sex = document.getElementById("sex").value;
var currentDate = new Date();
var age = currentDate.getFullYear() - birth.getFullYear();
var thongtin =[{Name : fullname, Tuoi : age, Sex : sex }]
var inforhtml = thongtin.map(use => 
    `Họ Tên : ${use.Name}  <br> Tuổi : ${use.Tuoi} <br> Giới Tính : ${use.Sex}`
).join("");
console.log(inforhtml);
document.getElementById("noidung").innerHTML =inforhtml;
}
document.getElementById("addbuton").addEventListener("click" , displayInfo);