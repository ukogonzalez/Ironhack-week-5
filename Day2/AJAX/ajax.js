$(document).on('ready', function() {

  $(".js-showC").click(requestCharacters);
  $(".js-submitC").click(submitCharacter)

});

function requestCharacters() {
  $.ajax({
    type:"GET",
    url:"https://ironhack-characters.herokuapp.com/characters",
    success: showCharacters,
    error: handleError
  });
}

function showCharacters(response){
  console.log('Success!');
  console.log(response);
  for (var i = 0; i < response.length; i++) {
    $('#full-list-character').append('<li>' + "Name: " + response[i].name + " ----- Occupation : " + response[i].occupation + " ----- Weapon: " + response[i].weapon + '</li>')
  }
}

function handleError(error){
  console.log("Error!");
  console.log(error);
}

function submitCharacter () {

  var newCharacter = {
    name: $('#characterName').val(),
    occupation: $('#characterOccupation').val(),
    weapon: $('#characterWeapon').val(),
  }

  $.ajax({
    type: 'POST',
    url: 'https://ironhack-characters.herokuapp.com/characters',
    data: newCharacter,
    success: requestCharacters,
    error: handleError
  });

}
