// toggle hamburger menu icon with jQuery
$('.hamburger-btn').click(function(){
    $('nav .nav-list').toggleClass("active");
    
});

//scroll to top button fade in and out when at top
$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('#btnScrollToTop').fadeIn();
    } else {
        $('#btnScrollToTop').fadeOut();
    }
});

//Click event to scroll to top button
$('#btnScrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
});

//for card flip action on vocab page
function flip(event){
	var element = event.currentTarget;
	if (element.className === "card") {
    if(element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    }
    else {
      element.style.transform = "rotateY(180deg)";
    }
  }
};