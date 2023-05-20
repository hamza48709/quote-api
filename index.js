const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
let pa=document.querySelector(".quote");
let aut=document.querySelector(".author");


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '628ecaa612msh84c90e51a11521cp11eefajsnbb49422e59fe',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};
async function  getdata(){
    const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    pa.textContent=result.content;
    aut.textContent=result.originator.name;
    
}
try {
    getdata();
	
} catch (error) {
	console.error(error);
}



let auth=document.getElementsByClassName("author");