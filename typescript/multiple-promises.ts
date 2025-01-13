const arr4 = [];
for (let i = 2; i < 100; i+=2) {
  const promise = new Promise((resolve, reject) => {
    if ((i % 2) === 0) {
      return resolve(i + 2);
    }
    return reject(-100);
  });
  arr4.push(promise);
}

console.log(arr4);

for (const element of arr4) {
  const val = await element;
  console.log(val);
}

for await (const element of arr4) {
  console.log(element);
}

Promise.all(arr4).then((values) => {
  values.forEach((value) => console.log("From Promise.all", value));
}).catch((err) => console.error(err));