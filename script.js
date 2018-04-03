function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    
  }
}



var f=new Array()
f[0]="Wrong! Try again"
f[1]="Nope!"
f[2]="My sources say no" 

var g = new Array()  
g[0]="Correct!"  
g[1]="Signs point to yes!"
g[2]="Tubular!"
$(document).ready(function(){
 $(".correct").hide();
 $("#answer").hide(); 
 $("#enter").hide(); 
 $("#messageWrong").hide();
  $("#help").hide();
 
  function Start(){
    $(".correct").hide();
    $("#answer").show(); 
    $("#enter").show();
    $("#help").show();
    $("#answer").focus();
    $("#answer").val("");
    
 var a=Math.floor((Math.random() * 10) +1);
 var b=Math.floor((Math.random() * 10) +1);
 var ab=Math.floor(Math.random() * 2);
    if (ab==0)
 {var c=a+b;
 var d="X - " + a + " = " + b + "</br> Solve for X";
 var help="X - Y = Z. Solve for X. </br> X = Z + Y";
 }
    else{
      if (a>b){
        var c=a-b;
        var d="X + " + b + " = " + a + "</br> Solve for X";
        var help="X + Y = Z. Solve for X. </br> X = Z - Y";
      }
      else{
       var c=b-a;
        var d="X + " + a + " = " + b + "</br> Solve for X";
        var help="X + Y = Z. Solve for X. </br> X = Z - Y";
      }
    }
 
 $("#question").html(d);
  
  $("#enter").click(function(){
    var e=$("#answer").val();
    var check=Math.floor(Math.random() * 3); 
    var wrong=f[check];
    var right=g[check];
    if(c==e){
       $(".correct").show();
    $("#messageRight").html(right);
     $("#new").show();
      $("#messageWrong").html("");
      $("#close").hide();    
    } 
    else{
      $("#messageWrong").html(wrong);
      $(".correct").hide();
      $("#answer").focus();
      $("#messageWrong").show();
    }
    });
    $("#help").click(function(){
      $(".correct").show();
      $("#messageRight").html(help);
      $("#new").hide();
      $("#close").show();
    });
   
  }
     
  
  $("#new").click(function(){
  Start();
  });
  
  $("#close").click(function(){
  $(".correct").hide();
  });
 
  $("#start").click(function(){
    Start();
  });
  
  $("input").keyup(function(e) {
    if(e.which == 13) {
    $("#enter").click();
    }
    });
  
  });