javascript: const BaseURL = "https://youtubetranscript.com/?v=",
    url = new URL(location.href);
switch (url.host) {
    case "youtu.be":
        location.href = `${BaseURL}${url.pathname}`;
        break;
    case "m.youtube.com":
    case "www.youtube.com":
        location.href = `${BaseURL}${url.searchParams.get("v")}`;
        break;
    default:
        alert("Not a recognized Youtube URL")
}
