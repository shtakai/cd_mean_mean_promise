let beginDonutTransaction = new Promise(
  (resolve, reject) => {
    let x = setTimeout( () => {
      //reject();
      console.log('donut is on counter');
      resolve();
    }, 500);
  }
);

beginDonutTransaction
  .then( () => {
    // this is the resolve
    console.log('pay');
    console.log('walk out door');
  } )
  .catch( () => {
    console.log('give me my donut!');
  } );
