import * as React from 'react';
import './App.css';
import Hello from './components/Hello/Hello';
import Field from './components/field/Field';
import InputPromise from './components/input/Input';

const logo = require('./logo.svg');

function App(): Promise<JSX.Element> {
    let input = InputPromise({name: 'test name', value: 'test value'});

    return new Promise((resolve, reject) => {
        Field({name: 'test name', content: input})
            .then(
                (field) => resolve(
                    <div className="App">

                        {field}

                        <Hello name={'Maci'} key={'key'} age={123}/>

                        <div className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <h2>Welcome to React</h2>
                        </div>
                        <p className="App-intro">
                            To get started, edit <code>src/App.tsx</code> and save to reload.
                        </p>
                    </div>
                ));
    });
}

    export default App;
