$(".owl-carousel").owlCarousel({
				loop: true,
				margin: 10,
				dots: true,
				responsiveClass: true,
				navText: ['<span class="fas fa-angle-left fa-3x"></span>', '<span class="fas fa-angle-right fa-3x"></span>'],
				responsive: {
					0: {
						items: 1,
						nav: true,
					},
					1000: {
							items: 3,
						nav: true,
						loop: true,
						autoplay: true,
						dots: true,
					},
				},
			});
			AOS.init();