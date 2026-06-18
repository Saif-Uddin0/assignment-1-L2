function getProperty<T, K extends keyof T>(
  obj: T,
  key: K
): T[K] {
  return obj[key];
}

const user = {
  id: 1,
  name: "John Doe",
  age: 21,
};

console.log(getProperty(user, "name"));
console.log(getProperty(user, "age"));  