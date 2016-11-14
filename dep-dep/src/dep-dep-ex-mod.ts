import {DepExMod} from '__prefix__dep';

class DepDepExMod extends DepExMod {
  constructor() {
    super()
  }

  method(): string {
    return 'dep-dep-ex-' + super.method();
  }
}

export default DepDepExMod;
