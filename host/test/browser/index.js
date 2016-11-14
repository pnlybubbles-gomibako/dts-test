const Mod = this['__prefix__host'].Mod;
const main = this['__prefix__host'].default;

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
