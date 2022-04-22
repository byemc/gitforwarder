// get the requested url
var url = window.location.href;
// strip the beginning of the url
var url = url.replace("http://localhost:3000/", "");
var url = url.replace("https://git.byemc.xyz/", "");

// if the url is not in a subdirectory, go to https://github.com/byemc/{url}
if (url.indexOf('/') == -1) {
    window.location.href = `https://github.com/byemc/${url}`;
} else {
    window.location.href = `https://github.com/${url}`;
}