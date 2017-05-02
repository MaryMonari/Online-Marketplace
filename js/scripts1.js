$(document).ready(function(){
  $("#details form").submit(function(event){
     $(".fullnames").val();
     $(".address").val();
     $(".product").val();
     var pno =$("#pno").val();


    event.preventDefault();
  });
});


$(document).ready(function(){
   $(".clickable").click(function(){
   $(".receipt").toggle();
    });
});
