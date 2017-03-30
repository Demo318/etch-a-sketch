//Script for etch-a-sketch project

var canvasSize = 42;

//Assign canvas size to var
//Create var that includes a list of canvasSize divs
//.append canvasSize divs to .sketchCanvas
//.append canvasSize divs to .sketchCanvas > div
//CSS display:block to .sketchCanvas>div
//CSS display:inline-block and size to .sketchCanvas>div>div


var buildCanvas = function (howBig) {
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
    'background-color':'gray',
    'margin':'0px',
    'width':pixelSize + '%',
    'height':'100%',
  }).append('&nbsp;');}

$(document).ready(function() {
  buildCanvas(canvasSize);
//change pixel color on mouseenter
  $('.sketchCanvas > div > div').on('mouseenter', function() {
    $(this).css({'background-color':'black'})
  })

});
