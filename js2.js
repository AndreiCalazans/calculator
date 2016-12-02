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
