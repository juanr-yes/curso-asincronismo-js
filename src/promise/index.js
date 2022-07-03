const promise = new Promise(function(resolve, reject) {
  resolve("hey!")
})

const cows = 15;

const countCows = new Promise(function(resolve, reject) {
  if (cows > 10) {
    resolve(`We have enough cows, they are ${cows} at this moment.`)
  } else {
    reject("We don't have enough cows.")
  }
})

countCows.then(function(result) {
  console.log(result);
}).catch(function(error) {
  console.log(error);
}).finally(function() {
  console.log("Finally");
})