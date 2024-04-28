// Listen for the Chrome extension's onMessage event
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'getImages') {
    // Get all image elements
    var images = document.querySelectorAll('img');
    var imageUrls = [];
    
    // Get the src attribute from each image and push to the array
    images.forEach(function(image) {
      imageUrls.push(image.src);
    });

    // Send the array of image URLs back to the popup.html
    sendResponse({urls: imageUrls});
  }
});
