import main, {Mod, Interface} from '../lib/index';

class InterfaceTest implements Interface {
  public method(): string {
    return 'test-ts';
  }
}

class ModTest extends Mod {
  constructor() {
    super();
  }

  method() {
    return 'test-ts-' + super.method();
  }
}

console.log(new InterfaceTest().method(), 'test');
console.log(new ModTest().method(), 'test');
console.log(new Mod().method(), 'test');
main();
