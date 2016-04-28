$(document).ready(function() {
	$('.fb-button').click(function () {
		var input = parseInt($('.fb-input').val());

		if (isNaN(input)) {
			alert('Please enter a number!');
		} else {

			$('fb-list').remove();
			fizzbuzz(input);
		}

	});

});

function fizzbuzz(length) {
	for (var i = 1; i <= length; i++) {

		if (i % 3 !==0 && i % 5 !== 0) {
			$('fb-list').append('<li>' + i + '</li>');
		}
		if (i % 3 === 0) {
			$('fb-list').append('<li>fizz</li>');
		}
		if (i % 5 === 0) {
			$('fb-list').append('<li>buzz</li>');
		}
		if (i % 3 === 0 && i % 5 === 0) {
			$('fb-list').append('<li>fizzbuzz</li>');
		}

	}
}