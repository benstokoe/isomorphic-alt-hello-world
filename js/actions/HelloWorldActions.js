import alt from '../alt';

class HelloWorldActions {
    constructor() {
        this.generateActions(
            'addHelloWorld'
        )
    }
}

export default alt.generateActions(HelloWorldActions);
