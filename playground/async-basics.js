console.log('Starting App');

setTimeout(() =>{
console.log('Inside of a callback');
},2000);

setTimeout(() => {
    console.log('0 sec timeout');
},0000);

console.log('Finishing App');