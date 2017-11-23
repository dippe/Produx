import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

App().then( (app) =>
{
    debugger
    ReactDOM.render(
        app,
        document.getElementById('root') as HTMLElement
    );
}).catch(
    reason => {
        debugger

    }
);
registerServiceWorker();
