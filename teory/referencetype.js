const objecA = {
    a: 10,
    b: true
}

const copyOfA = objecA;

copyOfA.c = 'string';

console.log(objecA);
console.log(copyOfA);
copyOfA.key = 100;
console.log(objecA)
console.log(copyOfA)