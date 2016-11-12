import $, {Greeting, Hello} from '../src/index';

console.log('### from-ts.ts');

// call entry

$();

// use class

console.log(new Hello('chieri').say());

// use interface

class Bye implements Greeting {
  public say(): string {
    return 'bye!';
  }
}

console.log(new Bye().say());
