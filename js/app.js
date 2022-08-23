// JavaScript Document



//shows Search Box and gallery when js is not disabled
$("#search").fadeIn(1400);
$("#myLightGallery").fadeIn(1800);

//Shows all figcaptions onload
$(".j-figCap").fadeIn(1000).fadeOut(1500);

//Delays showing figcaption over thumbnails on hover
$(".figCap-default").hide().show(2500);






$("#searchImgs").keyup(function () {
	const filter = $(this).val().toLowerCase();
	console.log(filter);

	$(".thumbNail").each(function () {

		//if the items doesn't contain the text phrase
		if ($(this).text().search(new RegExp(filter, "i")) < 0) {
			$(this).fadeOut();

			//if the items does contain the text phrase
		} else {
			$(this).show();
		}

	});

});



lightGallery(document.getElementById('lightGallery-container'), {
	licenseKey: 'F60D22F4-A5824312-9EBF0DE1-5BAB5A45',
	speed: 500,
	mode: 'lg-slide-circular',
	appendSubHtmlTo: '.lg-item',
	slideDelay: 400,
	plugins: [lgFullscreen, lgAutoplay, lgZoom, lgThumbnail],

});























// License key F60D22F4-A5824312-9EBF0DE1-5BAB5A45