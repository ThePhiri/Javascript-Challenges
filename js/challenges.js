//challenge 1
function checkNum(x, y){
    
    var x = document.getElementById("x");
    var y = document.getElementById("y");
    var displayResult = document.getElementById("checkNumResult");
    
    if (x.value == 65 || y.value == 65){
       displayResult.innerHTML = "True" ;
    } else if( parseInt(x.value) + parseInt(y.value) == 65){
        displayResult.innerHTML = "True" ;
    } else {
        displayResult.innerHTML = "False" ;
    } 
}
//challenge 2

function areaTriangle(a, b, c){
    var a = 7;
    var b = 8;
    var c = 9;
    var result;
    var areaDisplay = document.getElementById("areaTriangle");
    
    result = "Area of a triangle with sides 7, 8 and 9 is " + parseInt(1/2 * (a + b + c));
    areaDisplay.innerHTML = result;
    
}

//challenge 3
function checkLargest(){
    
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);
    var displayLargest = document.getElementById("checkLargest");
    
    displayLargest.innerHTML = "Largest number is " + Math.max(num1, num2, num3);
    
}

//challenge 4
function convertTime(){
    
    var totalTime = parseInt(document.getElementById("totalTime").value);
    var displayTime = document.getElementById("displayTime");
    var hours = parseInt(totalTime / 60);
    var minutes = totalTime % 60;
    
    displayTime.innerHTML = "Time is " + hours + " hours and "  + minutes + " minutes ";
}

//challenge 5
function commonCharacters(){
    
    var string1 = document.getElementById("string1").value;
    var string2 = document.getElementById("string2").value;
    var commonCharacters = "";
    
    for (var i = 0; i < string1.length; i++ ){
	   for(var j = 0; j < string2.length; j++){
            if ( string1[i] == string2[j]){
               
                if(commonCharacters.indexOf(string1[i]) >  -1){
                    continue;
                } else {
                    commonCharacters +=  string1[i] + " ";
                }
      	     }
      }
    
  }
    document.getElementById("common").innerHTML = commonCharacters;
}


