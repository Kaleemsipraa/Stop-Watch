const miliSecDoc = document.getElementById("mili-sec");
const secDoc = document.getElementById("sec");
const minDoc = document.getElementById("min");
const hoursDoc = document.getElementById("hours");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const refreshBtn = document.getElementById("refresh-btn");

let miliSec = 0;
let sec = 0;
let min = 0;
let hours = 0;
let intervalId;

const stopWatch = () => {
	intervalId = setInterval(() => {
		miliSec++;
		miliSecDoc.innerText = `${miliSec}`;
		if (miliSec === 100) {
			sec++;
			if (sec < 10) {
				secDoc.innerText = `0${sec}`;
			} else {
				secDoc.innerText = `${sec}`;
			}

			miliSec = 0;
		}
		if (sec === 60) {
			min++;
			if (sec < 10) {
				secDoc.innerText = `0${min}`;
			} else {
				secDoc.innerText = `${min}`;
			}

			sec = 0;
		}
		if (min === 60) {
			hours++;
			if (sec < 10) {
				secDoc.innerText = `0${hours}`;
			} else {
				secDoc.innerText = `${hours}`;
			}
			min = 0;
		}
	}, 12);
};

// Start
startBtn.addEventListener("click", () => {
	if (!intervalId) {
		stopWatch();
	}
});

// Stop
stopBtn.addEventListener("click", () => {
	// clearInterval(intervalId);
	clearInterval(intervalId);
	intervalId = null;
});

// Refresh
refreshBtn.addEventListener("click", () => {
	clearInterval(intervalId);
	intervalId = null; // Clear intervalId to allow restarting
	miliSec = 0;
	sec = 0;
	min = 0;
	hours = 0;
	miliSecDoc.innerText = "00";
	secDoc.innerText = "00";
	minDoc.innerText = "00";
	hoursDoc.innerText = "00";
});
