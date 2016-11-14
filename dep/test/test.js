import main, {DepMod, DepExMod} from '../lib/index';

console.log(new DepMod().method(), 'test');
console.log(new DepExMod().method(), 'test');
main();
