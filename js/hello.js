


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '04ceccb93amsh9d8d66d2494738fp118552jsn4bdb280341a8',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};

 fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
	.then(response => response.json())
	.then((data) => {
		let table = document.querySelector('#tdata')
     for (let i = 0; i <228 ; i++) {
	let myData = data.countries_stat[i];
	let tRow = document.createElement('tr');
	let srNo = document.createElement('td');
	let cName = document.createElement('td');
	let tCases = document.createElement('td');
	let aCases = document.createElement('td');
	let tDeaths = document.createElement('td');
	let tRec = document.createElement('td');
	let tTes = document.createElement('td');

	srNo.innerHTML = i+1;
	cName.innerHTML = myData.country_name;
	tCases.innerHTML = myData.cases;
	aCases.innerHTML = myData.active_cases;
	tDeaths.innerHTML = myData.deaths;
	tRec.innerHTML = myData.total_recovered;
	tTes.innerHTML = myData.total_tests;

	tRow.appendChild(srNo);
	tRow.appendChild(cName);
	tRow.appendChild(tCases);
	tRow.appendChild(aCases);
	tRow.appendChild(tDeaths);
	tRow.appendChild(tRec);
	tRow.appendChild(tTes);

	table.appendChild(tRow);


}
	})
.catch ((err )=> {
	console.error(err)})



	