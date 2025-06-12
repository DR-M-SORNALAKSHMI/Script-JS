// Create Object XMLHttpRequest
var request = new XMLHttpRequest();

// Create a connection and open it
request.open('GET', 'https://restcountries.com/v3.1/all?fields=name,capital,population,area,region', true);

// send the requst to server
request.send();

// Load server response
request.onload = function()
{
    // my fuctions
    // save the data from the server response
    var data = request.response;

    // Convert DATA to JSON format
    var jsonResult = JSON.parse(data);

    //console.log(jsonResult);

    // Get Country name
    for(var i=0;i<jsonResult.length  && i<5;i++)
    {
        console.log("Country Name: " + jsonResult[i].name.common + " Capital: " + jsonResult[i].capital + "Populations: " + jsonResult[i].population + " aera: " + jsonResult[i].area + " region: " + jsonResult[i].region);       }

   }



