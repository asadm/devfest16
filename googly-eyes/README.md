# Googly Eyes Demo using Google Cloud Vision API

This is a very basic [Cloud Vision API](https://cloud.google.com/vision/) example. Originally prepared for my talk at Google DevFest Karachi 2016.

## Prerequisites
1. [Sign up for Google Cloud Platform Account](http://cloud.google.com)
2. [Enable Cloud Vision API](https://cloud.google.com/vision/docs/getting-started)
3. [Create a Browser Key](https://cloud.google.com/vision/docs/auth-template/cloud-api-auth) for making calls to Cloud Vision API


## Setup
1. Rename the file *key.js.example* to *key.js*.
2. Update the line `var apiKey = 'YOUR API KEY HERE';` in *key.js* with your API key.
3. Start a web server in this folder and navigate to index.html.


From here, the demo allows you to upload images, process them using the [Cloud Vision API annotation types](https://cloud.google.com/vision/reference/rest/v1/images/annotate#Type) and add googly eyes to them.
