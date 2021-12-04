//*    Object.keys(obj)

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

const keys = Object.keys(feedback);
console.log(keys);

let total = 0;

for (const key of keys) {
  console.log(key);
  console.log(feedback[key]);

  total += feedback[key];
}

console.log(total); // 18

//*    Object.values(obj)

const values = Object.values(feedback);

for (const value of values) {
  console.log(values);

  total += value;
}

console.log(total); // 36
