function showAll(){
    $(".sweet").show();
    $(".cupcake").show();
    $(".cake").show();
    $(".dougnut").show();
};
$("#all").click(showAll);
function showCake(){
    $(".sweet").hide();
    $(".cupcake").hide();
    $(".cake").show();
    $(".dougnut").hide();
};
$("#cakes").click(showCake);

function showCupcake(){
    $(".sweet").hide();
    $(".cake").hide();
    $(".dougnut").hide();
    $(".cupcake").show();
};
$("#cupcakes").click(showCupcake);
function showSweet(){
    $(".sweet").show();
    $(".cake").hide();
    $(".dougnut").hide();
    $(".cupcake").hide();
};
$("#sweets").click(showSweet)
function showDougnuts(){ 
 $(".sweet").hide();
$(".cake").hide();
$(".dougnut").show();
$(".cupcake").hide();
};

$("#dougnuts").click(showDougnuts);

$("#input").on("input",function(){
    input = $("#input").val();
    if(input.toLowerCase().match("item")||input.toLowerCase().match("all")){
     showAll();
    }else if(input.toLowerCase().match("cupcake")){
      showCupcake();
    }else if(input.toLowerCase().match("cake")){
      showCake();
    }else if(input.toLowerCase().match("sweet")){
      showSweet();
    }else if(input.toLowerCase().match("dougnut")){
      showDougnuts();
    }else{
      $(".sweet").hide();
      $(".cupcake").hide();
      $(".cake").hide();
      $(".dougnut").hide();
    }
  }
)

$("#search").click(function(){
  input = $("#input").val();
  if(input.toLowerCase().match("item")){
   showAll();
  }else if(input.toLowerCase().match("cupcake")){
    showCupcake();
  }else if(input.toLowerCase().match("cake")){
    showCake();
  }else if(input.toLowerCase().match("sweet")){
    showSweet();
  }else if(input.toLowerCase().match("dougnut")){
    showDougnuts();
  }else{
    $(".sweet").hide();
    $(".cupcake").hide();
    $(".cake").hide();
    $(".dougnut").hide();
  }
})