
  // Images container
  var images = document.getElementById('carouselImages');
  
  // Image caption
  var caption = document.getElementById('carouselCaption');
  
  // Previous image button
  var prev = document.getElementById('carouselPrev');
  
  // Next image button
  var next = document.getElementById('carouselNext');
  

  fetch('gallery.json')
  
  // Do something with the response...
  .then(function(res) {
  
    // Get the JSON representation of the response object then...
    res.json().then(function(json) {
  
      // Loop over each object in our JSON object (array)...
      json.forEach(function(el, i) {
  
        // Create a new image element...
        var image = document.createElement('img');
  
        // Set some attributes...
        image.setAttribute('src', el.url);        // The url of the image
        image.setAttribute('alt', el.caption);    // The alternative text
        image.setAttribute('title', el.caption);  // The tooltip
  
        // Append this image to our carouselImages element
        images.appendChild(image);
      });
      
      // Once our images are all loaded in, set up our carousel...
      // We pass our JSON object (array) to this function
      setupCarousel(json);
    });
  });
  
  
  /* ----------------------------------
    A function to set up our carousel
  ---------------------------------- */
  
  // Carousel setup function (called from inside our fetch callback above)
  // This function accepts the JSON object (array) of images as an argument
  function setupCarousel(json) {
    
    /* -------------------------------------------
      Set some variables to keep track of things
    ------------------------------------------- */
  
    // Number of children in your carouselImages element
    var imageCount = images.childElementCount;
  
    // Current image in view
    var currentImage = 1;
  
    // Width of your images (could be calculated from clientWidth)
    // var imageWidth = images.getElementsByTagName('img')[0].clientWidth;
    var imageWidth = 500;
    
  
    // Previous button
    // Calls an anonymous function when the prev button is clicked
    prev.addEventListener('click', function() {
  
      // If the image in view is not the first image...
      if(currentImage != 1) {
  
        // Decrement the current image reference
        --currentImage;
  
        // Move the previous image into view using the marginLeft property
        images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
      }
      
      // Update our caption
      caption.innerText = json[currentImage - 1].caption;
    });
  
    // Next button
    // Calls an anonymous function when the next button is clicked
    next.addEventListener('click', function() {
  
      // If the image in view is not the last image...
      if(currentImage != imageCount) {
  
        // Increment the current image reference
        ++currentImage;
  
        // Move the next image into view using the marginLeft property
        images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
      }
      
      // Update our caption
      caption.innerText = json[currentImage - 1].caption;
    });
    
    // Update our caption
    caption.innerText = json[currentImage - 1].caption;
  }
  
  // The end of our DOMContentLoaded callback function
