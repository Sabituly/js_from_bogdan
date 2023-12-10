const user = {
    name: "Daniyar",
    age: 35,

    findName() {
        console.log(this.name);
    }
}

const admin = {
    name: "Not Daniyar",
    age: null,

    findName() {
        console.log(this.name);
    }
}

function getName() {
    console.log(this.name);
}

// const getObjectName = getName.call(admin);
getName.call(user);