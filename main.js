//Get All BTN From HTML (Add event listeners to all the buttons as follows:)
let numOfBtn = document.querySelectorAll('.btn')

//For Loop In All BTN And Add function Sound And Animation
for ( let i = 0; i <= numOfBtn.length; i++ ){
	numOfBtn[i].addEventListener('click', function(){
		let btnStyle = this.innerHTML
		sound(btnStyle)
		animation(btnStyle)
	})
}

//On Click In BTNs Add Functions Sound And Animation [Add keypress function which will describe what will happen when a particular key is produced. Here we will produce the sound effect and animation effect. Code for the same is:]
document.addEventListener('keypress', function(eventClick){
	sound(eventClick.key)
	animation(eventClick.key)
})


// Now we will code sound() function. It will tell which sound should be played when we press or/and click a specific key. Here we have already stored some basic sound effects of drums, cymbals and other percussion instruments, and we will play those sounds (using new Audio) when their respective key is clicked or pressed.  All the sounds are in “music” directory. Code for the same should be:
function sound(key) {
	switch (key) {
		case "a":
			let sound1 = new Audio('sounds/boom.wav')
			sound1.play()
			break;
		case "s":
			let sound2 = new Audio('sounds/clap.wav')
			sound2.play()
			break;
		case "d":
			let sound3 = new Audio('sounds/hihat.wav')
			sound3.play()
			break;
		case "f":
			let sound4 = new Audio('sounds/kick.wav')
			sound4.play()
			break;
		case "g":
			let sound5 = new Audio('sounds/openhat.wav')
			sound5.play()
			break;
		case "h":
			let sound6 = new Audio('sounds/ride.wav')
			sound6.play()
			break;
		case "j":
			let sound7 = new Audio('sounds/snare.wav')
			sound7.play()
			break;
		case "k":
			let sound8 = new Audio('sounds/tink.wav')
			sound8.play()
			break;
		case "l":
			let sound9 = new Audio('sounds/tom.wav')
			sound9.play()
			break;
		default: console.log(key);
	}
}

//Function for Add class animation after time 100ms [Now we will code animation() function. This will animate the button differently when it is being clicked. To do this, we will add pressed (which we have already defined in CSS file) class to the respective button when it is being clicked. Code for the same would be:]
function animation(currentKey) {
	let activeBtn = document.querySelector("." + currentKey);
	
	activeBtn.classList.add("animation");

	setTimeout(function () {
		activeBtn.classList.remove("animation");
	}, 100);
}