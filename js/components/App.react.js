import React from 'react';
import HelloWorldStore from '../stores/HelloWorldStore';

class App extends React.Component {
    render() {
        const helloWorlds = HelloWorldStore.getState().helloWorlds;
        return (
            <div>
                { helloWorlds.map(function(helloWorld) {
                    return <p>{ helloWorld }</p>;
                }) }
            </div>
        )
    }
}

export default App;
