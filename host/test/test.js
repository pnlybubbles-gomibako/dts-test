import main, {Mod} from '../lib/index';

class ModTest extends Mod {
  constructor() {
    super();
  }

  method() {
    return 'test-js-' + super.method();
  }
}

console.log(new ModTest().method(), 'test');
console.log(new Mod().method(), 'test');
main();
