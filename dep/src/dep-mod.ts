import {Interface} from '__prefix__host';

class DepMod implements Interface {
  constructor() {
  }

  method(): string {
    return 'dep';
  }
}

export default DepMod;
