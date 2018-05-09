
//create function to validate email entry
//pass in one parameter 
function emailCheck(email) {
  //create regex variable
  var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //check against regex pattern for match
  return emailRegex.test(email);
}



function validate() {
  $("#result").text("");
  //create variables
  var email = $("#email").val();
  var SelectedInter = $("#selectInters").val();
  //value of the feild logged into browser console
  console.log(email);
  if(email){
  //call on the emailCheck function to validate email input
  //if the entered email does not match the regex, error message appears 
      if (!emailCheck(email)) { 
          $("#result").text("Please enter a valid email address");
        //otherwise
      }else{
        //if user input does match the regex pattern disable the button
        $("#signupNow").attr("disabled","disabled");
        //and show text "Submitting..."
        $("#signupNow").text("Submitting...");

        //show a loading state for 2 seconds to simulate an HTTP request
       setTimeout(update, 2000);
      }
     }
     //if the user input does not match the regex then:
  else {
    //get element "result" by ID and display error message
          $("#result").text("Please enter a valid email address");
  }
  //prevent default behaviour 
  return false;
}


function update(){
  //value of the field logged into browser console
  console.log("finished");
  //get element by ID and show thanks message
  $("#formSubmission").replaceWith($("#revealThanks"));
  //make thanks message visable
  $("#revealThanks").css("visibility", "visible");
}


