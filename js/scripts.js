$(document).ready(function() {
  $("#formAboutYou").submit(function(event){
    var ageGroup = $("input:radio[name=inputAgeGroup]:checked").val();
    var gender = $("input:radio[name=inputGender]:checked").val();
    var hair = $("input:radio[name=inputHair]:checked").val();
    var activities = $("input:radio[name=inputActivities]:checked").val();

    if (ageGroup === "18-21" && gender === "Male" && hair === "Blonde" && activities === "Outdoor Stuff") { /*This starts the wrapper celebrity A*/

          $("#celebrityA").show();
          $("#celebrityB").hide();
          $("#celebrityC").hide();
          $("#celebrityD").hide();
          $("#celebrityE").hide();
          $("#celebrityF").hide();
          $("#celebrityG").hide();

      } /*This ends the wrapper of celebrity A*/

      else  if (ageGroup === "22-29" && gender === "Male" && hair === "Brunette" && activities === "Reading") { /*This starts the wrapper celebrity B*/

        $("#celebrityA").hide();
        $("#celebrityB").show();
        $("#celebrityC").hide();
        $("#celebrityD").hide();
        $("#celebrityE").hide();
        $("#celebrityF").hide();
        $("#celebrityG").hide();

      } /*This ends the wrapper celebrity B*/

      else  if (ageGroup === "30-40" && gender === "Male" && hair === "Redhead" && activities === "Travel") { /*This starts the wrapper celebrity C*/

        $("#celebrityA").hide();
        $("#celebrityB").hide();
        $("#celebrityC").show();
        $("#celebrityD").hide();
        $("#celebrityE").hide();
        $("#celebrityF").hide();
        $("#celebrityG").hide();

      } /*This ends the wrapper celebrity C*/

      else if (ageGroup === "18-21" && gender === "Female" && hair === "Blonde" && activities === "Bar Hopping") { /*This starts the wrapper celebrity D*/

        $("#celebrityA").hide();
        $("#celebrityB").hide();
        $("#celebrityC").hide();
        $("#celebrityD").show();
        $("#celebrityE").hide();
        $("#celebrityF").hide();
        $("#celebrityG").hide();

      } /*This ends the wrapper celebrity D*/

      else if (ageGroup === "22-29" && gender === "Female" && hair === "Brunette" && activities === "Outdoor Stuff") { /*This starts the wrapper celebrity E*/

        $("#celebrityA").hide();
        $("#celebrityB").hide();
        $("#celebrityC").hide();
        $("#celebrityD").hide();
        $("#celebrityE").show();
        $("#celebrityF").hide();
        $("#celebrityG").hide();

      } /*This ends the wrapper celebrity E*/

      else if (ageGroup === "30-40" && gender === "Female" && hair === "Redhead" && activities === "Reading") { /*This starts the wrapper celebrity F*/

        $("#celebrityA").hide();
        $("#celebrityB").hide();
        $("#celebrityC").hide();
        $("#celebrityD").hide();
        $("#celebrityE").hide();
        $("#celebrityF").show();
        $("#celebrityG").hide();

      } /*This ends the wrapper celebrity F*/

      else { /*This starts the wrapper celebrity G - NO MATCH*/

        $("#celebrityA").hide();
        $("#celebrityB").hide();
        $("#celebrityC").hide();
        $("#celebrityD").hide();
        $("#celebrityE").hide();
        $("#celebrityF").hide();
        $("#celebrityG").show();

      } /*This ends the wrapper celebrity G NO MATCH*/

    event.preventDefault();
  });
});
