$(document).ready(function () {


    $.ajax({
        url: 'http://localhost:8080/programosa/workout',
        async: true,
        success: successCallback,
        error: errorCallback
    });

});


function populateTable(data){

    data.forEach(function (elem){       

        var skill = elem.skill.split(",");
        var strength = elem.strength.split(",");
        var oddObjects = elem.oddObjects.split(",");

        var skillContent = "";
        var strengthContent = "";
        var oddObjectsContent = "";

        skill.forEach(skillFunction);
        strength.forEach(strengthFunction);
        oddObjects.forEach(oddObjectsFunction);

        function skillFunction(item){
            skillContent += "<p>" + item + "<p>";
        }

        function strengthFunction(item1){
            strengthContent += "<p>" + item1 + "<p>";
        }

        function oddObjectsFunction(item2){
            oddObjectsContent += "<p>" + item2 + "<p>";
        }


        var monday =
        "<tr>" +
          "<div> <td valign='top'>" + "<p><strong>SKILL</strong></p>" + skillContent + "</div>" + 
          "<div> <td valign='top'> <p><strong>STRENGTH</strong></p>" + strengthContent + "</td> </div>" + 
          "<div> <td valign='top'> <p><strong>WOD</strong></p>" + elem.wod +  "</td> </div>" + 
        "</tr>";

        var tuesday =
        "<tr>" +
          "<div> <td valign='top'>" + "<p><strong>SKILL</strong></p>" + strengthContent + "</div>" + 
          "<div> <td valign='top'> <p><strong>STRENGTH</strong></p>" + elem.wod + "</td> </div>" + 
          "<div> <td valign='top'> <p><strong>WOD</strong></p>" + oddObjectsContent +  "</td> </div>" + 
        "</tr>";

        var wednesday =
        "<tr>" +
          "<div> <td valign='top'>" + "<p><strong>SKILL</strong></p>" + skillContent + "</div>" + 
        "</tr>";


        var thursday =
        "<tr>" +
          "<div> <td valign='top'>" + "<p><strong>SKILL</strong></p>" + skillContent + "</div>" + 
          "<div> <td valign='top'> <p><strong>STRENGTH</strong></p>" + strengthContent + "</td> </div>" + 
          "<div> <td valign='top'> <p><strong>Front Squat</strong></p>" + elem.wod +  "</td> </div>" + 
          "<div> <td valign='top'> <p><strong>WOD</strong></p>" + oddObjectsContent +  "</td> </div>" + 
        "</tr>";

        var friday =
        "<tr>" +
        "<div> <td valign='top'>" + "<p><strong>DEADLIFT</strong></p>" + skillContent + "</div>" + 
        "<div> <td valign='top'> <p><strong>CARDIO</strong></p>" + strengthContent + "</td> </div>" + 
        "<div> <td valign='top'> <p><strong>WOD</strong></p>" + elem.wod +  "</td> </div>" + 
        "<div> <td valign='top'> <p><strong>ODD OBJECTS</strong></p>" + oddObjectsContent +  "</td> </div>" + 
      "</tr>";

        var saturday =
        "<tr>" +
        "<div> <td valign='top'>" + "<p><strong>SKILL</strong></p>" + skillContent + "</div>" + 
        "<div> <td valign='top'> <p><strong>WOD</strong></p>" + strengthContent + "</td> </div>" + 
      "</tr>";
        

        if(elem.id === 1){
            $(monday).appendTo("#workouTableM");
        }
        if(elem.id === 2){
            $(tuesday).appendTo("#workouTableT");
        }
        if(elem.id === 3){
            $(wednesday).appendTo("#workouTableW");
        }
        if(elem.id === 4){
            $(thursday).appendTo("#workouTableTH");
        }
        if(elem.id === 5){
            $(friday).appendTo("#workouTableF");
        }
        if(elem.id === 6){
            $(saturday).appendTo("#workouTableS");
        }
           
    })
}




function successCallback(response) {
    populateTable(response);
}

function errorCallback(request, status, error) {
    // do something with the error
    //populateTable(JSON.parse(response));
}