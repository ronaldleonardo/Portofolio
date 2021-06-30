// event pada saat link di klik

$('.page-scroll').on('click', function(e){

	// ambil isi href

	var tujuan = $(this).attr('href');

	// tangkap elemen bersangkutan

	var elementTujuan = $(tujuan);


	// pindahkan scroll

	$('html, body').animate({

		scrollTop: elementTujuan.offset().top - 50

	}, 500, 'easeInOutExpo');

	e.preventDefault();
 
});


// parallax
// about

$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	// Jumbotron

	$('.jumbotron img').css({
		'transform'	: 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform'	: 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform'	: 'translate(0px, '+ wScroll/1.2 +'%)'
	});



	// Portofolio
	if( wScroll > $('.portofolio').offset().top - 250 ){
		$('.portofolio .thumbnail').each(function(i){
			setTimeout(function(){
				$('.portofolio .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));

		});
	}


});











