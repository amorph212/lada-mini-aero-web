$(document).ready(function(){
	$(".read-more").click(function(){
        $(this).hide();
	$(".more").slideDown("slow");
    });
 	$(".remove").click(function(){
	$(".more").slideUp("slow");
        $(".read-more").fadeIn();
    });
});