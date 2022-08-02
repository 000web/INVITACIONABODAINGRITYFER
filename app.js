// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
// Countdown Script

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`November 05 2022 16:00:00`);

// Update countdown time
function updateCountdown() {
	const currentTime = new Date();
	const diff = newYearTime - currentTime;

	const d = Math.floor(diff / 1000 / 60 / 60 / 24);
	const h = Math.floor(diff / 1000 / 60 / 60) % 24;
	const m = Math.floor(diff / 1000 / 60) % 60;
	const s = Math.floor(diff / 1000) % 60;

	days.innerHTML = d;
	hours.innerHTML = h < 10 ? '0' + h : h;
	minutes.innerHTML = m < 10 ? '0' + m : m;
	seconds.innerHTML = s < 10 ? '0' + s : s;
}
setInterval(updateCountdown, 1000);


// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
// Slider script

//
//
//
//
const slider2 = document.querySelector(".slider2")
const nextBtn2 = document.querySelector(".next-btn2");
const prevBtn2 = document.querySelector(".prev-btn2");
const slides2 = document.querySelectorAll(".slide2")
const slideIcons2 = document.querySelectorAll(".slide-icon2");
const numberOfSlides2 = slides2.length;
var slideNumber2 = 0;

//image slider next button
nextBtn2.addEventListener("click", () => {
	slides2.forEach((slide2) => {
		slide2.classList.remove("active2");
	});
	slideIcons2.forEach((slideIcon2) => {
		slideIcon2.classList.remove("active2");
	});
	
	slideNumber2++;
	
	if(slideNumber2 > (numberOfSlides2 - 1)){
		slideNumber2 = 0;
	}
	
	slides2[slideNumber2].classList.add("active2");
	slideIcons2[slideNumber2].classList.add("active2");
});

//image slider previous button
prevBtn2.addEventListener("click", () => {
	slides2.forEach((slide2) => {
		slide2.classList.remove("active2");
	});
	slideIcons2.forEach((slideIcon2) => {
		slideIcon2.classList.remove("active2");
	});
	
	slideNumber2--;
	
	if(slideNumber2 < 0){
		slideNumber2 = numberOfSlides2 - 1;
	}
	
	slides2[slideNumber2].classList.add("active2");
	slideIcons2[slideNumber2].classList.add("active2");
});


//image slider autoplay
var playSlider2;
var repeater2 = () => {
	playSlider2 = setInterval(function(){
		slides2.forEach((slide2) => {
			slide2.classList.remove("active2");
		});
		slideIcons2.forEach((slideIcon2) => {
			slideIcon2.classList.remove("active2");
		});
		
		slideNumber2++;
		
		if(slideNumber2 > (numberOfSlides2 - 1)){
			slideNumber2 = 0;
		}
		
		slides2[slideNumber2].classList.add("active2");
		slideIcons2[slideNumber2].classList.add("active2");
	}, 6000);
}

repeater2();

//stop the image slider autoplay on mouseover
slider2.addEventListener("mouseover", () => {
	clearInterval(playSlider2);
});

//start the image slider autoplay again on mouseout
slider2.addEventListener("mouseout", () => {
	repeater2();
});

//
//
//
//
















const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

//image slider next button
nextBtn.addEventListener("click", () => {
	slides.forEach((slide) => {
		slide.classList.remove("active");
	});
	slideIcons.forEach((slideIcon) => {
		slideIcon.classList.remove("active");
	});
	
	slideNumber++;
	
	if(slideNumber > (numberOfSlides - 1)){
		slideNumber = 0;
	}
	
	slides[slideNumber].classList.add("active");
	slideIcons[slideNumber].classList.add("active");
});

//image slider previous button
prevBtn.addEventListener("click", () => {
	slides.forEach((slide) => {
		slide.classList.remove("active");
	});
	slideIcons.forEach((slideIcon) => {
		slideIcon.classList.remove("active");
	});
	
	slideNumber--;
	
	if(slideNumber < 0){
		slideNumber = numberOfSlides - 1;
	}
	
	slides[slideNumber].classList.add("active");
	slideIcons[slideNumber].classList.add("active");
});

//image slider autoplay
var playSlider;
var repeater = () => {
	playSlider = setInterval(function(){
		slides.forEach((slide) => {
			slide.classList.remove("active");
		});
		slideIcons.forEach((slideIcon) => {
			slideIcon.classList.remove("active");
		});
		
		slideNumber++;
		
		if(slideNumber > (numberOfSlides - 1)){
			slideNumber = 0;
		}
		
		slides[slideNumber].classList.add("active");
		slideIcons[slideNumber].classList.add("active");
	}, 4000);
}

repeater();

//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
	clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
	repeater();
});








