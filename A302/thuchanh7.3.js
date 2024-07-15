 var listusers = [];
 var id ;
 var firstname ;
 var lastname;
 var email;
 var phone;
 var address;
 var city;
 var state;
 var zipcode;
 var namecard;
 var cardnumber;
 var month;
 var year;
 var cvv;
 var ischeckout;


function validateString(input){
    const regex_String = /^[a-zA-Z]+$/;
    return regex_String.test(input);
}

function validateNumber(input){
    const regex_Number = /[0-9]/;
    return regex_Number.test(input);
}

$("#cardnumber").on("input", function() {
     cardnumber = this.value.replace(/-/g, ""); 
   const formattedCardNumber = cardnumber.replace(/(\d{4})(?=\d)/g, "$1-"); 
    this.value = formattedCardNumber;
    if (cardnumber.length > 16 || isNaN(cardnumber)) {
       $("#errcardnumber").text("* Chỉ Được Nhập Số, Tối Đa 16 ký tự")
       this.value = formattedCardNumber.slice(0, 19); 
    }else{
       $("#errcardnumber").text("")
    }
 });
 function validateEmail(input){
    const regex_email = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
        return regex_email.test(input);
 }

 function randomID() { 
    var d = new Date().getTime();
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;
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
 $(`#singin`).on(`click`, function(){
     id = randomID();
     firstname = $(`#firstname`).val();
     lastname = $(`#lastname`).val();
     email = $(`#email`).val();
     phone = $(`#phone`).val();
     address = $(`#address`).val();
     city = $(`#city`).val();
     state = $(`#select`).val();
     zipcode = $(`#zipcode`).val();
     namecard = $(`#namecard`).val();
     cardnumber = $(`#cardnumber`).val();
     month = $(`#month`).val();
     year = $(`#year`).val();
     cvv = $(`#cvv`).val();
     ischeckout = $(`#checkmeout`).prop(`checked`)
     var checkvalidate = true;
     if(!validateString(firstname)){
        checkvalidate = false;
        $(`#errfirstname`).show();
     }
     if(!validateString(lastname)){
        checkvalidate = false;
        $(`#errlastname`).show();
     } if(!validateString(address)){
        checkvalidate = false;
        $(`#erraddress`).show();
     } if(!validateString(city)){
        checkvalidate = false;
        $(`#errcity`).show();
     } if(!validateString(namecard)){
        checkvalidate = false;
        $(`#errnamecard`).show();
     } if(!validateNumber(phone) || phone.length !== 10){
        checkvalidate = false;
        $(`#errphone`).show();
     }
     if(!validateNumber(zipcode) || zipcode.length !== 5){
        checkvalidate = false;
        $(`#errzipcode`).show();
     }
     if(!validateNumber(month) || Number(month) > 12){
        checkvalidate = false;
        $(`#errmonth`).show();
     }
     if(!validateNumber(year) || Number(year) < 2000 ){
        checkvalidate = false;
        $(`#erryear`).show();
     }
     if(!validateNumber(cvv) || cvv.length !== 3){
        checkvalidate = false;
        $(`#errcvv`).show();
     }
     if( cardnumber.length !== 19){
        checkvalidate = false;
        $(`#errcardnumber`).show();
     }if(state == null){
        checkvalidate = false;
        $(`#errstate`).show();
     }if(!ischeckout){
        checkvalidate = false;
        $(`#errcheckbox`).show();
     }if(!validateEmail(email)){
        checkvalidate = false;
        $(`#erremail`).show();
     }if(checkvalidate){
        listusers.push({id : id, firstname : firstname, lastname : lastname, email : email, 
            phone : phone, address : address, city : city, state : state, zipcode : zipcode,
            namecard : namecard, cardnumber : cardnumber, month : month, year : year, cvv : cvv
        })
        $("#errlastname").text("")
        $("#errfirstname").text("");
        $("#erraddress").text("");
        $("#errcity").text("");
        $("#errnamecard").text("");
        $("#errphone").text("");
        $("#errzipcode").text("");
        $("#errcvv").text("");
        $("#errmonth").text("");
        $("#erryear").text("");
        $("#erremail").text("");
        $("#errstate").text("");
        $("#errcheckbox").text("");
        $("#errcardnumber").val("");
        $("#firstname").val("");
        $("#lastname").val("");
        $("#email").val("");
        $("#phone").val("");
        $("#address").val("");
        $("#city").val("");
        $("#state").val("0");
        $("#zipcode").val("");
        $("#namecard").val("");
        $("#cardnumber").val("");
        $("#month").val("");
        $("#year").val("");
        $("#cvv").val("");
        $('#checkmeout').prop('checked', false);
      displayUsers(listusers);
     }
 });

 function displayUsers(list){
    usershtml = ""
  list.forEach(users => {
    usershtml += `<tr>
    <td>`+ users.firstname+`</td>
    <td>`+ users.lastname+`</td>
    <td>`+ users.email+`</td>
    <td>`+ users.phone+`</td>
    <td>`+ users.address+`</td>
    <td>`+ users.city+`</td>
    <td>`+ users.state+`</td>
    <td>`+ users.zipcode+`</td>
    <td>`+ users.namecard+`</td>
    <td>`+ users.cardnumber+`</td>
    <td>`+ users.month+`</td>
    <td>`+ users.year+`</td>
    <td>`+ users.cvv+`</td>
    <td><button class="buttondelete" data-id=`+users.id+`><i class="fa-solid fa-trash-can"></i></button></td>
</tr>`
  });
  $(`#bodytable`).html(usershtml);
 }

 $(document).on(`click`,`.buttondelete`, (function(){
    var con = confirm("Bạn Có Chắc Chắn Muốn Xóa Users")
    if(con){
        const idthis = $(this).attr('data-id');
        listusers = listusers.filter((e) => e.id !== idthis );
        displayUsers(listusers);
       }
 }))