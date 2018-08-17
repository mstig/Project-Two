$(function() {
  function beerRise() {
    $('.beer').addClass('fill');
    $('.head').addClass('active');
  }
  function pourBeer() {
    $('.pour').addClass('pouring');
    beerRise();
    setTimeout(function() {
      $('.pour').addClass('end');
    }, 1500);
  }
  setTimeout(function() {
    pourBeer();
  }, 3000);
});