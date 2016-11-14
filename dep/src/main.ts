import DepMod from './dep-mod';
import DepExMod from './dep-ex-mod';

function main() {
  console.log(new DepMod().method());
  console.log(new DepExMod().method());
}

export default main;
