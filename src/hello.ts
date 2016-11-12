import Greeting from './greeting';

export default class Hello implements Greeting {
  constructor(t: string) {
    this.target = t;
  }

  private target: string = '';

  public say(): string {
    return 'hello ' + this.target;
  }
}
