import alt from '../alt';
import HelloWorldActions from '../actions/HelloWorldActions';

class HelloWorldStore {
    constructor() {
        this.bindActions(HelloWorldActions);

        this.helloWorlds = ['Hello, World'];
    }

    onAddHelloWorld() {
        const helloWorldNo = this.helloWorlds.length + 1;

        this.helloWorlds.push('Hello, World ' + helloWorldNo);
    }
}

export default alt.createStore(HelloWorldStore);
