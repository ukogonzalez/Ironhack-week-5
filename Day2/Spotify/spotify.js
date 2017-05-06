$(document).on('ready', function() {

  $(".ButtonArtistSearch").click(function(){
    event.preventDefault();
    requestArtist();
  });

});

function requestArtist() {
  var artist = $("#artistName").val();
  $.ajax({
    type:"GET",
    url:"https://api.spotify.com/v1/search?type=artist&query=" + artist,
    success: showArtist,
    error: handleError
  });
}

function showArtist(response){
  console.log('Success!');
  console.log(response);
  debugger;
  $('#ArtistList').append('<li>');
}

function handleError(error){
  console.log("Error!");
  console.log(error);
}
