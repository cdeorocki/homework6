$(document).ready( function() {
		// alert("It Works!");

	
	$("#mainheading").animate({
		top: "+=60px"
	});

	    $("#b1").click(function(){
        $("#p1").fadeIn(1000);
    });

	    $("#b2").click(function(){
        $("#p2").fadeIn(1000);
    });

        $("#b3").click(function(){
        $("#p3").fadeIn(1000);
    });     

    	$("#b4").click(function(){
        $("#p4").fadeIn(1000);
    });

        $("#b5").click(function(){
        $("#p5").fadeIn(1000);
    });

        $("#b6").click(function(){
        $("#p6").fadeIn(1000);
    });

        $("#b1").dblclick(function(){
        $("#p1").fadeOut(1000);
    });    

        $("#b2").dblclick(function(){
        $("#p2").fadeOut(1000);
    });

        $("#b3").dblclick(function(){
        $("#p3").fadeOut(1000);
    });

        $("#b4").dblclick(function(){
        $("#p4").fadeOut(1000);

    });    

        $("#b5").dblclick(function(){
        $("#p5").fadeOut(1000);
    });

        $("#b6").dblclick(function(){
        $("#p6").fadeOut(1000);
    });

        $("#fader").click(function(){
        $("#d1").fadeTo(1000, 0.5);
        $("#d2").fadeTo(2000, 0.5);
        $("#d3").fadeTo(3000, 0.5);
    });

	});	


// basic showing or hiding
// $("body").hide();
// $("body").show();


// basic fading
// $("#section-one").fadeOut();
// $("#section-one").fadeIn();


// //sliding up or down
// $("#section-one").slideUp(1000);
// //Fade out over 1 second
// $("#section-one").slideDown(4000);
// //Fade in over 4 seconds


// //hiding with sliding
// $("#section-one").slideUp(1000);
// //Fade out over 1 second
// $("#section-one").slideDown(4000);
// //Fade in over 4 seconds


// //animating CSS
// $(".my-element").animate( {
//   opacity: 0.25,
//   width: 70%
// } , 2000 );


// //click event
// $("ul li a").click(
//   function(){
//     alert('imclicked!');
//   }
// );


// //callback for a sequence
// var animateMenu = function(){
//   $(".menu").animate( {opacity: .5} )
// }
// $(".menu").show(animateMenu)

// //OR

// $(".menu").show( function(){
//   $(".menu").animate( {opacity: .5} )
// })