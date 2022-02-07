// var form = document.getElementById("quiz");
// form.addEventListener("submit", function(){
  
// })

function inButton() {
  // code here
  //document.write("Time starts now!");
  var score = 0;
  var currentAnswer1 = document.one.quiz1.value;
  var currentAnswer2 = document.one.quiz2.value;
  var currentAnswer3 = document.one.quiz3.value;
  var currentAnswer4 = document.one.quiz4.value;
  var currentAnswer5 = document.one.quiz5.value;
  var currentAnswer6 = document.one.quiz6.value;

  var result=document.getElementById("display");

  if (currentAnswer1=='Yes'){score+=10};
  if (currentAnswer2=='Alphabet'){score+=10};
  if (currentAnswer3=='True'){score+=10};
  if (currentAnswer4=='Helloworld'){score+=10};
  if (currentAnswer5=='Anintegerorafloating-pointnumber'){score+=10};
  if (currentAnswer6=='True'){score+=10};

  one.style.display="none"
  // alert(result.textContent)
  result.textContent=score

    
  if (score==60) {
    result.textContent="Your score is 100%. Congratulation! you passed!";
  } else if (score==50) {
    result.textContent="Your score is 83%. Congratulation! you passed!";
  } else if (score==40) {
    result.textContent="Your score is 66%. Congratulation! you passed fairly!";
  } else if (score==30) {
    result.textContent="Your score is 50%. Congratulation! you passed farlry!";
  } else {
    result.textContent="Your score is below average . Kindly retake the test!"
  }
}

