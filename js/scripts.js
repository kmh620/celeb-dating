$(document).ready(function() {
  $("#formAboutYou").submit(function(event){
    var ageGroup = $("input:radio[name=inputAgeGroup]:checked").val();
    var gender = $("input:radio[name=inputGender]:checked").val();
    var hair = $("input:radio[name=inputHair]:checked").val();
    var activities = $("input:radio[name=inputActivities]:checked").val();

    // if ((ageGroup === "18-21" || ageGroup === "22-29") && gender === "Male") {
    //   $("#celebrityA").show();
    // }
    //
    // if (ageGroup === "30-40" && gender === "Male") {
    //   $("#celebrityB").show();
    // }
    //
    // if (ageGroup === "41+" && gender === "Male") {
    //   $("#celebrityC").show();
    // }

    if (gender === "Male") { /*This starts the wrapper of if equals male*/

        if (ageGroup === "18-21" || ageGroup === "22-29") {
          $("#celebrityA").show();

        } else {
          $("#celebrityB").show();
        }

  } /*This ends the wrapper of if equals male*/
      else { /*This starts the wrapper of if equals female*/


        if (ageGroup === "18-21" || ageGroup === "22-29") {
          $("#celebrityC").show();

        } else {
          $("#celebrityD").show();
        }


      } /*This ends the wrapper of if equals female*/






    event.preventDefault();
  });














  // $("#formOne").submit(function(event) {
  //   // var age = parseInt("#formOne");
  //   var age = $("input#inputAge").val();
  //
  //   if (age >=18) {
  //     $("#oldEnough").show();
  //     $("#tooYoung").hide();
  //   } else {
  //     $("#tooYoung").show();
  //     $("#oldEnough").hide();
  //   }
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //   event.preventDefault();
  // });









});
