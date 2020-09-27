const btnCancel = document.querySelector('.cancel'),
	 btnSave = document.querySelector('.save');
btnCancel.onclick = function() {
this.classList.toggle("red");

};
btn.onclick = function() {
	// btnCancel.classList.remove("red");
	this.classList.toggle("green");
};
