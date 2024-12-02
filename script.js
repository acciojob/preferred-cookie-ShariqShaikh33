//your JS code here. If required.
let btn = document.getElementById("submit");

btn.addEventListener('click',function(event){
	event.preventDefault(); 
	let fontsize = document.getElementById("fontsize").value;
	let fontcolor = document.getElementById("fontcolor").value;

	document.cookie = `font-size=${fontsize}`;
	document.cookie = `font-color=${fontcolor}`;

	document.documentElement.style.setProperty('--fontsize', fontsize+'px');
	document.documentElement.style.setProperty('--fontcolor', fontcolor);
	
});

window.onload = function() {
    let cookies = document.cookie.split('; ');

    // variables to store font size and color
    let fontsize, fontcolor;

    // loop through cookies
    for(let i = 0; i < cookies.length; i++) {
        // split each cookie into key and value
        let cookie = cookies[i].split('=');

        // check if this cookie is for font size or color
        if(cookie[0] === 'font-size') {
            fontsize = cookie[1];
        } else if(cookie[0] === 'font-color') {
            fontcolor = cookie[1];
        }
    }

    // apply preferences
    if(fontsize) {
        document.documentElement.style.setProperty('--fontsize', fontsize + 'px');
    }
    if(fontcolor) {
        document.documentElement.style.setProperty('--fontcolor', fontcolor);
    }
};