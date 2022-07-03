const fnAsync = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("async!!")
      }, 3000);
    } else {
      reject(new Error("Error"))
    }
  })
}

const anotherFn = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log("hola");
}

console.log("Before");
anotherFn();
console.log("After");