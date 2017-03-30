//Script for etch-a-sketch project

var buildCanvas = function (howBig) {
  var initialBckgd = "rgb(200, 200, 200)"; //must have spaces between comma & number
  var lotsOfDivs = "";
  var pixelSize = 100/howBig;
  pixelSize = pixelSize.toString();
  for (var i = 0; i < howBig; i++) {
    lotsOfDivs += "<div></div>";}
  $('.sketchCanvas').append(lotsOfDivs);
  $('.sketchCanvas > div').append(lotsOfDivs);
  $('.sketchCanvas > div').css({
    'display':'block',
    'margin':'0px',
    //'position':'relative',
    'height':pixelSize + '%'});
  $('.sketchCanvas > div > div').css({
    'display':'inline-block',
    //'position':'relative',
    'background-color':initialBckgd,
    'margin':'0px',
    'width':pixelSize + '%',
    'height':'100%',
  }).append('&nbsp;');
// try putting listener here
$('.sketchCanvas > div > div').on('mouseenter', function() {
  if ($('input.checkbox_check').prop('checked')) {
   if ($(this).css("background-color") === initialBckgd || $(this).css("background-color") === "rgb(0, 0, 0)"){
      var r = Math.floor(Math.random() * (255 - 1 +1)) + 1
      var g = Math.floor(Math.random() * (255 - 1 +1)) + 1
      var b = Math.floor(Math.random() * (255 - 1 +1)) + 1
      r = r.toString();
      g = g.toString();
      b = b.toString();
      $(this).css({'background-color':'rgb('+r+','+g+','+b+')', "filter":"brightness(100%)"});
   } else {
     //function to make colors 10% darker on each pass. After 10 passes, turns black.
    }
  }
  else{
  $(this).css({'background-color':'black'})
  }
})



}

$(document).ready(function() {
//  var thismany = prompt("How many pixels?")
  buildCanvas(16);

  $('button').on('click', function(){
    $('.sketchCanvas').fadeOut(400, function() {
      $(this).find('div').remove();
      var tryingthis = function() {
        var newSize = prompt('How many pixels would you like on your new canvas? Please enter a number between 4 and 124:')
        while (newSize < 4 || newSize > 124 || isNaN(newSize)) {
          newSize = prompt("Please enter a number between 4 and 124:")
        }

        buildCanvas(newSize);
      }
      tryingthis();
      $(this).fadeIn();
    })
  });




//

});
