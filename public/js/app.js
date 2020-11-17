//highlight js
hljs.initHighlighting();

//live reload of screen resolution
window.addEventListener("resize", getMobileRes);

//get mobile resolution
function getMobileRes() {
	let width = window.screen.width * window.devicePixelRatio;
	let height = window.screen.height * window.devicePixelRatio;
	let devPixelRatio = window.devicePixelRatio;
	// let userAgentString = navigator.userAgent;

	screenW.textContent = width;
	screenH.textContent = height;
	dpr.textContent = devPixelRatio;
}
getMobileRes();

//get screen inches
// function getScreenSizeInches() {
// 	const dpi_x = dpi.offsetWidth;
// 	const dpi_y = dpi.offsetHeight;
// 	const inchesWidth = (screen.width / dpi_x).toFixed(2);
// 	const inchesHeight = (screen.height / dpi_y).toFixed(2);

// 	// alert(Math.floor(inchesWidth) + " x " + Math.floor(inchesHeight));
// 	inchesSize.textContent = `${inchesWidth}" x ${inchesHeight}"`;
// }
// getScreenSizeInches();

//media query
window.addEventListener("resize", getMediaQuery);

function getMediaQuery() {
	let insideWidth = window.innerWidth;
	mqWidth.textContent = insideWidth;
}
getMediaQuery();

//check cookies
function checkCookies() {
	let areCookiesEnabled = navigator.cookieEnabled;
	if (areCookiesEnabled) {
		return "Yes";
	} else {
		return "No";
	}
}
cookiesEnabled.textContent = checkCookies();

//check flash
function checkFlash() {
	let isFlashEnabled = navigator.mimeTypes["application/x-shockwave-flash"];
	if (isFlashEnabled !== undefined) {
		return "Yes";
	} else {
		return "No";
	}
}
flashEnabled.textContent = checkFlash();

//get app code name
function checkAppCodeName() {
	return navigator.appCodeName;
}
showAppCodeName.textContent = checkAppCodeName();

//get app name
function checkAppName() {
	return navigator.appName;
}
showAppName.textContent = checkAppName();

//get ip, city, state & country

$.ajax({
	url: "https://geolocation-db.com/jsonp",
	jsonpCallback: "callback",
	dataType: "jsonp",
	success: function (location) {
		$("#country").html(location.country_name);
		$("#state").html(location.state);
		$("#city").html(location.city);
		$("#ip").html(location.IPv4);
	},
});

//get language
function getLanguage() {
	let lang = navigator.language;
	// console.log(lang);
	if (lang == "en-US") {
		return "English";
	} else if (lang == "es") {
		return "Spanish";
	} else {
		return lang;
	}
}
showLanguage.textContent = getLanguage();

//is online
function isOnline() {
	let online = navigator.onLine;
	if (online) {
		return "Yes";
	} else {
		return "No";
	}
}
isBrowserOnline.textContent = isOnline();

//get current platform
function getPlatform() {
	return navigator.platform;
}
currPlatform.textContent = getPlatform();

//get user agent
function getUA() {
	return navigator.userAgent;
}
userAgent.textContent = getUA();

//is JAVA enabled
function getJavaStatus() {
	let javaEnabled = navigator.javaEnabled();
	if (javaEnabled) {
		return "Yes";
	} else {
		return "No";
	}
}
isJavaEnabled.textContent = getJavaStatus();

//user is being tracked?
function isBeingTracked() {
	let isTracked = navigator.doNotTrack;
	if (isTracked == 1) {
		return "No";
	} else if (isTracked == 2) {
		return "Yes";
	} else {
		return "We're not sure!";
	}
}
isTracked.textContent = isBeingTracked();

//bold left column
let leftSide = document.getElementsByClassName("data-left");
for (let i = 0; i < leftSide.length; i++) {
	leftSide[i].classList.add("fw-bold");
}

//get curr year and output
var currYr = new Date().getFullYear();
thisYear.textContent = currYr;
