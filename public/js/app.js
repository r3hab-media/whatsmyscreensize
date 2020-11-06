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

//get ip address

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

//get app version
function checkAppVersion() {
	return navigator.appVersion;
}
showAppVersion.textContent = checkAppVersion();

//get geolocation
// var x = document.getElementById("demo");

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//   x.innerHTML =
//     "Latitude: " +
//     position.coords.latitude +
//     "<br>Longitude: " +
//     position.coords.longitude;
// }

//get language
function getLanguage() {
	let lang = navigator.language;
	// console.log(lang);
	if (lang == "en-US") {
		return "English";
	} else if (lang == "es") {
		return "Spanish";
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

//get product
function getProduct() {
	return navigator.product;
}
currProduct.textContent = getProduct();

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

//get curr year and output
var currYr = new Date().getFullYear();
thisYear.textContent = currYr;
