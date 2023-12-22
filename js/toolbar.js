//jquery 샘플
$(document).ready(function(){

  $("#i_viewall").on("click", function () {
    console.log($('#i_viewall').attr('class'));
    if($('#i_viewall').attr('class') != 'active'){
      $(this).addClass("active");
    }else{
      $(this).addClass("");
    }


    //alert("확대 버튼 누름");

    //console.log($('#i_viewall').attr('class'));
    });
 });



 