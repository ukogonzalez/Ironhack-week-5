// Write your Pizza Builder JavaScript in this file.
$(document).on('ready', function() {

  //load prices
  var total = 10; //10 cheese
  var pricePepperonni = 1;
  var priceMushrooms = 1;
  var priceGreenPeppers = 1;
  var priceWhiteSauce = 3;
  var priceGlutenFreeCrust = 5;

  //remove initial ingredients
  $('.price ul li').remove();

  //load default sauce crust
  $('.sauce').toggleClass('sauce-white');
  $('.btn-sauce').toggleClass('active');
  $('.crust').toggleClass('crust-gluten-free');
  $('.btn-crust').toggleClass('active');

  //charge initial ingredients
  if($('.btn-pepperonni').hasClass('active')) {
    total += pricePepperonni;
    $('.price ul').append('<li>$1 pepperonni</li>');
  }
  if($('.btn-mushrooms').hasClass('active')) {
    total += pricePepperonni;
    $('.price ul').append('<li>$1 mushrooms</li>');
  }
  if($('.btn-green-peppers').hasClass('active')) {
    total += pricePepperonni;
    $('.price ul').append('<li>$1 green peppers</li>');
  }

  //load total price
  $('strong').text('$' + total);

  // on click
  $('.btn-pepperonni').on('click', function() {
    $('.pep').fadeToggle(1000);
    $('.btn-pepperonni').toggleClass('active');
    if($('.btn-pepperonni').hasClass('active')) {
      $('.price ul').append('<li>$1 pepperonni</li>');
      total += pricePepperonni;
    }
    else {
      $("li:contains('$1 pepperonni')").remove();
      total -= pricePepperonni;
    }
    $('strong').text('$' + total);
  });

  $('.btn-mushrooms').on('click', function() {
    $('.mushroom').fadeToggle(1000);
    $('.btn-mushrooms').toggleClass('active');
    if($('.btn-mushrooms').hasClass('active')) {
      $('.price ul').append('<li>$1 mushrooms</li>');
      total += priceMushrooms;
    }
    else {
      $("li:contains('$1 mushrooms')").remove();
      total -= priceMushrooms;
    }
    $('strong').text('$' + total);
  });

  $('.btn-green-peppers').on('click', function() {
    $('.green-pepper').fadeToggle(1000);
    $('.btn-green-peppers').toggleClass('active');
    if($('.btn-green-peppers').hasClass('active')) {
      $('.price ul').append('<li>$1 green peppers</li>');
      total += priceGreenPeppers;
    }
    else {
      $("li:contains('$1 green peppers')").remove();
      total -= priceGreenPeppers;
    }
    $('strong').text('$' + total);
  });

  $('.btn-sauce').on('click', function() {
    $('.sauce').toggleClass('sauce-white');
    $('.btn-sauce').toggleClass('active');
    if($('.btn-sauce').hasClass('active')) {
      $('.price ul').append('<li>$3 white sauce</li>');
      total += priceWhiteSauce;
    }
    else {
      $("li:contains('$3 white sauce')").remove();
      total -= priceWhiteSauce;
    }
    $('strong').text('$' + total);
  });

  $('.btn-crust').on('click', function() {
    $('.crust').toggleClass('crust-gluten-free');
    $('.btn-crust').toggleClass('active');
    if($('.btn-crust').hasClass('active')) {
      $('.price ul').append('<li>$5 gluten free crust</li>');
      total += priceGlutenFreeCrust;
    }
    else {
      $("li:contains('$5 gluten free crust')").remove();
      total -= priceGlutenFreeCrust;
    }
    $('strong').text('$' + total);
  });

});
