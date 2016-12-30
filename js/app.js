$.get("nav.html", function(data){
  $("#nav-placeholder").replaceWith(data);
});
$.get("footer.html", function(data){
  $("#footer-placeholder").replaceWith(data);
});


$('#web-development').click(function(){
    $.get("projects-webdev.html", function(data){
	  	$("#project-placeholder").replaceWith(data);
	});
});

$('#computer-vision').click(function(){
    $.get("projects-cv.html", function(data){
	  	$("#project-placeholder").replaceWith(data);
	});
});

$('#firmware').click(function(){
    $.get("projects-firmware.html", function(data){
	  	$("#project-placeholder").replaceWith(data);
	});
});

$('#animation').click(function(){
    $.get("projects-animation.html", function(data){
	  	$("#project-placeholder").replaceWith(data);
	});
});

$('#data').click(function(){
    $.get("projects-data.html", function(data){
	  	$("#project-placeholder").replaceWith(data);
	});
});

$('#show-all').click(function(){
    $.get("projects-show-all.html", function(data){
	  	$("#project-placeholder").replaceWith(data);
	});
});







$(".nav li").on("click", function() {
  $(".nav li").removeClass("active");
  $(this).addClass("active");
});