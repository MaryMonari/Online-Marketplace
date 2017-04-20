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
  $("div#pay").click(function(event){
     whatToSay = "Thank You '.fullnames' for buying with us!";
     alert(whatToSay);
});
  });
