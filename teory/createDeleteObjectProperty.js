const myCity = {
    city: 'New York'
}

myCity.country = 'USA';
myCity['population'] = 240_000_000;

console.log(myCity);

delete myCity.country;
console.log(myCity);