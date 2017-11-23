import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

App().then((app) => {
    console.log('Successful app render');
    ReactDOM.render(
        app,
        document.getElementById('root') as HTMLElement
    );
}).catch(
    reason => {
        console.error('Error in app render');
    }
);
registerServiceWorker();
