(function($) {
	$(document).ready(function(){

		let card = $('.card');

		if (!card) return;

		var	cardItems = card.find('.card__item'),
			cardLength = cardItems.length,
			cardChanged = [];

		if (!cardItems || cardLength <= 0) return;

		cardItems.find('.card__content').each(function(index, el) {
			el = $(el);
			el.addClass('hide');
		});

		card.slick({
			infinite: false,
			nextArrow: '<button type="button" class="slick-next"></button>',
			prevArrow: '<button type="button" class="slick-prev"></button>',
			swipe: false,
			lazyLoad: 'ondemand'
		});

		card.find('button.slick-prev').click();

		card.on('afterChange', function(slick, currentSlide){
			let index = currentSlide.currentSlide,
				content = $(cardItems[index]).find('.card__content');

			if (cardChanged.indexOf(index) == -1) cardChanged.push(index);
			else return false;

			content.removeClass('hide');

			const cardItemTitleShow = function(index, content, interval) {
					var titles = content.find('.title'),
						titlesHide = titles.filter('.hide'),
						titleCurrent = titles.length - titlesHide.length,
						titlesShowSI = setInterval(function() {
							let title = titles[titleCurrent];

							if (!title) {
								clearTimeout(titlesShowSI);

								if (index != cardLength-1) {
									/*for(let i = 0; i < titles.length; i++) {
										$(titles[i]).addClass('hide');
									}*/

									card.find('button.slick-next').click();
								}

								return true;
							}

							if (titleCurrent > 0) $(titles[titleCurrent-1]).addClass('hide');

							$(title).removeClass('hide');
							titleCurrent++;
						}, interval);
				};

			switch (index) {
				case 0:
					cardItemTitleShow(index, content, 4000);
				break;
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
				case 11:
				case cardLength-1:
					cardItemTitleShow(index, content, 3000);
				break;
			}
		});

	});
}(jQuery));