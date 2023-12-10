//Динамическая типизация в JS

function a() {
    console.log('Hello');
}

a();
a = 10;
a();

//выход юзать const

const b = () => {
    console.log('Hello world')
}
b();

b = 10;

const stroka = 'stroka'; // через const я присваиваю типизацию и нельзя менять тип
stroka = 10;

const eweStroka = 'Danik'; // так же я не могу менять его значение если простой тип
eweStroka = 'Adik';

const sifra = 1;
sifra = 2;



