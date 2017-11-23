import * as React from 'react';
import './App.css';
import Hello from './components/Hello/Hello';
import Field from './components/field/Field';
import InputPromise from './components/input/Input';

function App(): Promise<JSX.Element> {
    let input = InputPromise({name: 'test name', value: 'test value'});

    return new Promise((resolve, reject) => {
        Field({name: 'test name', content: input})
            .then(
                (field) => resolve(
                    <div className="App">

                        {field}

                        <Hello name={'Maci'} key={'key'} age={123}/>
                    </div>
                ))
            .catch(
                (field) => resolve(
                    <div className="App">

                        {field}

                        <Hello name={'Maci'} key={'key'} age={123}/>
                    </div>
                )
            );
    });
}

export default App;
