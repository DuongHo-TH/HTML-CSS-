$(document).ready(function() {

function validateHoTen(ten){
    if (!ten.trim()) {
        return false;
    }
    const regex_hoten = /^[a-zA-Z\s]+$/;
    return regex_hoten.test(ten);
}


function validatebirtday(input){
    let date = new Date();
    let birtday = new Date(input)
      if(birtday < date){
         return true;
      }
}
$(`#khoi`).on(`input`, function(){

const d = 1;
let defaultOpt =new Option("Chọn Lớp Học....", "chon");
defaultOpt.disabled = true;
defaultOpt.selected = true;
const khoi = $("#khoi").val();
   const inputlop = $("#lop");
    // Xóa tất cả các lớp hiện có
    inputlop.empty();
    if (khoi === "khoi10") {
        // Thêm các lớp của khối 10
        inputlop.append(defaultOpt);
        inputlop.append(new Option("10A", "10A"));
        inputlop.append(new Option("10B", "10B"));
        inputlop.append(new Option("10C", "10C"));
    } else if (khoi === "khoi11") {
        // Thêm các lớp của khối 11
        inputlop.append(defaultOpt);
        inputlop.append(new Option("11A", "11A"));
        inputlop.append(new Option("11B", "11B"));
        inputlop.append(new Option("11C", "11C"));
    } else if (khoi === "khoi12") {
        // Thêm các lớp của khối 12
        inputlop.append(defaultOpt);
        inputlop.append(new Option("12A", "12A"));
        inputlop.append(new Option("12B", "12B"));
        inputlop.append(new Option("12C", "12C"));
    }else{
        inputlop.append(new Option("Chọn Lớp Học....", "chon"));
    }
    const diem = parseFloat($("#diemMonHoc").val());

    function validateDiemMonHoc(diem) {
        if (isNaN(diem)) {
            return false;
        } 
        if (diem < 0 || diem > 10) {
           return false;
        } 
        const decimalPart = diem.toString().split(".")[1];
        if (decimalPart && decimalPart.length > 2) {
        return false;
        } 
        return true;
    }
var id;
var hoten;
var gioitinh;
var ngaysinh;
$(`#buttoninput`).on(`click`, function(){

})
});






















});