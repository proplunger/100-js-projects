const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e823c2039dmsh67a7bc8e77793e8p108eb9jsn4421ea04f886',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));