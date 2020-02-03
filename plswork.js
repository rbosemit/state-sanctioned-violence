var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

$( window ).on( "load", function() { 

	function getRandomInt(min, max) {
	    min = Math.ceil(min);
	    max = Math.floor(max);
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var image = '<img src="bjp-logo-01.png" alt="BJP logo">';


	function addImages( numOfImages ) {
		for (var i = 0; i < numOfImages; i++) {
			var windowHeight = $(window).height();
			var windowWidth = $(window).width();
			var sizeOffset = getRandomInt(100, 700);
			var sizeOffsetFormatted = sizeOffset + "px";
			var topOffset = getRandomInt(-sizeOffset, windowHeight) + "px";
			var leftOffset = getRandomInt(-sizeOffset, windowWidth) + "px";
			
			$(image).css({ "position": "absolute", "top": topOffset, "left": leftOffset, "z-index": 1, "width": sizeOffsetFormatted  }).insertAfter(".container");
			}

		}

	function makeDraggable() {
		$("img").each( function() {
			$(this).draggable({scroll: false});
		})
	}

	addImages(8);
	makeDraggable();

	

});

$( window ).on( "load", function() { 

	function getRandomInt(min, max) {
	    min = Math.ceil(min);
	    max = Math.floor(max);
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var image = '<img src="bjp-logo-03.png" alt="BJP logo">';


	function addImages( numOfImages ) {
		for (var i = 0; i < numOfImages; i++) {
			var windowHeight = $(window).height();
			var windowWidth = $(window).width();
			var sizeOffset = getRandomInt(100, 700);
			var sizeOffsetFormatted = sizeOffset + "px";
			var topOffset = getRandomInt(-sizeOffset, windowHeight) + "px";
			var leftOffset = getRandomInt(-sizeOffset, windowWidth) + "px";
			
			$(image).css({ "position": "absolute", "top": topOffset, "left": leftOffset, "z-index": 1, "width": sizeOffsetFormatted  }).insertAfter(".container");
			}

		}

	function makeDraggable() {
		$("img").each( function() {
			$(this).draggable({scroll: false});
		})
	}

	addImages(11);
	makeDraggable();

	

});

$( window ).on( "load", function() { 

	function getRandomInt(min, max) {
	    min = Math.ceil(min);
	    max = Math.floor(max);
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var image = '<img src="splatter-01.png" alt="Splatter">';
	

	function addImages( numOfImages ) {
		for (var i = 0; i < numOfImages; i++) {
			var windowHeight = $(window).height();
			var windowWidth = $(window).width();
			var sizeOffset = getRandomInt(100, 700);
			var sizeOffsetFormatted = sizeOffset + "px";
			var topOffset = getRandomInt(-sizeOffset, windowHeight) + "px";
			var leftOffset = getRandomInt(-sizeOffset, windowWidth) + "px";
			
			$(image).css({ "position": "absolute", "top": topOffset, "left": leftOffset, "z-index": 1, "width": sizeOffsetFormatted  }).insertAfter(".container");
			}

		}

	function makeDraggable() {
		$("img").each( function() {
			$(this).draggable({scroll: false});
		})
	}

	addImages(15);
	makeDraggable();
});







