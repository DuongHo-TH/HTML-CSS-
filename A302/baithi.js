$(document).ready(function() {
  
    function displayEmploy(list){
        usershtml = ""
      list.forEach(users => {
        usershtml += `<tr>
        <td>`+ users.index+`</td>
        <td>`+ users.name+`</td>
        <td>`+ users.depa+`</td>
        <td>`+ users.phone+`</td>
        <td><button class="buttondelete" data-id=`+users.id+`><i class="fa-solid fa-trash-can"></i></button>
        <button class="btn-edit" data-id=`+users.id+`><i class="fas fa-pen "></i></button>
        </td>
    </tr>`
      });
      $(`#bodytable`).html(usershtml);
      displaydepar(listemploy);
     }

     function displaydepar(list){
      let   admin = `Administration`;
      let cus = `Customer Service`;
      let hun = `Hunman Resource`;
    
        var countadmin = list.filter((e) => admin == e.depa)
        var countcus = list.filter((e) => e.depa == cus)
        var counthun = list.filter((e) => hun == e.depa)

        var adcount = countadmin.length;
        var cuscount = countcus.length;
        var huncount = counthun.length;
        $(`#countadmin`).text(adcount);
        $(`#countcus`).text(cuscount);
        $(`#counthun`).text(huncount);
     }




    $(`#search`).on(`input`, function(){
       let inputsearch = $(`#search`).val();
       if(inputsearch.length >= 3){
        var employ = listemploy.filter((e) => inputsearch == e.name || inputsearch == e.depa || inputsearch == e.phone 
        )
        displayEmploy(employ);
       }else{
        displayEmploy(listemploy);
        displaydepar(listemploy);
       }
    });



 $(`#buttonadd`).on(`click`, function(){
    $(`#addemploy`).show();
    $(`.update`).hide();
    $(`#buttonadd`).disabled;
 });

 $(`#Submit`).on(`click`, function(){
    var addname = $(`#name`).val();
    var depart = $(`#select`).val();
    var sdt = $(`#phone`).val();
    var index = (listemploy.length + 1)
    var id = randomID();
    var checkadd = true;
    if(!validateLastName(addname)|| addname.length <10 || addname.length > 50){
          $(`#errname`).text("* Tên Không Hợp Lệ ")
          checkadd = false;
    }
    if(depart == null){
        $(`#errdep`).text("* Chọn Deparment ")
        checkadd = false;
    }
    if(sdt.length < 9 || sdt.length > 11){
        $(`#errphone`).text("* SĐT Không Hợp lệ")
        checkadd = false;
    }
    if(checkadd){
        listemploy.push( {id : id, index : index, name : addname, depa : depart, phone : sdt } )
        displayEmploy(listemploy);
       
        $(`#buttonadd`).enable;
        $(`#addemploy`).hide();
        $(`#errphone`).text("")
        $(`#errdep`).text("")
        $(`#errname`).text("")
        $(`#name`).val("");
        $(`#select`).val("");
        $(`#phone`).val("");
        displaydepar(listemploy);
    }
 })
 $(`#cancel`).on(`click`, function(){
        $(`#buttonadd`).enable
        $(`#addemploy`).hide();
        $(`#errphone`).text("")
        $(`#errdep`).text("")
        $(`#errname`).text("")
        $(`#name`).val("");
        $(`#select`).val("");
        $(`#phone`).val("");
 })
 $(`#cancelupdate`).on(`click`, function(){
    $(`#buttonadd`).enable
    $(`.update`).hide();
    $(`#errphone`).text("")
    $(`#errdep`).text("")
    $(`#errname`).text("")
    $(`#name`).val("");
    $(`#select`).val("");
    $(`#phone`).val("");
})
$(`#Submitupdate`).on(`click`, function(){
    console.log("aaa")
     addname = $(`#name`).val();
     depart = $(`#select`).val();
     sdt = $(`#phone`).val();
     id = randomID();
     checkadd = true;
    if(!validateLastName(addname)|| addname.length <10 || addname.length > 50){
          $(`#errname`).text("* Tên Không Hợp Lệ ")
          checkadd = false;
    }
    if(depart == null){
        $(`#errdep`).text("* Chọn Deparment ")
        checkadd = false;
    }
    if(sdt.length < 9 || sdt.length > 11){
        $(`#errphone`).text("* SĐT Không Hợp lệ")
        checkadd = false;
    }
    if(checkadd){
        listemploy.forEach(e => { if(e.id !== iditem){
            e.id = id;
            e.name = addname;
            e.depa = depart;
            e.phone = sdt; 
        }
            
        });
        displayEmploy(listemploy);
        displaydepar(listemploy);
        $(`#buttonadd`).enable;
        $(`#addemploy`).hide();
        $(`#errphone`).text("")
        $(`#errdep`).text("")
        $(`#errname`).text("")
        $(`#name`).val("");
        $(`#select`).val("");
        $(`#phone`).val("");
    }
});
var iditem;
$(document).on(`click`,`.buttondelete`, (function(){
     let con = confirm("Có Chắc Chắn Muốn xóa")
     if(con){
     iditem = $(this).attr('data-id');
    listemploy = listemploy.filter((e) => e.id !== iditem );
    displayEmploy(listemploy);
     displaydepar(listemploy);
    }
}));

let temp;
$(document).on(`click`,`.btn-edit`, (function(){
   $(`.update`).show();
   $(`#addemploy`).hide();
    let id = $(this).attr('data-id');
        temp = listemploy.find((ele) => ele.id === id)
        listemploy.forEach(element => {
            console.log(id);
            if(element.id == id){
                $(`#nameupdate`).val(element.name);
              var newOption = $("<option></option>").attr("value", + element.depa).text(element.depa);
               $(`#selectupdate`).find("option[value='0']").replaceWith(newOption);
                $(`#phoneupdate`).val(element.phone);
            }
        })
}));
 function validateNumber(input){
    const regex_number = /[0-9]/;
    return regex_number.test(input);
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

 function validateLastName(input) {
    const regex_name = /^[a-zA-Z]+$/;
    return regex_name.test(input);
 }

    var listemploy = [{
       id:`12345`,index : `1`, name : `Nguyen van A`, depa : `Administration`, phone : `+84 777797979`
    },
{ id:`123456`, index : `2`, name : `Nguyen van B`, depa : `Customer Service`, phone : `+84 667797979`},
];
      displayEmploy(listemploy);
      displaydepar(listemploy);




});