$(function() {
	var loginSelect = $('.login-select');
	var loginBtn = $('.login-btn');
	var loginBtnRegister = $('.login-btn-register');

	$('.login-a-register').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		loginSelect.removeClass('un-show');
		loginBtn.addClass('un-show');
		loginBtnRegister.removeClass('un-show');
		$('.login-a-login').removeClass('un-show');
		$('.login-a-register').addClass('un-show');
	});

	$('.login-a-login').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		loginSelect.addClass('un-show');
		loginBtn.removeClass('un-show');
		loginBtnRegister.addClass('un-show');
		$('.login-a-login').addClass('un-show');
		$('.login-a-register').removeClass('un-show');
	});
});