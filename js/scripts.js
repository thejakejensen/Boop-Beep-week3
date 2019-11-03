//buisness
var numberSting = function(numberInput){
  var emptyArray = [];
  for (var i=0; i<=numberInput; i++){
    if (i.toString().includes("3")) {
      emptyArray.push("im sorry, Dave. I'm afraid I cant do that");
    } else if (i.toString().includes("2")) {
      emptyArray.push("Boop!");
    } else if (i.toString().includes("1")) {
      emptyArray.push("Beep!");
    } else {
      emptyArray.push(i); //if the other ones dont catch then it just returns the normal number
    }
  }
  return emptyArray;
}
// ui logic
$(document).ready(function() {
  $("form#babam").submit(function(event) {
    event.preventDefault();

    var finalNum = parseInt($("input#enterNumber").val());
    var finalResult = numberSting(finalNum);

    $("<li>" + finalResult + "</li>").appendTo("#answer");
    $("#answer").last().click(function() {
    $("#answer").empty();
    });
  });
});
