import * as React from 'react';
import './App.css';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

const logo = require('./logo.svg');

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>{test()}</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;

function test() {

    // var func: any = function (foo: any, bar:any) { return { foo: bar, bar: bar }; };

    var source: Observable<string> = Observable.create((observer: Observer<string>) => {
        // emit some info
        observer.next('223');
        observer.next('323');
        // observer.error('asdasd');
        observer.next('aaaaaa');
        observer.complete();
    });

    source.subscribe(
        function onNext(s: string) {
            console.log('Next: ' + s);
        },
        function onError(err: object) {
            console.log('Error: ' + err);
        },
        function onComplete() {
            console.log('Completed');
        });

    return 'asdasd';
}
