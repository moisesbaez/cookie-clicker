var cookie;
var cookieCountText;
var clicks;

window.onload = function() {
    Initialize();
};

function Initialize() { 
    clicks = 0;
    
    cookie = document.getElementById("cookie");
    cookie.addEventListener("click", clicked, false);
    
    cookieCountText = document.getElementById("cookieCount");
    cookieCountText.textContent = "Cookies: " + clicks;
    
}

function clicked() {
    clicks++;
    cookieCountText.textContent = "Cookies: " + clicks;
}

