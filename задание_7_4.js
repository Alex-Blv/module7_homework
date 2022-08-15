 function Device (name, brand, power, on ){
  this.name = name,
  this.on = function(){console.log(`The ${this.name} is switched ${on}.`)},
  this.output = function(){ console.log(`Power consumption of the ${this.name} is ${power} watt.`)},
  this.brand = function(){ console.log(`The ${name} is produced by ${brand}.`) }
}

const fridge = new Device ('fridge', 'LG');
const power  = new Device ('fridge', '', 1200);
const turn = new Device ('fridge', '', '', 'off');

fridge.brand(); power.output(); turn.on();



function TVset (name, brand, inches, smart) {
  this.name = name,
  this.inches = function(){console.log(`The ${this.name} is ${inches} inches width.`) },
  this.brand = function(){console.log(`The ${this.name} is produced by ${brand}.`) },
  this.smart = function(){console.log(`The devices ${this.name} is ${smart} as well.`) }
}

const purchase = new TVset ("Platron", "Samsung");
const size = new TVset ("Platron", "", 58, "");
const clever = new TVset ("Platron", "", "", "smart");

purchase.brand(); size.inches(); clever.smart();
