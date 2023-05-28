
function handleClick() {
	const nameInput = document.getElementById("name");
	const yearInput = document.getElementById("year");
	const headingInput = document.getElementById("heading");
	let txt = "https://localhost:8080/";
	const name = nameInput.value;
	const year = yearInput.value;
	if(name.length != 0 && year.length != 0){
		txt = txt + "?name=" + name + "&year=" + year;
	}else if(name.length != 0 && year.length == 0){
		txt = txt + "?name=" + name;
	}else if(name.length == 0 && year.length != 0){
		txt = txt + "?year=" + year;
	}
	headingInput.innerText = txt;	
}