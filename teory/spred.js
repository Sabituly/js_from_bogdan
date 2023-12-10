const button = {

    width: 200,
    text: 'Buy'
}

const redButton = {
    ...button,
    color: 'red'
}

console.table(redButton);


const man = {

    age:1000,
    height:300,
    name: 'Adam'
}

const anotherMan = {
    ...man,
    skin: 'white'
}

const woman = {
    height: 250,
    ...man,
    name: 'Eva'
}

console.log(anotherMan);
console.log(woman);