$(document).on('ready', function () {

  var phrases = [
    'I like pizza.'
    'U sucks hard.'
    'I love football.'
    'Eat my dick.'
    'Fuck u bitch.'
    'Whats up niggah.'
  ];

var random = Math.floor(Math.random() * (phrases.length -0 )) + 0;
$('h1').text(phrases[random]);





}
