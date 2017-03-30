//Script for etch-a-sketch project

var buildCanvas = function (howBig) {
  var initialBckgd = "gray";
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
   if (1 === 1){
      var r =  Math.floor(Math.random() * (255 - 1 +1)) + 1
      var g =  Math.floor(Math.random() * (255 - 1 +1)) + 1
      var b = Math.floor(Math.random() * (255 - 1 +1)) + 1
      r = r.toString();
      g = g.toString();
      b = b.toString();
      $(this).css({'background-color':'rgb('+r+','+g+','+b+')'});
   } else {
      $(this).css({'opacity':'50%'});
    }
  }
  else{
  $(this).css({'background-color':'black'})
  }
})



}

$(document).ready(function() {
//  var thismany = prompt("How many pixels?")
  buildCanvas(24);

  $('button').on('click', function(){
    $('.sketchCanvas').fadeOut(400, function() {
      $(this).find('div').remove();
      buildCanvas(prompt("Please enter the number of pixels you would like on your x and y axes:"));
      $(this).fadeIn();
    })
  });




//

});
