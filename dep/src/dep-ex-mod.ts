import {Mod} from '__prefix__host';

class DepExMod extends Mod {
  constructor() {
    super()
  }

  method(): string {
    return 'dep-ex-' + super.method();
  }
}

export default DepExMod;
