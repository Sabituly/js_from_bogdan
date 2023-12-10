//Объекты это набор свойств имя и значение


const person = {
    name: 'Daniyar',
    age: 35,
    country: 'Kazakhstan'
}

console.log(person.name)

const copyOfPerson = person;
console.log(copyOfPerson);
copyOfPerson.sex = 'male'; // dot notation
console.log(copyOfPerson);
console.log(person);

/////first way copy object

const man = {
    name: 'Danik',
    age: 35
};


const dudde = Object.assign({}, man);

console.log(dudde);

dudde.nationality = 'kazakh';
console.log(dudde);


/////////second way copy object

const women = {
    vagina: true,
    breast: true,
    age: 18
}

const woman = {...women};
console.log(women);
console.log(woman);
woman.husband = true;
console.log(woman);
console.log(women);

/////////third way copy object ссылки на вложенные объекты не сохраняются

const boys = {
    behavior : 'bad',
    age: 10
}


const boy = JSON.parse(JSON.stringify(boys));

boy.hair = 'blonde';

console.log(boys);
console.log(boy);