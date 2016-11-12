import Greeting from './greeting';
export default class Hello implements Greeting {
    constructor(t: string);
    private target;
    say(): string;
}
