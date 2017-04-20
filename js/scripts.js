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
  $("#pay").click(function(event){
     whatToSay = "Thank You for buying with us!";
     alert(whatToSay);
});
  });
