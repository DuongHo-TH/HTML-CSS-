$("#danhsachmay").click( function(){
    $(".danhsachmay").show();
    $(".danhsachkh").hide();
    $(".danhsachdv").hide();
  });
  $("#danhsachkh").click( function(){
    $(".danhsachmay").hide();
    $(".danhsachkh").show();
    $(".danhsachdv").hide();
  });
  $("#danhsachdv").click(function(){
    
    $(".danhsachmay").hide();
    $(".danhsachkh").hide();
    $(".danhsachdv").show();
  });