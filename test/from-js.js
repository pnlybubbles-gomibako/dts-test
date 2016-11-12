import $, {Greeting, Hello} from '../lib/index';

console.log('### from-js.js');

// call entry

$();

// use class

console.log(new Hello('chieri').say());
