// const req = new XMLHttpRequest();
// let data;

// req.onload = function () {
// 	data = JSON.parse(this.responseText);
// 	console.log(data);
// };

// req.onerror = function () {
// 	console.log('Error', this);
// };

// req.open('GET', 'https://swapi.dev/api/people/1', true);
// myReq.setRequestHeader('Accept', 'application/json');
// req.send();

// fetch('https://swapi.dev/api/people/1')
// 	.then((res) => {
// 		if (!res.ok) {
// 			throw Error('Could not fetch the data for that resource');
// 		}
// 		return res.json();
// 	})
// 	.then((data) => {
// 		console.log('json 1', data);
// 		return fetch('https://swapi.dev/api/people/2');
// 	})
// 	.then((res) => {
// 		console.log('request 2');
// 		if (!res.ok) {
// 			throw Error('Could not fetch the data for that resource');
// 		}
// 		return res.json();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((err) => {
// 		console.log('error', err);
// 	});

// const loadPeople = async () => {
// 	try {
// 		const res = await fetch('https://swapi.dev/api/peoplasjkdge/1');
// 		const data = await res.json();
// 		console.log(data);
// 		const res2 = await fetch('https://swapi.dev/api/people/2');
// 		const data2 = await res2.json();
// 		console.log(data2);
// 	} catch (err) {
// 		console.log('error', err);
// 	}
// };

// loadPeople();

// axios
// 	.get('https://swapi.dev/api/people123/1')
// 	.then((res) => {
// 		console.log(res.data);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 		alert(err.message);
// 	});

// axios
// 	.get('https://swapi.dev/api/people123/1')
// 	.then((res) => {
// 		console.log(res.data);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 		alert(err.message);
// 	});

// const getPeople = async (id) => {
// 	try {
// 		const res = await axios.get(`https://swapi.dev/api/people/${id}`);
// 		console.log(res.data);
// 	} catch (error) {
// 		console.log(error);
// 		console.log(error.message);
// 		console.log(error.response.status);
// 		console.log(error.response.data);
// 	}
// };
