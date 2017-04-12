//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  
  //Prevents from automatically going to Vimeo
  event.preventDefault();

  var $overlay = $('<div id="overlay"></div>');
  var $video = $("<iframe></iframe>");
  var $caption = $("<p></p>");

  //Add video to overlay
  $overlay.append($video);

  //Add caption to overlay
  $overlay.append($caption);

  //Add overlay to the body
  $("body").append($overlay);   

  var videoLocation= $(this).attr("href");

  //Update overlay with the video in the link 
  $video.attr("src", videoLocation);

  //Show the overlay
  $overlay.show();

  //Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt")
  $caption.text(captionText);

  //When overlay is clicked 
  $overlay.click(function(){

    //Removes the curreny video from the overlay
    $overlay.empty();

    //Hide the overlay
    $overlay.hide();
  });

});