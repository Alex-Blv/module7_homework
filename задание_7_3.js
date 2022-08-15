const createObject = () => Object.create(null);
 
console.log(createObject());
console.log(Object.getPrototypeOf(createObject()));      