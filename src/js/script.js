let receiveBtn         = document.querySelector("#receive"),
	popup              = document.querySelector('.modal'),
	closePopupBtn      = document.querySelector('.close'),
	form               = document.querySelector('.contactform_select'),
	nameInput          = document.querySelector(".contactform_name"),
	phoneInput         = document.getElementsByName("phone"),
	textInput          = document.querySelector(".comment");

function showPopup() {
	popup.style.display = 'block'
};
function closePopup() {
	popup.style.display = 'none'
};
closePopupBtn.addEventListener("click", closePopup);
receiveBtn.addEventListener("click", showPopup);
nameInput.addEventListener("input", function() {
	textInput.value = "Здравствуйте, меня зовут " + nameInput.value + ". И я хочу спросить:"
	if (nameInput.value == "") {
		textInput.value = ""
	}
});
