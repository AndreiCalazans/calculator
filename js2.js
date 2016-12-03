var answer ;
function result(){
  answer = eval(calcform.display.value);
  calcform.display.value = calcform.display.value.concat(" = " + answer)
}

calcform.display.value = "";
function displayvalue(n){
  if (n == "÷" ){
    n = "/";
  }else if ( n == "x"){
    n = "*";
  }

  if (/[/*+-]/.test(n) && typeof(answer) == "number" ){
    calcform.display.value = answer;
    answer = "";
  }
  calcform.display.value = calcform.display.value.concat(n);
}
function clearEntry(){
  calcform.display.value = calcform.display.value.substr(0 , calcform.display.value.length - 1 );
}
function allClear(){
  calcform.display.value = "";
  answer = "";
}

document.addEventListener("keydown", function(n){
  console.log(n);
  if(/[0-9/*+-]/.test(n.key)){
    if (/[/*+-]/.test(n.key) && typeof(answer) == "number" ){
      calcform.display.value = answer;
      answer = "";
    }

    calcform.display.value = calcform.display.value.concat(n.key);

  }else if (n.keyCode == 13){
    result();
  }else if(n.which == 8){
    clearEntry();
  }
})
