import Greeting from './greeting';
import Hello from './hello';

// entry
import main from './main';

// merge
export {
  Greeting,
  Hello,
}

// expose
if (typeof window !== 'undefined') {
  const expose = {
    Hello: Hello,
  };
  window['$'] = main;
  for (let k in expose) {
    window['$'][k] = expose[k];
  }
}

export default main;
