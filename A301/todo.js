$(document).ready(function() {


    function generateUUID() { // Public Domain/MIT
        var d = new Date().getTime();//Timestamp
        var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16;//random number between 0 and 16
            if (d > 0) {//Use timestamp until depleted
                r = (d + r) % 16 | 0;
                d = Math.floor(d / 16);
            } else {//Use microseconds since page-load if supported
                r = (d2 + r) % 16 | 0;
                d2 = Math.floor(d2 / 16);
            }
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }

   let todolist = [];
   var temp;

   $(".btn-add").click(function(){
     var value = $("#input").val();
     var id = generateUUID();
     todolist.push({id : id, value : value});
     $("#input").val("");
     showlistToDo();
     console.log(todolist)
   });
    
   function showlistToDo(){
    var list = '';
    todolist.forEach((todo) => {
        list+= "<li  id='" + todo.id + "'> <span>" + todo.value + '</span><button class="btn-edit"><i class="fas fa-pen text-primary"></i></button><button class="btn-delete"><i class="fas fa-times-circle text-danger"></i></button></li>';
    });
    $('.todolist').html(list);
   }
 
      $(document).on("click", ".btn-delete", (function (){
        var id = $(this).parent().attr('id');
        todolist = todolist.filter(function(todo){
            return todo.id !==id;
        });
        showlistToDo();
      }))

      $(document).on("click", ".btn-edit", (function(){
        $(".btn-update").show();
        $(".btn-add").hide();
        let id = $(this).parent().attr('id');
        temp = todolist.find((ele) => ele.id === id)
        todolist.forEach(element => {
            if(element.id === id){
                $("#input").val(element.value);
            }
        }); 
      }))
      $(".btn-update").click(function(){
        let val = $("#input").val();
        temp.value = val;
        console.log(todolist);
        showlistToDo();
        $(".btn-update").hide();
        $(".btn-add").show();
    })

})