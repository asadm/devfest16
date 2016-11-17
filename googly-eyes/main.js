
$(function () {
  $('#fileform').on('submit', loadImages);
});

// 'submit' event handler - reads the image bytes and loads it into <img> tag

function loadImages (event) {
  event.preventDefault(); // Prevent the default form post

  // Grab the file and asynchronously convert to base64.
  var file = $('#fileform [name=fileField]')[0].files[0];
  var reader = new FileReader();

  // after we have loaded the image
  reader.onloadend = function(event){
    var content = event.target.result;
    $('#facephoto').attr('src',content);
    getLandmarks(content, function(eyesPos){
      setEyes(eyesPos[0].x,eyesPos[0].y,eyesPos[1].x,eyesPos[1].y);
    });
  };

  reader.readAsDataURL(file);
}

// set eyes position on given coordinates on page
function setEyes(x1, y1, x2, y2){
  // minus half width to set at center of given coordinates.
  var halfWidth = $('#eye1').width() / 2;
  $('#eye1').css({left: x1 - halfWidth, top:y1 - halfWidth })
  $('#eye1').show();

  $('#eye2').css({left: x2 - halfWidth, top:y2 - halfWidth })
  $('#eye2').show();
}
