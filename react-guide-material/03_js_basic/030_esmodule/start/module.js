export const hello = () => {
  console.log("hello!world");
};

const funcB = () => {
  console.log("funcB output");
};

export default funcB;

class User {
  constructor(name,age) {
    this.name = name;
    this.age = age;
    console.log(`Hello ${this.name}`);
    if (this.age < 20) {
      console.log("You are a minor.");
    } else {
      console.log("You are an adult.");
    }
  }
}

export { User }
