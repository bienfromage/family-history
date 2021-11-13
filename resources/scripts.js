"use strict";

function showExplanation(divId){
  let explanations = document.getElementsByClassName('explanation-box');
  explanations[divId].style.display="block";
  document.getElementById("grayOverlay").style.display="block";
}

function closeExplanation(){
  let explanations = document.getElementsByClassName('explanation-box');
  for(let i = 0; i< explanations.length; i++){
    explanations[i].style.display="none";
  }
  document.getElementById("grayOverlay").style.display="none";
}
