   var firstname;
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
   var formattedCardNumber;
   var ischeckout;
   var select;
   var id;
   let listname = [
      {ID : "iiiiiii", FirstName : "firstname", LastName : "lastname", Email : "email", Address : "address", City : "city", State : "state", Zipcode : "zipcode", Namecard : "namecard", CarNumber : "cardnumber", Phone : "phone", Month : "month", Year : "year", CVV : "cvv"}];
   displayList(listname);

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
      formattedCardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, "$1-"); 
      this.value = formattedCardNumber;
      if (cardNumber.length > 16 || isNaN(cardNumber)) {
         $("#errcardnumber").text("* Chỉ Được Nhập Số, Tối Đa 16 ký tự")
         this.value = cardNumber.slice(0, 16); 
      }else{
         $("#errcardnumber").text("")
      }
   });

   $("#singin").on("click", function(){
      firstname = $("#firstname").val();
      lastname = $("#lastname").val();
      email = $("#email").val();
      phone = $("#phone").val();
      address = $("#address").val();
      city = $("#city").val();
      state = $("#select").val();
      console.log(state)
      zipcode = $("#zipcode").val();
      namecard = $("#namecard").val();
      cardnumber = $("#cardnumber").val();
      month = $("#month").val();
      year = $("#year").val();
      cvv = $("#cvv").val();
      select = $("#select").val();
      ischeckout = $("#checkmeout").prop("checked")
      id = randomID();
      let check = true;
      if(!validateLastName(lastname)){
         check = false;
         $("#errlastname").text("* Last Name Không được chứa khoảng trắng và ký tự đặc biệt")
      }if(!validateLastName(firstname)){
         check = false;
         $("#errfirstname").text("* First Name Không được chứa khoảng trắng và ký tự đặc biệt")
      }if(!validateLastName(address)){
         check = false;
         $("#erraddress").text("* AddressKhông được chứa khoảng trắng và ký tự đặc biệt")
      }if(!validateLastName(city)){
         check = false;
         $("#errcity").text("* City Không được chứa khoảng trắng và ký tự đặc biệt")
      }if(!validateLastName(namecard)){
         check = false;
         $("#errnamecard").text("* Name Card Không được chứa khoảng trắng và ký tự đặc biệt")
      }if(!validateNumber(phone) || phone.length != 10){
         check = false;
         $("#errphone").text("* Vui Lòng Nhập Số, Đủ 10 ký tự.");
      }if(!validateNumber(zipcode) || zipcode.length != 5){
         check = false;
         $("#errzipcode").text("* Vui Lòng Nhập Số, Đủ 5 ký tự.");
      }if(!validateNumber(cvv) || cvv.length != 3){
         check = false;
         $("#errcvv").text("* Vui Lòng Nhập Số, Đủ 3 ký tự.");
      }if(!validateNumber(month) || Number(month) > 12){
         check = false;
         $("#errmonth").text("* Vui Lòng Nhập tháng bé hơn 13");
      }if(!validateNumber(year) || Number(year) < 2000){
         check = false;
         $("#erryear").text("* Vui Lòng Nhập năm lớn hơn năm 2000");
      }if(!validateEmail(email)){
         check = false;
         $("#erremail").text("* Vui Lòng email đúng định dạng");
      }if(!ischeckout){
         check = false;
         $("#errcheckbox").text("* Vui Lòng đánh dấu Check Me Out");
      }if(select == null){
         check = false;
         $("#errstate").text("* Vui Lòng chọn State");
      }if(formattedCardNumber.length !== 19){
         check = false;
         $("#errcardnumber").text("* Nhập Đủ 16 Số Carnumber")
      }if(check){
         listname.push({ID : id, FirstName : firstname, LastName : lastname, Email : email, Address : address, City : city, State : state, Zipcode : zipcode, Namecard : namecard, CarNumber : cardnumber, Phone : phone, Month : month, Year : year, CVV : cvv});
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
         $("#state").val("");
         $("#zipcode").val("");
         $("#namecard").val("");
         $("#cardnumber").val("");
         $("#month").val("");
         $("#year").val("");
         $("#cvv").val("");
      };
      displayList(listname);
   })

   function displayList(list){
      var listhtml = "";
   list.forEach(element => {
     
       listhtml += "<tr><td>"+element.FirstName+"</td> <td>"+ element.LastName+"</td> <td>"+element.Email+"</td> <td>"+element.Phone+"</td> <td>"+element.Address +"</td> <td>"+element.City+"</td> <td>"+element.State+"</td> <td>"+element.Zipcode+"</td> <td>"+element.Namecard+"</td> <td>"+element.CarNumber+"</td> <td>"+element.Month+"</td> <td>"+element.Year+"</td> <td>"+element.CVV+"</td> <td> <button class='btn btn-delete' data-id="+element.ID+"><i class='far fa-trash-alt  text-danger '></i> </button></td> </tr>"
      
   });
    $("#bodytable").html(listhtml)
   }

   $(document).on("click", ".btn-delete", (function(){
     var con = confirm("Bạn Có Chắc Chắn Muốn Xóa Users")
     if(con){
      var id = $(this).attr('data-id');
      listname = listname.filter((e) => e.ID !== id );
      displayList(listname);
     }
   }))


