const inputadd = document.getElementById("input");
const list = document.getElementById("todoList");
const buttonadd = document.getElementById("addItem");
const inputedit = document.getElementById("inputedit");
const buttonedit = document.getElementById("buttonedit");
var liz
var taks


function additem(){
    const taks = inputadd.value;
   if(inputadd.value && inputadd.value != ""){
    const li = document.createElement("li");
    li.innerHTML = `<div class="row">
    <p class="col-10 d-flex  justify-content-start "> ${taks} </p> 
    <b class="col-2 d-flex justify-content-around  ">
    <span onclick="editli(this)"><i class="fas fa-pen text-primary "></i></span>
    <span onclick="deleteli(this)"><i class="fas fa-times-circle text-danger"></i></span>
    </b>
    </div>`;
    list.appendChild(li);
    inputadd.value = "";
     }else{
        document.getElementById("erro").innerText = "Hãy Nhập Tên Vào Input Full Name";
     }
}
buttonadd.addEventListener("click", additem);
inputadd.addEventListener("keydown", function(e){
    if(e.keyCode === 13){
     additem();
    }
});


function editli(span){
     liz = span.parentElement.parentElement;
    taks = liz.children[0];
    inputedit.style.zIndex = "2";
    buttonedit.style.zIndex = "2";
    inputedit.value = taks.innerText;
    inputedit.focus();
  
  
            
 }
 function edit(){
    if(inputedit.value && inputedit.value != ""){
        taks.innerText = inputedit.value
        inputedit.style.zIndex = "0";
        buttonedit.style.zIndex = "0";
    }
          else{
             document.getElementById("erro").innerText = "Hãy Nhập Tên Vào Input Full Name";
          }
        
    }
    buttonedit.addEventListener("click", edit)
    inputedit.addEventListener("keydown", function(e){
                if(e.keyCode === 13){
          edit();
                }
            });


function deleteli(span){
 var li = span.parentElement.parentElement;
 li.remove();
}



function cleartodoList(){
    list.innerHTML = "";
}
 

