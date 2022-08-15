const man = {
    name: "Alex", 
    ownCity: "Moscow",
    age: 43,
    course: "FR08",
    married: true
  };


const objProps = (obj, objKey) => (objKey in obj);

console.log(objProps(man, "age"));  // false
console.log(objProps(man, "salary"));  // true