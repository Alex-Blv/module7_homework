const comp = {
    brand: 'ASUS',
    cpu: 'i8',
    price: 58000,
    isNew: true
    
}

function getInfo(arg) {
for (let key in arg) {

    if (arg.hasOwnProperty(key)) {

        console.log(`${key}: ${arg[key]}`); 
    }   
  }
}

getInfo(comp);