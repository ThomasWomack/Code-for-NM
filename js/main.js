$(document).ready(function() {
	if(document.getElementById('branding')) {
		// set up our scroll variable
		var branding = $('#branding');
		var getInvolved = $('#get-involved');
		var about = $('#about');
		var partners = $('#partners');
		var contact = $('#contact');
		var list = [branding, getInvolved, about, partners, contact];
		var scrollCheck = -10;
		$(window).scroll(function() {
			var scroll = $(document).scrollTop();
			var newList = getPositionTopAndSort(list, scroll, scrollCheck);
			newList.forEach(function(item) {
				if(item == newList[0]) {
					$('a[href="/#' + item[0].attr('id') + '"]').addClass('active');
				} else {
					$('a[href="/#' + item[0].attr('id') + '"]').removeClass('active');
				}
			});
		});
	}

	// add smooth scrolling on clicked anchors
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
		    if($('body').hasClass('home')) {
		      var scrollTop = parseInt(target.offset().top) - parseInt($('.site-container:first-child').height());
		      $('html, body').animate({
		        scrollTop: scrollTop
		      }, 500);
		    } else {
		      $('html, body').animate({
		        scrollTop: target.offset().top
		      }, 500);
		    }
		    return false;
		  }
		}
	});
	
});

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

function getPositionTopAndSort(list, scroll, scrollCheck) {
	var newList = [];
	list.forEach(function(item) {
		newList.push([item, item.position().top - scroll]);
	});
	newList.sort(function(a, b) {
		if(a[1] < b[1] && a[1] >= scrollCheck) {
			return -1;
		} else {
			return 1;
		}
	});
	return newList;
}