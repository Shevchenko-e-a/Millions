

$(document).ready(function(){
	
    /* Fix to IE8 & IE11 Scrolling and fixed bg issue */
    if(navigator.userAgent.match(/Trident\/7\./)) {
        /*$('html').on("mousewheel", function () {
            event.preventDefault();

            var wheelDelta = event.wheelDelta;

            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });*/
        $('#escort').css('background-attachment','scroll');
        $('#real-estate-mob').removeClass('d-xl-none');
        $('#real-estate').removeClass('d-xl-block');
        $(".jarallax").each(function(){
    		$(this).removeClass('jarallax');
    	});
        $('.opacity-0').each(function(){
    		$(this).removeClass('opacity-0');
    	});
    	$('.viewportCheck').each(function(){
    		$(this).removeClass('viewportCheck');
    	});
    } else {
    	$('.form-control').each(function(){
    		$(this).addClass('fix-input-chrome');
    	});
    }
    
    /* Edge */
    if(navigator.userAgent.match(/Edge\/([0-9]+)\./)) {
    	$(".jarallax").each(function(){
    		$(this).removeClass('jarallax');
    	});
        
    }

    /* Fix to  Easter Egg */
    var sequence = "aprilfools";
    var index = 0;
    $(document).keypress(function(e) {
        var char = String.fromCharCode(e.which);
        console.log(char+':'+sequence[index]);
        if(sequence[index]== char){index++;}else{index=0;}
        if(index==sequence.length){
            $('body').css('height',$('body').height());
            $('body').css('width',$('body').width());
            $('html').addClass('roll');
        }
    });
    
    // Fix to Firefox
    if(navigator.userAgent.match(/Firefox\/([0-9]+)\./)) {
    	$(".jarallax").each(function(){
    		$(this).removeClass('jarallax');
    	});
    	
    }
   
	
// анимация в мобильной версии
	if ($(window).width() <= '768'){
		$(".opacity-0").each(function(){
    		$(this).removeClass('opacity-0');
    	});
	}

// закрыть меню при переходе по ссылке

	$('.nav-link').on('click',function() {
      $('.navbar-collapse').collapse('hide');
    });

	$(".btn-phone").on("click", function () {
        $(".navbar-collapse").collapse("hide");
});
	

// заливка меню

  $(".main-navbar-toggler").on('click',function(){
      var winTop=$(window).scrollTop();
      $(".menu-opener, .menu-opener-inner, .menu").toggleClass("menu-active");
      if ($(".main-navbar-collapse").hasClass("show") & winTop <= '30') {$(".main-navbar-wrapper").removeClass("main-navbar-fill"), $(".navbar-brand, .navbar-phone, .dropdown").addClass("visibility-0").removeClass("visibility-1")}
      else {$(".main-navbar-wrapper").addClass("main-navbar-fill"), $(".navbar-brand, .navbar-phone, .dropdown").removeClass("visibility-0").addClass("visibility-1")}
  });
  $(window).on('scroll',function(){
      var winTop=$(window).scrollTop();
      if (winTop >= '30' | $(".main-navbar-collapse").hasClass("show")) {$(".main-navbar-wrapper").addClass("main-navbar-fill");$(".navbar-brand, .navbar-phone, .dropdown").removeClass("visibility-0").addClass("visibility-1")}
      else {$(".main-navbar-wrapper").removeClass("main-navbar-fill");$(".navbar-brand, .navbar-phone, .dropdown").addClass("visibility-0").removeClass("visibility-1")}
  });
// задержка анимации

    if ($(window).width() >= '576') {
      var i=-1;
      $(".rates-card-wrapper, .review-item-wrapper").each(function(){
      i++;
      $(this).addClass("animation-delay-0"+i);
      });
    }

// прокрутка по якорям

      $("a[href*=\\#]").on("click", function(e){
          var anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $(anchor.attr('href')).offset().top -20
          }, 1200);
          e.preventDefault();
          return false;
      });



  var containerScrollTop = $(".slideshow").offset().top;
  var spaceholderScrollTop = $(".spaceholder").offset().top;
  var navPosition = spaceholderScrollTop - containerScrollTop;
  if ($(window).width() >= '576') {
    $(".slidenav").css("top",navPosition);
  } else {
    $(".slidenav").css("bottom",0);
  }





  $(".reason-1").mouseenter(function() {
    $( ".reason-number-1" ).addClass( "reason-number-up" );
    $( ".reason-number-frame-1" ).addClass( "reason-number-frame-up" );
  });
  $(".reason-1").mouseleave(function() {
    $( ".reason-number-1" ).removeClass( "reason-number-up" );
    $( ".reason-number-frame-1" ).removeClass( "reason-number-frame-up" );
  });

  $(".reason-2").mouseenter(function() {
    $( ".reason-number-2" ).addClass( "reason-number-up" );
    $( ".reason-number-frame-2" ).addClass( "reason-number-frame-up" );
  });
  $(".reason-2").mouseleave(function() {
    $( ".reason-number-2" ).removeClass( "reason-number-up" );
    $( ".reason-number-frame-2" ).removeClass( "reason-number-frame-up" );
  });

  $(".reason-3").mouseenter(function() {
    $( ".reason-number-3" ).addClass( "reason-number-up" );
    $( ".reason-number-frame-3" ).addClass( "reason-number-frame-up" );
  });
  $(".reason-3").mouseleave(function() {
    $( ".reason-number-3" ).removeClass( "reason-number-up" );
    $( ".reason-number-frame-3" ).removeClass( "reason-number-frame-up" );
  });

  $(".reason-4").mouseenter(function() {
    $( ".reason-number-4" ).addClass( "reason-number-up" );
    $( ".reason-number-frame-4" ).addClass( "reason-number-frame-up" );
  });
  $(".reason-4").mouseleave(function() {
    $( ".reason-number-4" ).removeClass( "reason-number-up" );
    $( ".reason-number-frame-4" ).removeClass( "reason-number-frame-up" );
  });

  $(".reason-5").mouseenter(function() {
    $( ".reason-number-5" ).addClass( "reason-number-up" );
    $( ".reason-number-frame-5" ).addClass( "reason-number-frame-up" );
  });
  $(".reason-5").mouseleave(function() {
    $( ".reason-number-5" ).removeClass( "reason-number-up" );
    $( ".reason-number-frame-5" ).removeClass( "reason-number-frame-up" );
  });
});
