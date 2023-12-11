const fnWithError = () => {

    throw new Error('This is error');
}

try {
    fnWithError()
} catch (error) {
    console.error(error);
    console.log(error.message);
}

console.log('Continue...')
// const showErrorFunction = () => {
//
//     throw new Error('Some error')
// }
//
// showErrorFunction();
// console.log('Continue...');