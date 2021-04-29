// scroll animation
$(window).on("load",function() {
    $(window).scroll(function() {
      let windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
        /* Check the location of each desired element */
        let objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        } 
      });
    }).scroll(); //invoke scroll-handler on page-load
  
    //switch active state in the showcase element
    $(document).on('click', '.services__tab', function (event) {
      //remove active class from the rest of the tabs
      $('.services__tab').each(function(){
        this.classList.remove('-activeTab')
      })
      event.target.classList.add('-activeTab')
    });
    
  });