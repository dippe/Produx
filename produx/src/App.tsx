import * as React from 'react';
import './App.css';
import Field from './components/field/Field';
import InputPromise from './components/input/Input';
import SubmitButton from './components/submit/SubmitBtn';

function App(inputValue: string): Promise<JSX.Element> {
    let input = InputPromise({name: 'test name', value: inputValue});

    return new Promise((resolve, reject) => {
        Field({name: 'test name', content: input})
            .then(
                (field) => resolve(
                    <div className="App">

                        {field}

                        <SubmitButton />
                    </div>
                ))
            .catch(
                (field) => resolve(
                    <div className="App">

                        {field}

                        <SubmitButton />
                    </div>
                )
            );
    });
}

export default App;
