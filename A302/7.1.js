$(document).ready(function() {
var soluong = 1;
var total = 0;
var gia = 10000;

$("#tang").click(function(){
    
    soluong ++;
    total = gia * soluong;
  
    $("#soluong").text(soluong);
    $("#total").text(total);
})

$("#giam").click(function(){
    if(soluong >= 2){
        soluong--;
       total = gia * soluong;
       $("#soluong").text(soluong);
       $("#total").text(total);
    }else{
        alert("Số lượng sản phẩm cần mua tối thiểu là 1")
    }
       
})
});