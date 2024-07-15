
const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");
const clearButton = document.getElementById("clearButton");
var edit = document.getElementById("editItem");
const inputValue = document.getElementById("todoInput").value;
addButton.addEventListener("click", addItem);
clearButton.addEventListener("click", clearItems);
todoInput.addEventListener("keydown", function(e){
   if(e.keyCode === 13) {
      addItem();
   }
});

function addItem() {
   const task = todoInput.value.trim();
   if (task && task != "") {
      const li = document.createElement("li");
      li.innerHTML = `
         <p class="col-10 d-flex justify-conten-start"> ${task}</p>
         <b class="col-2 d-flex  justify-content-around  ">
         <span class="edit" onclick="editItem(this)"><i class="fas fa-pen text-primary "></i></span>
         <span class="delete" onclick="deleteItem(this)"><i class="fas fa-times-circle text-danger"></i></span>
         </b>
      `;
      todoList.appendChild(li);
      todoInput.value = "";
   }else {
      document.getElementById("erro").innerText = "Enter a task không được để trống"
   }

}
function editItem(span) {
   const li = span.parentElement.parentElement;
   const task = li.children[0];
   todoInput.value = task.innerText;
   document.getElementById("editButton").style.zIndex ="3";
   document.getElementById("addButton").style.opacity = "0";
   // todoInput.addEventListener("keydown", function (e){
   //    if(e.keyCode === 13) {
   //       task.innerHTML = todoInput.value;
   //       document.getElementById("editButton").style.zIndex ="0";
   //       document.getElementById("addButton").style.opacity = "1" ;
   //    }
   // });
     document.getElementById("editButton").addEventListener("click", function (e){
     if(todoInput.value && todoInput.value != ""){
      task.innerHTML = todoInput.value;
      document.getElementById("editButton").style.zIndex ="0";
      document.getElementById("addButton").style.opacity = "1" ;
     }else {
       document.getElementById("erro").innerText = "Enter a task không được để trống"
     }
    })
}

function deleteItem(span) {
   const li = span.parentElement.parentElement;
   li.remove();
}

function clearItems() {
   todoList.innerHTML = "";
}
