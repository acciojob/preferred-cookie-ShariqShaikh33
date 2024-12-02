//your JS code here. If required.
let btn = document.getElementById("submit");

btn.addEventListener('click',function(){
	let fontsize = document.getElementById("fontsize").value;
	let fontcolor = document.getElementById("fontcolor").value;

	document.cookie = `font-size=${fontsize}`;
	
});