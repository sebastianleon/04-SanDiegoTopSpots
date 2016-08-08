


$(document).ready(function () {
    $.getJSON("topspots.json",
    function (json) {	
        var tr;
        for (var i = 0; i < json.length; i++) {
            tr = $('<tr/>');
            tr.append("<td>" + json[i].name + "</td>");
            tr.append("<td>" + json[i].description + "</td>");
            tr.append("<td> <button class='btn'>" + 
				"<a href=https://www.google.com/maps?q=" +
				json[i].location[0] + "," + json[i].location[1] + 
				">Open in Google Maps</a></button></td>");
            $('table').append(tr);
        }
    });






// *************VERSION THREE************

// ALL DATA IS NOW ALIGNED TO ITS HEADER NAME DESCRIPTION AND LOCATION. THEY DO NOT LINE UP THOUGH I BELIEVE THE CAUSE OF THIS IS HOW I WROTE THE JS SEPRATING THEM EACH INTO ITS OWN COLUMN SO THAT THEY WOULD BE SEPERATE IS SOME AY SHAPE OR FORM. GOING TO GO BACK TO ORIGINAL VERSION TO TEST OUT DIFFERENT ROUTE.


// $.getJSON( "topspots.json", function( data ) {
//   var nameMain = [];
//   $.each( data, function( key , value ) {
//     nameMain.push( "<li id='" + key + "'>" + value.name + "</li>" );
//   });
 
//   $( "<ul/>", {
//    html: nameMain.toString( "" )
//   }).appendTo( "#name" );


// var descriptionMain=[];
// $.each( data, function( key , value ) {
//     descriptionMain.push( "<li id='" + key + "'>" + value.description + "</li>" );
//   });
 
//   $( "<ul/>", {
//    html: descriptionMain.toString( "" )
//   }).appendTo( "#description" );

//   var locationMain=[];
// $.each( data, function( key , value ) {
//     locationMain.push( "<li id='" + key + "'>" + value.location + "</li>" );
//   });
 
//   $( "<ul/>", {
//    html: locationMain.toString( "" )
//   }).appendTo( "#location" );






// ***************2ND VERSION, GETTING CLOSE. NOW HAS THREE SEPERATE ROWS FOR NAME DESCRIPTION AND LOCATION BUT JUST REPEATS THE ENTIRE ARRAY ON EACH ONE.*************

// $.getJSON( "topspots.json", function( data ) {
//   var items = [];
//   $.each( data, function( key , value ) {
//     items.push( "<li id='" + key + "'>" + value.name +  "'>" + value.description + "'>" + value.location + "</li>" );
//   });
 
//   $( "<ul/>", {
//    html: items.join( "" )
//   }).appendTo( "td" );















// **********THIS CODE WORK FOR SENDING THE JSON DATA TO THE HTML BUT ISN"T BEING PUT CORRECTLY INTO THE TABLE.**************
// FOUND IT ONLINE IN THE NEED TO TWEAK TO WORK WITH WHAT I"M DOING BUT HOW?

// $(document).ready(function(){


// $.getJSON( "topspots.json", function( data ) {
//   var items = [];
//   $.each( data, function( key , value ) {
//     items.push( "<li id='" + key + "'>" + value.name +  "'>" + value.description + "'>" + value.location + "</li>" );
//   });
 
//   $( "<ul/>", {
//     "class": "my-new-list",
//     html: items.join( "" )
//   }).appendTo( "body" );

// });








});


