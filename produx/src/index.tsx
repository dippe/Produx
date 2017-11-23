import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

renderRoot(App('VALID'));

export function renderRoot (appPromise: Promise<JSX.Element>) {
    appPromise.then((appElement) => {
        console.log('Successful app render');
        ReactDOM.render(
            appElement,
            document.getElementById('root') as HTMLElement
        );
    }).catch(
        reason => {
            console.error('Error in app render');
        }
    );
}

registerServiceWorker();
