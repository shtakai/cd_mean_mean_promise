// failed example
function buyDonut(){
  orderDonut();
  console.log('buyDonut:pay');
  console.log('buyDonut:walk out door');
}

// function that gets a donut
function orderDonut(){
  let x = setTimeout( () => {
    console.log('orderDonut:donut on counter')
  }, 1000);
}

buyDonut();
console.log('-----');
// callback example
function buyDonut2(){
    console.log('orderdonut2++++++');
  orderDonut2( () => {
    console.log('buyDonut2:pay');
    console.log('buyDonut2:walk out door');
  });
}

// function that gets a donut
function orderDonut2(callback){
  let x = setTimeout( () => {
    console.log('orderDonut2:donut is on counter');
    callback();
    console.log('++++++');
  }, 1000 );
}

buyDonut2();
