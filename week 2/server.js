import express from "express";
const app = express();

const PORT = 3000;

let users = [
	{name: 'Colton', location: 'Las Vegas'},
	{name: 'Stephanie', location: 'Las Vegas'},
	{name: 'Mackenzie', location: 'Johnsonburg'},
	{name: 'Kaden', location: 'Las Vegas'},
	{name: 'Kendra', location: 'Johnsonburg'}

];

app.get('/users', (_req, res) => {
	res.send(users)
});

let favCars = [
	{model: 'Chevy Chevelle Z16 (1965)'},
	{model: 'Chevy Chevelle SS 396 (1966)'},
	{model: 'Chevrolet Impala SS (1967)'},
	{model: 'Chevy Impala SS427 L72 (1968)'},
	{model: 'The Camaro ZL1 (2020)'}

];

app.get('/favCars', (_req, res) => {
	res.send(favCars)
});

let goatFighter = [
	{fighter: 'Muhammad Ali'},
	{fighter: 'Mike Tyson'},
	{fighter: 'Joe Louis'},
	{fighter: 'Anderson Silva'},
	{fighter: 'Suga Ray Lenoard'}

];

app.get('/goatFighter', (_req, res) => {
	res.send(goatFighter)
});

app.listen(PORT, ()=> {
	console.log(`App started on port: ${PORT}`)
});