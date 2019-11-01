$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var inputNumber = parseInt($("input#enterNumber").val())
    var newArray = []
    var inputChange = inputNumber
    for(i=1; i < newArray; i++){
      newArray.push(inputChange)

      inputChange = 1;
      }
      for (i = 0; i < newArray.length; i ++){
        if(newArray[i].toString().includes(3)){
        newArray[i] = "I'm sorry, Dave. I'm afraid I can't do that";
      }
      else if (newArray[i].toString().includes(2)){
        newArray[i] = "boop";
      }
      else if (newArray[i].toString().includes(2)){
        newArray[i] = "beep";
      }
 });
});
