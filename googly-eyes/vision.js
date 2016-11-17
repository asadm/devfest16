// Replace with the key you created at https://cloud.google.com/vision/docs/auth-template/cloud-api-auth
var apiKey = 'YOUR API KEY HERE';

var CV_URL = 'https://vision.googleapis.com/v1/images:annotate?key=' + apiKey;

/**
 * Sends the given photo contents to the Cloud Vision API and outputs the
 * eyes positions of the first face found.
 */
function getLandmarks(content, callback) {
  // Strip out the file prefix when you convert to json.
  content = content.replace('data:image/jpeg;base64,', '');


  var request = {
    requests: [{
      image: {
        content: content
      },
      features: [{
        type: "FACE_DETECTION",
        maxResults: 200
      }]
    }]
  };

  $.post({
    url: CV_URL,
    data: JSON.stringify(request),
    contentType: 'application/json'
  }).done(function(data){
    console.log("response", data);
    try{
      var landmarks = data.responses[0].faceAnnotations[0].landmarks;
      var eyes = getEyes(landmarks);
      console.log("eyes",eyes);
      if (callback)
        callback(eyes, landmarks);
    }
    catch(e){
      console.log(e);
    }
  });
}

function getEyes(landmarks){
  var left,right;
  for (var i in landmarks){
    if (landmarks[i].type === "LEFT_EYE")
      left = landmarks[i].position;
    if (landmarks[i].type === "RIGHT_EYE")
      right = landmarks[i].position;
  }
  return [left, right];
}
