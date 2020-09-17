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
          "<td>" + "<p><strong>SKILL</strong></p>" + skillContent + 
          "<p><strong>STRENGTH</strong></p>" + strengthContent +  
          "<p><strong>WOD</strong></p>" + elem.wod +  "</td>" + 
        "</tr>";

        var tuesday =
        "<tr>" +
          "<th scope='row'>"+ elem.id + "</th>" +
          "<td>" + strengthContent +  "</td>" +
          "<td>" +  elem.wod +  "</td>" + 
          "<td>" +  oddObjectsContent +  "</td>" + 
        "</tr>";

        var wednesday =
        "<tr>" +
          "<th scope='row'>"+ elem.id + "</th>" +
          "<td>" + skillContent +  "</td>" +
        "</tr>";

        var thursday =
        "<tr>" +
            "<th scope='row'>"+ elem.id + "</th>" +
            "<td>" + skillContent + "</td>" +
            "<td>" + strengthContent +  "</td>" +
            "<td>" +  elem.wod +  "</td>" + 
            "<td>" +  oddObjectsContent +  "</td>" + 
        "</tr>";

        var friday =
        "<tr>" +
            "<th scope='row'>"+ elem.id + "</th>" +
            "<td>" + skillContent + "</td>" +
            "<td>" + strengthContent +  "</td>" +
            "<td>" +  elem.wod +  "</td>" + 
            "<td>" +  oddObjectsContent +  "</td>" +
        "</tr>";

        var saturday =
        "<tr>" +
          "<th scope='row'>"+ elem.id + "</th>" +
          "<td>" + skillContent +  "</td>" +
          "<td>" + strengthContent +  "</td>" +
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