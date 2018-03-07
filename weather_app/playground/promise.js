var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      if(typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments should be a number');
      }
    }, 1500);
  })
};

asyncAdd(5, '7').then((res) => {
  console.log('Result: ', res);
  return asyncAdd(res, 33);
}).then((result) => {
  console.log('should be 45', result);
}).catch((errorMessage) => {
  console.log(errorMessage);
});
// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('Hey, it worked.');
//     reject('unable to fulfill the promise');
//   }, 2500);
// });
//
//
// somePromise.then((message) => {
//   console.log('Success: ', message);
// }, (errorMessage) => {
//   console.log('Error:', errorMessage);
// });
