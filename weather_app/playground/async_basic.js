console.log('starting app');

setTimeout(() => {
  console.log('inside of the callback.');
}, 2000);

setTimeout(() => {
  console.log('second callback')
}, 0);

console.log('finishing app');
