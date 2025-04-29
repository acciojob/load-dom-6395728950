//your JS code here. If required.
window.addEventListener("load",()=>{
	 const p = document.createElement("p");
	p.textContent = "DOM load success";
	p.style.color = "black";
	document.body.appendChild(p);
});