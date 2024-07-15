function validateCreditCardNumber(input) {
       var check_Card =/^\d{16}$/;
    if (check_Card.test(input)) {
        console.log("Số Card hợp lệ")
      return true; 
    } else {
        console.log("Số Card không hợp lệ")
      return false; 
    }
  }
function validateNumer(input){
    if(isNaN(input)){
        console.log(input + " Không Phải Là Số")
    }else{
        console.log(input + "Là Số")
    }
}

function validateEmail(input){
    const check_Email = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    if(check_Email.test(input)){
        console.log("Email hợp lệ")
    }else {
        console.log("Email Không Hợp Lệ")
    }
}
function validateUrl(input) {
    const check_Url =   /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
    if(check_Url.test(input)){
        console.log("Input đúng định dạng url");
    }else{
        console.log("Input không đúng định dạng");
    }
}

function validateAlphabet(input){
    const check_Alphabet = /^[a-zA-Z0-9]+$/;
    if(check_Alphabet.test(input)){
        console.log("Input đúng định dạng Alphabet");
    }else{
       console.log("Input Sai định dạng Alphabet")
    }
}
function validateCardNumber(){
    document.getElementById("cardnumber").addEventListener("input", function() {
        const cardNumber = this.value.replace(/-/g, ""); 
        const formattedCardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, "$1-"); 
        this.value = formattedCardNumber;
        if (cardNumber.length > 16||isNaN(cardNumber)) {
            $("#errcardnumber").text("* Chỉ Được Nhập Số Tối Đa 16 Số");
            this.value = cardNumber.slice(0, 16); 
        }else{
            $("#errcardnumber").text("");
        }
    });
}
function randomID() { 
    var d = new Date().getTime();
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
       var r = Math.random() * 16;
       if (d > 0) {
          r = (d + r) % 16 | 0;
          d = Math.floor(d / 16);
       } else {
          r = (d2 + r) % 16 | 0;
          d2 = Math.floor(d2 / 16);
       }
       return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
 }

 function validateNumber(input){
    const regex_number = /[0-9]/;
    return regex_number.test(input);
 }

 function validateLastName(input) {
    const regex_name = /^[a-zA-Z]+$/;
    return regex_name.test(input);
 }

 function validateEmail(input){
    const regex_email = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
        return regex_email.test(input);
 }


 $("#cardnumber").on("input", function() {
    const cardNumber = this.value.replace(/-/g, ""); 
   const formattedCardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, "$1-"); 
    this.value = formattedCardNumber;
    if (cardNumber.length > 16 || isNaN(cardNumber)) {
       $("#errcardnumber").text("* Chỉ Được Nhập Số, Tối Đa 16 ký tự")
       this.value = cardNumber.slice(0, 16); 
    }else{
       $("#errcardnumber").text("")
    }
 });
 function validateHoTen(ten){
    if (!ten.trim()) {
        return false;
    }
    const regex_hoten = /^[a-zA-Z\s]+$/;
    return regex_hoten.test(ten);
}
 
