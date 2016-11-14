const DepMod = this['__prefix__dep'].DepMod;
const DepExMod = this['__prefix__dep'].DepExMod;
const main = this['__prefix__dep'].default;

console.log(new DepMod().method(), 'test');
console.log(new DepExMod().method(), 'test');
main();
